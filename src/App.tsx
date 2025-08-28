import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import Quiz from './components/Quiz';
import Community from './components/Community';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MemberDashboard from './components/MemberDashboard';
import TrendCenter from './components/TrendCenter';
import StyleTools from './components/StyleTools';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PricingPage from './components/PricingPage';
import NewsletterPage from './components/NewsletterPage';
import CompanyPage from './components/CompanyPage';
import LegalPage from './components/LegalPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [membershipType, setMembershipType] = useState<'premium'>('premium');

  // Demo function to simulate login/membership access
  const handleMemberAccess = (type: 'premium') => {
    setMembershipType(type);
    setCurrentPage('dashboard');
  };

  // Function to handle navigation from dashboard
  const handleDashboardNavigation = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === 'dashboard') {
    return <MemberDashboard membershipType={membershipType} onNavigate={handleDashboardNavigation} />;
  }

  if (currentPage === 'trends') {
    return <TrendCenter />;
  }

  if (currentPage === 'tools') {
    return <StyleTools />;
  }

  if (currentPage === 'newsletter') {
    return <NewsletterPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'signin') {
    return <SignIn onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'signup') {
    return <SignUp onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'pricing') {
    return <PricingPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'company') {
    return <CompanyPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'legal') {
    return <LegalPage onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} onMemberAccess={handleMemberAccess} />
      <Hero onNavigate={setCurrentPage} onMemberAccess={handleMemberAccess} />
      <Mission />
      <Features />
      <Quiz />
      <Community />
      <Newsletter />
      <Footer />
      
      {/* Demo Navigation - Remove in production */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
        <p className="text-sm font-semibold text-gray-900 mb-2">Demo Navigation:</p>
        <div className="space-y-2">
          <button
            onClick={() => setCurrentPage('home')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Public Site
          </button>
          <button
            onClick={() => handleMemberAccess('premium')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Premium Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('trends')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Trend Center
          </button>
          <button
            onClick={() => setCurrentPage('tools')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Style Tools
          </button>
          <button
            onClick={() => setCurrentPage('newsletter')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Newsletter Page
          </button>
          <button
            onClick={() => setCurrentPage('signin')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Sign In Page
          </button>
          <button
            onClick={() => setCurrentPage('signup')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Sign Up Page
          </button>
          <button
            onClick={() => setCurrentPage('pricing')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Pricing Page
          </button>
          <button
            onClick={() => setCurrentPage('company')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Company Page
          </button>
          <button
            onClick={() => setCurrentPage('legal')}
            className="block w-full text-left text-sm text-gray-600 hover:text-amber-600"
          >
            Legal Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;