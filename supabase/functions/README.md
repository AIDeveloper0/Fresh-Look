Stripe + Supabase Edge Functions

Functions
- create-checkout-session: Creates a Stripe Checkout session for a subscription to your Premium price.
- stripe-webhooks: Verifies Stripe webhook signatures and updates user premium status and subscription rows.

Required environment variables (set as Supabase function secrets)
- STRIPE_SECRET_KEY: your test/live Stripe secret key (sk_...)
- STRIPE_PRICE_ID: the price ID for your Premium plan (price_...)
- STRIPE_WEBHOOK_SECRET: signing secret for your webhook endpoint (whsec_...)
- SUPABASE_URL: your Supabase project URL
- SUPABASE_ANON_KEY: project anon key (for user lookup in checkout function)
- SUPABASE_SERVICE_ROLE_KEY: service role key (for DB writes and auth admin updates)
- SITE_URL (optional): your site origin for redirect URLs, defaults to http://localhost:5173

Deploy
1) Install Supabase CLI and login
   - Windows PowerShell: iwr -useb https://raw.githubusercontent.com/supabase/cli/main/install/windows.ps1 | iex
   - supabase login
2) Link your project
   - supabase link --project-ref <your-project-ref>
3) Set secrets
   - supabase secrets set STRIPE_SECRET_KEY=sk_test_... STRIPE_PRICE_ID=price_... SUPABASE_URL=https://... SUPABASE_ANON_KEY=... SUPABASE_SERVICE_ROLE_KEY=... STRIPE_WEBHOOK_SECRET=whsec_... SITE_URL=http://localhost:5173
4) Deploy functions
   - supabase functions deploy create-checkout-session
   - supabase functions deploy stripe-webhooks

Local testing with Stripe CLI
- stripe listen --forward-to http://localhost:54321/functions/v1/stripe-webhooks

Database setup
- Run the SQL in supabase/sql/stripe_setup.sql in the Supabase SQL editor (public schema).

