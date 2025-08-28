import React, { useState } from 'react';
import { Menu, X, Home, TrendingUp, Users, Mail } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  onMemberAccess?: (type: 'premium') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onMemberAccess }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Home className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">FreshLook</span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#mission" className="text-gray-600 hover:text-amber-600 transition-colors">Our Mission</a>
            <a href="#features" className="text-gray-600 hover:text-amber-600 transition-colors">Features</a>
            <a href="#quiz" className="text-gray-600 hover:text-amber-600 transition-colors">Take Quiz</a>
            <button 
              onClick={() => onMemberAccess && onMemberAccess('premium')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Premium Dashboard
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('pricing')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('newsletter')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Newsletter
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('company')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Company
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('legal')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Legal
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onNavigate && onNavigate('signin')}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              Sign In
            </button>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Start Free Trial
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#mission" className="block px-3 py-2 text-gray-600 hover:text-amber-600">Our Mission</a>
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-amber-600">Features</a>
              <a href="#quiz" className="block px-3 py-2 text-gray-600 hover:text-amber-600">Take Quiz</a>
              <button 
                onClick={() => onMemberAccess && onMemberAccess('premium')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600"
              >
                Premium Dashboard
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600"
              >
                Pricing
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('newsletter')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600"
              >
                Newsletter
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('company')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600"
              >
                Company
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('legal')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600"
              >
                Legal
              </button>
              <div className="pt-2">
                <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;