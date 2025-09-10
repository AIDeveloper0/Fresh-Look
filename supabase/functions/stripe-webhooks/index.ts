// Supabase Edge Function: stripe-webhooks
// Verifies Stripe webhook signatures and updates subscription state.
// Env required:
// - STRIPE_SECRET_KEY
// - STRIPE_WEBHOOK_SECRET
// - SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY

import Stripe from "npm:stripe";
import { createClient } from "npm:@supabase/supabase-js";
import { corsHeaders } from "../_shared/cors.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

function json(body: unknown, init?: number | ResponseInit) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  return new Response(payload, {
    headers: { "Content-Type": "application/json", ...corsHeaders },
    ...(typeof init === "number" ? { status: init } : init),
  });
}

async function findUserIdByCustomer(customerId: string): Promise<string | null> {
  const { data, error } = await supabaseAdmin
    .from("stripe_customers")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();
  if (error) {
    console.error("findUserIdByCustomer error", error);
    return null;
  }
  return (data?.user_id as string | undefined) ?? null;
}

async function setUserPremium(userId: string, isPremium: boolean) {
  const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
    app_metadata: { is_premium: isPremium },
  });
  if (error) console.error("setUserPremium error", error);
}

async function upsertSubscription(params: {
  userId: string;
  customerId: string;
  subscriptionId: string;
  status: string;
  priceId: string | null;
  currentPeriodEnd: number | null;
}) {
  const { error } = await supabaseAdmin.from("user_subscriptions").upsert({
    user_id: params.userId,
    stripe_customer_id: params.customerId,
    stripe_subscription_id: params.subscriptionId,
    status: params.status,
    price_id: params.priceId ?? "",
    current_period_end: params.currentPeriodEnd
      ? new Date(params.currentPeriodEnd * 1000).toISOString()
      : null,
  });
  if (error) console.error("upsertSubscription error", error);
}

Deno.serve(async (req) => {
  // CORS preflight support
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return json({ error: "Missing required environment variables" }, 500);
  }

  const signature = req.headers.get("Stripe-Signature");
  if (!signature) return json({ error: "Missing Stripe-Signature" }, 400);

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return json({ error: "Invalid signature" }, 400);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerId = session.customer as string;
        const userId = await findUserIdByCustomer(customerId);
        if (userId) await setUserPremium(userId, true);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = sub.customer as string;
        const userId = await findUserIdByCustomer(customerId);
        if (userId) {
          await upsertSubscription({
            userId,
            customerId,
            subscriptionId: sub.id,
            status: sub.status,
            priceId: (sub.items.data[0]?.price?.id as string | undefined) ?? null,
            currentPeriodEnd: sub.current_period_end ?? null,
          });

          const active = sub.status === "active" || sub.status === "trialing";
          await setUserPremium(userId, active);
        }
        break;
      }
      default: {
        // Ignore unhandled event types
        break;
      }
    }

    return json({ received: true });
  } catch (e) {
    console.error("Webhook processing error", e);
    return json({ error: "Webhook handler error" }, 500);
  }
});
