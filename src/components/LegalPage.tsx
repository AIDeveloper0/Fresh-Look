import React, { useState } from 'react';
import { Home, ArrowLeft, Shield, FileText, Cookie, RefreshCw } from 'lucide-react';

interface LegalPageProps {
  onNavigate?: (page: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('privacy');

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const sections = [
    { id: 'privacy', label: 'Privacy Policy', icon: <Shield className="h-5 w-5" /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText className="h-5 w-5" /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <Cookie className="h-5 w-5" /> },
    { id: 'cancellation', label: 'Cancel Subscription', icon: <RefreshCw className="h-5 w-5" /> }
  ];

  const renderPrivacyPolicy = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
      <p className="text-sm text-gray-500">Last updated: March 2024</p>
      
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain our services</li>
            <li>To send you newsletters and trend updates</li>
            <li>To respond to your comments and questions</li>
            <li>To improve our website and services</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Information Sharing</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@freshlook.com.</p>
        </div>
      </div>
    </div>
  );

  const renderTermsOfService = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
      <p className="text-sm text-gray-500">Last updated: March 2024</p>
      
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Acceptance of Terms</h3>
          <p>By accessing and using FreshLook, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Use License</h3>
          <p>Permission is granted to temporarily access FreshLook for personal, non-commercial transitory viewing only.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">User Accounts</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You must be at least 18 years old to create an account</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Uses</h3>
          <p>You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Termination</h3>
          <p>We may terminate or suspend your account at any time for violations of these terms.</p>
        </div>
      </div>
    </div>
  );

  const renderCookiePolicy = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
      <p className="text-sm text-gray-500">Last updated: March 2024</p>
      
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What Are Cookies</h3>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Cookies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to understand how you use our site</li>
            <li>Preference cookies to remember your settings</li>
            <li>Marketing cookies to show relevant advertisements</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Managing Cookies</h3>
          <p>You can control and/or delete cookies as you wish through your browser settings. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Cookies</h3>
          <p>We may use third-party services like Google Analytics that place cookies on your device to help us analyze website usage.</p>
        </div>
      </div>
    </div>
  );

  const renderCancellationGuide = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">How to Cancel Your Subscription</h2>
      <p className="text-sm text-gray-500">Last updated: March 2024</p>
      
      <div className="space-y-4 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancel Anytime</h3>
          <p>You can cancel your FreshLook Premium subscription at any time. There are no cancellation fees, and you'll continue to have access to Premium features until the end of your current billing period.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Cancel</h3>
          <p className="mb-3">Follow these simple steps to cancel your subscription:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Log into your FreshLook account</li>
            <li>Go to Account Settings → Subscription</li>
            <li>Click "Cancel Subscription"</li>
            <li>Confirm your cancellation</li>
            <li>You'll receive an email confirmation</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What Happens After Cancellation</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Your Premium features remain active until your billing period ends</li>
            <li>You'll automatically switch to the Free plan</li>
            <li>Your account data and preferences are preserved</li>
            <li>You can resubscribe at any time</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p>If you're having trouble canceling or have questions about your subscription, our support team is here to help:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Email: support@freshlook.com</li>
            <li>Phone: 1-800-FRESH-LOOK</li>
            <li>Live chat available 24/7 in your account</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Questions</h3>
          <p>For questions about billing, charges, or account issues, please contact our billing department at billing@freshlook.com.</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'privacy':
        return renderPrivacyPolicy();
      case 'terms':
        return renderTermsOfService();
      case 'cookies':
        return renderCookiePolicy();
      case 'cancellation':
        return renderCancellationGuide();
      default:
        return renderPrivacyPolicy();
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Legal Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information about your rights and our policies
            </p>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Legal Documents</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                        activeSection === section.id
                          ? 'bg-amber-100 text-amber-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {section.icon}
                      <span>{section.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;