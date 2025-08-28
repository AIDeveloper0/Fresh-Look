import React from 'react';
import { TrendingUp, Star, Users } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
  onMemberAccess?: (type: 'premium') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onMemberAccess }) => {
  const handleTakeQuiz = () => {
    // Scroll to quiz section on the same page
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewTrends = () => {
    // For demo purposes, we'll simulate premium access
    // In a real app, you'd check actual user membership status
    if (onMemberAccess) {
      onMemberAccess('premium');
    }
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-5 w-5 text-amber-500" />
              <span className="text-amber-700 font-medium">Top Rated Home Styling Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Home with 
              <span className="text-amber-600"> Fresh</span> Design Trends
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the latest interior and exterior home styling trends. Take our free quiz to see how trendy your space is, then get personalized solutions to create your dream home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleTakeQuiz}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
              >
                Take Free Quiz
              </button>
              <button 
                onClick={handleViewTrends}
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                View Trends
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">500+ Trends Updated Weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600">50k+ Happy Members</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern living room" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">9.2/10</div>
                <div className="text-gray-600">Trend Score</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-semibold transform rotate-12">
              Trending Now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;