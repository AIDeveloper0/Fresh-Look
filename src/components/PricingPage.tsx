import React from 'react';
import { Check, Star, Crown, Users, Home, ArrowLeft } from 'lucide-react';

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
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
        "Access to community forums",
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
        "Priority community access",
        "Exclusive trend previews"
      ],
      buttonText: "Start Premium",
      buttonStyle: "bg-amber-600 text-white hover:bg-amber-700",
      popular: true
    }
  ];

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const openFreeQuiz = () => {
    // Navigate back to home and scroll to the quiz section
    if (onNavigate) {
      onNavigate('home');
    }
    // Defer to allow Home to render before scrolling
    setTimeout(() => {
      try {
        window.location.hash = '#quiz';
        const el = document.getElementById('quiz');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        // no-op if document not available
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Subscribe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From free trend discovery to premium personalized solutions, 
              find the perfect plan for your home styling needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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
                
                <button
                  onClick={plan.name === 'Free' ? openFreeQuiz : undefined}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose FreshLook?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Curation</h3>
                <p className="text-gray-600">Handpicked trends from top design publications and TV shows</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Community</h3>
                <p className="text-gray-600">Connect with 50,000+ home styling enthusiasts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">98% member satisfaction with styling transformations</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. No hidden fees or cancellation charges.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the free plan?</h3>
                <p className="text-gray-600">The free plan includes access to our trend quiz, basic insights, monthly newsletter, and community forums.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How often are trends updated?</h3>
                <p className="text-gray-600">We update our trend database weekly with insights from over 50 design publications and TV shows.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h3>
                <p className="text-gray-600">You can cancel your subscription at any time with no cancellation fees.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you're having trouble canceling or have questions about your subscription, our support team is here to help:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Email: support@freshlook.com</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Questions</h3>
                <p className="text-gray-600">For questions about billing, charges, or account issues, please contact our billing department at support@freshlook.com.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Cancel anytime. No hidden fees. Questions? 
              <a href="#" className="text-amber-600 hover:text-amber-700 ml-1">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
