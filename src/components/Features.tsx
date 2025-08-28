import React from 'react';
import { CheckCircle, TrendingUp, Mail, Palette, Home, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Free Trend Quiz",
      description: "Take our 10-question quiz to discover how trendy your home is and get personalized recommendations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Latest Trends",
      description: "Stay updated with the most current interior and exterior design trends from top shows and magazines."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Style Tools",
      description: "Access professional tools to visualize and plan improvements for every room in your home."
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-500" />,
      title: "Weekly Newsletter",
      description: "Get curated trends from Home & Garden, Fixer Upper, Dream Home Makeover, and more."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
      title: "TV Show & Magazine Updates",
      description: "Stay up-to-date on the latest styles from your favorite TV shows and magazines."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Style Your Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From trend discovery to community support, FreshLook provides comprehensive tools 
            and resources for your home styling journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;