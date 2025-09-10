// Supabase Edge Function: create-checkout-session
// Creates a Stripe Checkout session for a subscription to the Premium plan.
// Env required:
// - STRIPE_SECRET_KEY
// - STRIPE_PRICE_ID
// - SUPABASE_URL
// - SUPABASE_ANON_KEY
// - SUPABASE_SERVICE_ROLE_KEY
// - SITE_URL (optional, fallback http://localhost:5173)

import Stripe from "npm:stripe";
import { createClient } from "npm:@supabase/supabase-js";

type Json = Record<string, unknown> | Array<unknown> | string | number | boolean | null;

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const STRIPE_PRICE_ID = Deno.env.get("STRIPE_PRICE_ID") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const SITE_URL = Deno.env.get("SITE_URL") ?? "http://localhost:5173";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

function json(body: Json, init?: number | ResponseInit) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  return new Response(payload, {
    headers: { "Content-Type": "application/json" },
    ...(typeof init === "number" ? { status: init } : init),
  });
}

function error(message: string, status = 400) {
  return json({ error: message }, status);
}

async function getUserFromRequest(req: Request) {
  const auth = req.headers.get("Authorization");
  if (!auth) return null;
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: auth } },
  });
  const { data, error: err } = await supabase.auth.getUser();
  if (err || !data?.user) return null;
  return data.user;
}

async function getOrCreateStripeCustomer(user: { id: string; email?: string | null }) {
  const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Try existing mapping
  const { data: existing, error: selectError } = await supabaseAdmin
    .from("stripe_customers")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (selectError) throw selectError;
  if (existing?.stripe_customer_id) return existing.stripe_customer_id as string;

  // Create customer in Stripe
  const customer = await stripe.customers.create({
    email: user.email ?? undefined,
    metadata: { user_id: user.id },
  });

  // Persist mapping
  const { error: insertError } = await supabaseAdmin
    .from("stripe_customers")
    .insert({ user_id: user.id, stripe_customer_id: customer.id });
  if (insertError) throw insertError;

  return customer.id;
}

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") return error("Method not allowed", 405);

    if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_ID || !SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
      return error("Missing required environment variables", 500);
    }

    const user = await getUserFromRequest(req);
    if (!user) return error("Unauthorized", 401);

    const customerId = await getOrCreateStripeCustomer(user);

    // Build return URLs
    const origin = req.headers.get("Origin") ?? SITE_URL;
    const successUrl = `${origin}/account?status=success`;
    const cancelUrl = `${origin}/pricing?status=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
    });

    return json({ url: session.url });
  } catch (e) {
    console.error("create-checkout-session error", e);
    return error("Internal Server Error", 500);
  }
});

