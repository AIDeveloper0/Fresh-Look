# FreshLook (Vite + React + Tailwind)

FreshLook is a SPA showcasing a home styling platform: landing page, quiz, Trend Center, Style Tools, and a Premium member dashboard. This branch integrates Supabase for email/password and Google OAuth authentication.

## Stack
- React 18 + TypeScript (Vite)
- Tailwind CSS
- Supabase Auth (`@supabase/supabase-js`)

## Getting Started
1. Install deps:
   - `npm install`
   - `npm install @supabase/supabase-js`
2. Create a Supabase project at https://supabase.com (free tier works).
3. In the Supabase dashboard:
   - Get your Project URL and anon public key from Project Settings → API.
   - (Optional) Under Authentication → Providers → Google, enable Google and set the Redirect URL to your dev origin (e.g., `http://localhost:5173`).
4. Create a `.env.local` in project root:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
5. Run the app: `npm run dev`

## Auth Integration Overview
- Supabase client in `src/lib/supabaseClient.ts` (reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- Email/Password:
  - Sign Up: `src/components/SignUp.tsx` calls `supabase.auth.signUp(...)` and shows a verify email message if email confirmation is enabled.
  - Sign In: `src/components/SignIn.tsx` calls `supabase.auth.signInWithPassword(...)`.
- Google OAuth:
  - Both Sign In/Up provide a "Continue with Google" button using `supabase.auth.signInWithOAuth({ provider: 'google' })`.
- Session Handling:
  - `src/App.tsx` checks for an existing session on mount and listens to `onAuthStateChange` to show the dashboard when signed in and return to home on sign out.
  - Password recovery is handled by listening for the `PASSWORD_RECOVERY` event and routing to the reset screen.

## Password Reset
- Request reset: Open "Forgot your password? Reset it" on the Sign In page, enter your email, and submit. This calls `supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin })`.
- Complete reset: After clicking the email link, Supabase triggers a `PASSWORD_RECOVERY` event; the app routes to `ResetPassword` where you can set a new password (via `supabase.auth.updateUser({ password })`).

## Notes
- By default Supabase requires email confirmation. After Sign Up, the app prompts users to verify their email unless you disable confirmations in Supabase Auth settings.
- This demo sends users to a Premium dashboard after login. Replace with real role/membership logic as needed.
