import React, { useState } from 'react';
import { Home, TrendingUp, Calendar, MessageSquare, User, Settings, Bell, Award, BookOpen, Video, Star, Mail, ArrowLeft } from 'lucide-react';

interface MemberDashboardProps {
  membershipType: 'premium';
  onNavigate?: (page: string) => void;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ membershipType, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { id: 'trends', label: 'Trend Center', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'tools', label: 'Style Tools', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'newsletter', label: 'Newsletter', icon: <Mail className="h-5 w-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
  ];

  const recentTrends = [
    {
      title: "Warm Minimalism Takes Center Stage",
      category: "Living Room",
      source: "Architectural Digest",
      date: "2 hours ago",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Curved Furniture: The New Soft Modern",
      category: "Furniture",
      source: "Elle Decor",
      date: "5 hours ago",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Biophilic Design: Bringing Nature Indoors",
      category: "General",
      source: "House Beautiful",
      date: "1 day ago",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Newsletter: Kitchen Trends",
      date: "March 15, 2024",
      time: "Email Delivery",
      expert: "Sarah Richardson",
      type: 'Newsletter'
    },
    {
      title: "Trend Report: Spring Colors",
      date: "March 18, 2024",
      time: "Email Delivery",
      expert: "Jonathan Adler",
      type: "Newsletter"
    },
    {
      title: "Style Guide: Outdoor Living",
      date: "March 22, 2024",
      time: "Email Delivery",
      expert: "Chip & Joanna Gaines",
      type: 'Newsletter'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Home className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FreshLook</span>
              <span className="ml-3 px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                PREMIUM
              </span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-amber-600" />
              <Settings className="h-5 w-5 text-gray-600 cursor-pointer hover:text-amber-600" />
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">JC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        if (item.id === 'trends') onNavigate?.('trends');
                        else if (item.id === 'tools') onNavigate?.('tools');
                        else if (item.id === 'newsletter') onNavigate?.('newsletter');
                        else setActiveTab(item.id);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-amber-100 text-amber-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, James!</h1>
                  <p className="text-gray-600">Here's what's trending in home design today.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Your Trend Score</p>
                        <p className="text-2xl font-bold text-amber-600">8.7/10</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Projects Completed</p>
                        <p className="text-2xl font-bold text-blue-600">12</p>
                      </div>
                      <Home className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Community Rank</p>
                        <p className="text-2xl font-bold text-purple-600">#247</p>
                      </div>
                      <Award className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Next Event</p>
                        <p className="text-2xl font-bold text-orange-600">2 days</p>
                      </div>
                      <Calendar className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                </div>

                {/* Recent Trends */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Trends</h2>
                  <div className="space-y-4">
                    {recentTrends.map((trend, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <img src={trend.image} alt={trend.title} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{trend.title}</h3>
                          <p className="text-sm text-gray-600">{trend.category} • {trend.source}</p>
                          <p className="text-xs text-gray-500">{trend.date}</p>
                        </div>
                        <button className="text-amber-600 hover:text-amber-700 font-medium">View</button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'trends' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Trend Center</h1>
                  <p className="text-gray-600">Access the full trend center with comprehensive analysis and personalized recommendations.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="mb-6">
                    <TrendingUp className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Full Trend Center</h2>
                    <p className="text-gray-600 mb-6">
                      Explore hundreds of trending designs, get personalized recommendations, and stay ahead of the latest home styling trends.
                    </p>
                  </div>
                  <button
                    onClick={() => window.open('/trends', '_blank')}
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    Open Trend Center
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Style Tools</h1>
                  <p className="text-gray-600">Access professional styling tools and room planners to design your perfect space.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="mb-6">
                    <BookOpen className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Professional Style Tools</h2>
                    <p className="text-gray-600 mb-6">
                      Access color palette generators, room planners, lighting calculators, and more professional tools to bring your design vision to life.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('tools')}
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    Open Style Tools
                  </button>
                </div>
              </div>
            )}


            {activeTab === 'community' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Newsletter</h1>
                  <p className="text-gray-600">Access your personalized newsletters and stay updated with the latest trends.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="mb-6">
                    <Mail className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Newsletter Center</h2>
                    <p className="text-gray-600 mb-6">
                      Access your personalized newsletters, browse past issues, and manage your subscription preferences.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('newsletter')}
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    Open Newsletter Center
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
                <p className="text-gray-600">Manage your account and preferences...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;