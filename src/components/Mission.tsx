import React from 'react';
import { Target, Zap, Shield, Users } from 'lucide-react';

const Mission = () => {
  const missionPoints = [
    {
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: "Curated Excellence",
      description: "We handpick only the most current and relevant trends from trusted sources like HGTV, Architectural Digest, and top design magazines."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Instant Access",
      description: "No more hunting across multiple websites and magazines. Get everything you need in one centralized, easy-to-navigate platform."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Expert Validation",
      description: "Every trend is verified by interior design professionals and backed by real-world applications from successful home makeovers."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Driven",
      description: "Learn from a thriving community of home enthusiasts who share their experiences and results with the latest trends."
    }
  ];

  return (
    <section id="mission" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We strive to bring the most current trends to you all in one place for your convenience. 
              Our mission is to eliminate the overwhelming task of searching through countless magazines, 
              websites, and TV shows to find the latest home design inspiration.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By partnering with industry-leading publications and design experts, we deliver 
              high-quality, actionable trend insights that save you time while ensuring you never 
              miss the next big thing in home styling. Whether you're planning a complete renovation 
              or just looking to refresh a single room, we provide the trusted guidance and 
              comprehensive resources you need to transform your space with confidence.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Your Time is Valuable
            </h3>
            <p className="text-amber-700 text-lg">
              Instead of spending hours browsing multiple sources, let us do the heavy lifting. 
              We monitor over 50 design publications and TV shows daily, so you can focus on 
              what matters most – creating the home of your dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;