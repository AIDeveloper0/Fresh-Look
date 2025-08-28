import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Expert Network",
      description: "Connect directly with interior designers, contractors, and style influencers from popular TV shows.",
      stats: "500+ verified experts"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Premium Member",
      content: "FreshLook helped me transform my outdated living room into a modern space. The community support was incredible!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Pro Member",
      content: "As a contractor, I use FreshLook to stay current with trends. My clients love the modern suggestions.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Premium Member",
      content: "The weekly newsletter keeps me inspired and the forums are so helpful when I'm stuck on a design decision.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow home enthusiasts, share your projects, and get inspired by thousands of styling transformations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <div className="text-sm text-amber-600 font-semibold">{feature.stats}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">50,000+</div>
              <div className="text-gray-600">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Design Trends Curated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Members Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="h-4 w-4 text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;