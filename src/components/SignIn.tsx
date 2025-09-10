import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Home, Chrome, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface SignInProps {
  onNavigate?: (page: string) => void;
  onMemberAccess?: (type: 'premium') => void;
}

const SignIn: React.FC<SignInProps> = ({ onNavigate, onMemberAccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      // On success, either navigate or trigger member access
      if (data.session) {
        onMemberAccess?.('premium');
        onNavigate?.('dashboard');
      }
    } catch (err: any) {
      setError(err?.message ?? 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      // Redirect occurs; nothing else to do here
    } catch (err: any) {
      setError(err?.message ?? 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };
  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
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
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      <div className="py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to continue your home styling journey</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg disabled:opacity-60"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('reset-password')}
                className="mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Forgot your password? Reset it
              </button>
            </div>
          </form>
          {error && (
            <div className="mt-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Google Sign In */}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center space-x-3 py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Chrome className="h-5 w-5 text-red-500" />
              <span className="font-medium text-gray-700">Continue with Google</span>
            </button>
          </div>
          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or explore</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Subscription Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready to unlock premium features and get personalized home styling insights?
            </p>
            <button
              onClick={() => onNavigate && onNavigate('pricing')}
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <span>Explore Subscription Plans</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? 
              <button 
                onClick={() => onNavigate && onNavigate('signup')}
                className="text-amber-600 hover:text-amber-700 ml-1 font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our 
            <a href="#" className="text-amber-600 hover:text-amber-700 mx-1">Terms of Service</a>
            and
            <a href="#" className="text-amber-600 hover:text-amber-700 ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
