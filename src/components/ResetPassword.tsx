import React, { useEffect, useState } from 'react';
import { Mail, Lock, Home, ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface ResetPasswordProps {
  onNavigate?: (page: string) => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [canUpdate, setCanUpdate] = useState(false);

  useEffect(() => {
    // Determine if we have a session (from recovery link or logged-in user)
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      setCanUpdate(!!data.session);
    };
    check();

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session) {
        setCanUpdate(true);
      }
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const handleBackToHome = () => onNavigate?.('home');

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });
      if (error) throw error;
      setInfo('If that email exists, a reset link has been sent.');
    } catch (err: any) {
      setError(err?.message ?? 'Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      if (data.user) {
        setInfo('Password updated. You can continue to your dashboard.');
        // Optionally navigate automatically after a brief delay
        setTimeout(() => onNavigate?.('dashboard'), 800);
      }
    } catch (err: any) {
      setError(err?.message ?? 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBackToHome}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Home className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">FreshLook</span>
            </button>
            <button
              onClick={() => onNavigate?.('signin')}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Sign In</span>
            </button>
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {canUpdate ? 'Set a New Password' : 'Reset Your Password'}
            </h1>
            <p className="text-gray-600">
              {canUpdate
                ? 'Enter a new password for your account.'
                : 'Enter your email and we will send a reset link.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!canUpdate ? (
              <form onSubmit={handleSendLink} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleUpdatePassword} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter a new password"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      id="confirm"
                      name="confirm"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      required
                      minLength={8}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Re-enter your new password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg disabled:opacity-60"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            )}

            {error && (
              <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            {info && (
              <div className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 p-3 rounded flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5" />
                <span>{info}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

