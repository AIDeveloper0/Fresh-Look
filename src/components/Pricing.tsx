import React from 'react';
import { Check, Star, Crown, Users } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      description: "Perfect for getting started with home styling",
      features: [
        "Take the trend quiz",
        "Basic trend insights",
        "Monthly newsletter",
        "3 style guides"
      ],
      buttonText: "Start Free",
      buttonStyle: "border-2 border-amber-600 text-amber-600 hover:bg-amber-50"
    },
    {
      name: "Premium",
      price: "19",
      period: "month",
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      description: "For serious home stylists who want the full experience",
      features: [
        "Everything in Free",
        "Personalized improvement plans",
        "Weekly trend newsletters",
        "Advanced styling tools",
        "Unlimited style guides",
        "Exclusive trend previews"
      ],
      buttonText: "Start Premium",
      buttonStyle: "bg-amber-600 text-white hover:bg-amber-700",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Style Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free trend discovery to premium personalized solutions, 
            find the perfect plan for your home styling needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'border-2 border-amber-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 30-day money-back guarantee</p>
          <p className="text-sm text-gray-500">
            Cancel anytime. No hidden fees. Questions? 
            <a href="#" className="text-amber-600 hover:text-amber-700 ml-1">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;