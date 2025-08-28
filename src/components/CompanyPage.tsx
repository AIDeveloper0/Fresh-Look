import React from 'react';
import { Home, ArrowLeft, Mail, MapPin, Users, Target, Award } from 'lucide-react';

interface CompanyPageProps {
  onNavigate?: (page: string) => void;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About FreshLook
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about making the latest home design trends accessible to everyone, 
              saving you time while helping you create the home of your dreams.
            </p>
          </div>

          {/* About Us Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    FreshLook was born from a simple frustration: staying current with home design trends 
                    required hours of browsing through countless magazines, websites, and TV shows. 
                    We knew there had to be a better way.
                  </p>
                  <p>
                    Founded in 2023, we set out to create a centralized platform that curates the best 
                    trends from trusted sources like HGTV, Architectural Digest, House Beautiful, and more. 
                    Our mission is to save you time while ensuring you never miss the next big thing in home styling.
                  </p>
                  <p>
                    Today, we serve over 50,000 home enthusiasts with weekly trend updates, personalized 
                    recommendations, and professional styling tools. We're proud to have helped thousands 
                    of people transform their spaces with confidence.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Modern home interior" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Excellence</h3>
              <p className="text-gray-600">
                We handpick only the most relevant trends from trusted design authorities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">
                Our members are at the heart of everything we do, driving our innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                98% member satisfaction with styling transformations and recommendations.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@freshlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">Stay Tuned</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;