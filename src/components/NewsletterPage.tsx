import React from 'react';
import { Mail, Clock, TrendingUp, BookOpen, Home, ArrowLeft } from 'lucide-react';

interface NewsletterPageProps {
  onNavigate?: (page: string) => void;
}

const NewsletterPage: React.FC<NewsletterPageProps> = ({ onNavigate }) => {
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

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <Mail className="h-24 w-24 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FreshLook Newsletters
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the latest home design trends with our curated weekly newsletters
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
            <div className="mb-8">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Tuned!</h2>
              <p className="text-lg text-gray-600 mb-6">
                This page is currently in development. We're working hard to bring you an amazing newsletter experience.
              </p>
              <p className="text-gray-500">
                In the meantime, you can still subscribe to our newsletter using the form on our homepage.
              </p>
            </div>

            <button
              onClick={handleBackToHome}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Return to Homepage
            </button>
          </div>

          {/* Preview Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Trends</h3>
              <p className="text-gray-600 text-sm">
                Get the latest design trends from top publications delivered weekly
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-gray-600 text-sm">
                Professional tips and advice from industry-leading designers
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Mail className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Content</h3>
              <p className="text-gray-600 text-sm">
                Subscriber-only content and early access to new features
              </p>
            </div>
          </div>

          {/* Temporary Subscription */}
          <div className="mt-12 bg-amber-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Want to be notified when it's ready?</h3>
            <p className="text-amber-100 mb-6">
              Subscribe to our newsletter on the homepage and you'll be the first to know when our newsletter page launches!
            </p>
            <button
              onClick={handleBackToHome}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Subscribe on Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;