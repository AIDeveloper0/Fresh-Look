import { supabase } from './supabaseClient';

// Returns base URL for Supabase Edge Functions
// Configure `VITE_FUNCTIONS_URL` for deployed project, e.g. https://<ref>.functions.supabase.co
// Falls back to local dev: http://localhost:54321/functions/v1
export function getFunctionsBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_FUNCTIONS_URL as string | undefined;
  return fromEnv?.replace(/\/$/, '') || 'http://localhost:54321/functions/v1';
}

export async function startPremiumCheckout(): Promise<string> {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session?.access_token) {
    throw new Error('Please sign in to start Premium.');
  }

  const res = await fetch(`${getFunctionsBaseUrl()}/create-checkout-session`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Checkout failed (${res.status}). ${text}`);
  }

  const body = await res.json().catch(() => ({}));
  if (!body?.url) throw new Error('No checkout URL returned.');
  return body.url as string;
}

