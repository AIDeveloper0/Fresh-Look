import React from 'react';
import { Mail, TrendingUp, Clock, Award } from 'lucide-react';

const Newsletter = () => {
  const newsletterFeatures = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: "Weekly Trend Digest",
      description: "Curated insights from Home & Garden, Fixer Upper, and more"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Early Access",
      description: "Be the first to know about emerging design trends"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: "Expert Tips",
      description: "Professional advice from TV show designers and stylists"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-16 w-16 mx-auto mb-6 text-white" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Ahead of the Trends
        </h2>
        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
          Get weekly insights from the world's top design shows and magazines delivered straight to your inbox.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {newsletterFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3 inline-flex">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-amber-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
            />
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            No spam, unsubscribe anytime. 100% free forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;