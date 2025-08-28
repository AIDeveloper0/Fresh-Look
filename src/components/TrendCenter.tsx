import React, { useState } from 'react';
import { TrendingUp, Filter, Search, BookOpen, Eye, Heart, Share2, Calendar, Star, Home, ArrowLeft } from 'lucide-react';

const TrendCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  const categories = [
    { id: 'all', label: 'All Trends' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'color', label: 'Color Palettes' },
    { id: 'furniture', label: 'Furniture' }
  ];

  const timeframes = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'season', label: 'This Season' },
    { id: 'year', label: 'This Year' }
  ];

  const trendingNow = [
    {
      id: 1,
      title: "Warm Minimalism: The Perfect Balance",
      category: "Living Room",
      source: "Architectural Digest",
      trendScore: 9.4,
      views: 12500,
      likes: 890,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Discover how to create cozy, uncluttered spaces that feel both modern and inviting.",
      tags: ["Minimalism", "Warm Tones", "Cozy", "Modern"],
      publishedAt: "2 hours ago",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Curved Furniture: Softening Modern Spaces",
      category: "Furniture",
      source: "Elle Decor",
      trendScore: 8.9,
      views: 9800,
      likes: 654,
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Explore the rise of organic shapes and curved lines in contemporary furniture design.",
      tags: ["Curved Design", "Organic Shapes", "Comfort", "Contemporary"],
      publishedAt: "5 hours ago",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Biophilic Design: Nature-Inspired Interiors",
      category: "General",
      source: "House Beautiful",
      trendScore: 9.1,
      views: 15200,
      likes: 1120,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Learn how to incorporate natural elements for healthier, more harmonious living spaces.",
      tags: ["Biophilic", "Natural Elements", "Wellness", "Sustainability"],
      publishedAt: "1 day ago",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Bold Accent Walls: Making a Statement",
      category: "Color",
      source: "Better Homes & Gardens",
      trendScore: 8.6,
      views: 7300,
      likes: 445,
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Transform any room with strategic use of color and texture on feature walls.",
      tags: ["Accent Walls", "Bold Colors", "Statement Design", "Color Theory"],
      publishedAt: "2 days ago",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Smart Kitchen Islands: Function Meets Style",
      category: "Kitchen",
      source: "Food & Wine",
      trendScore: 9.0,
      views: 11400,
      likes: 789,
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Discover innovative kitchen island designs that maximize both storage and social space.",
      tags: ["Kitchen Islands", "Smart Storage", "Social Cooking", "Functionality"],
      publishedAt: "3 days ago",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Outdoor Living Rooms: Extending Your Space",
      category: "Exterior",
      source: "Sunset Magazine",
      trendScore: 8.8,
      views: 9600,
      likes: 567,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Create seamless indoor-outdoor living with these trending patio and deck designs.",
      tags: ["Outdoor Living", "Patio Design", "Indoor-Outdoor", "Entertainment"],
      publishedAt: "4 days ago",
      readTime: "5 min read"
    }
  ];

  const filteredTrends = selectedCategory === 'all' 
    ? trendingNow 
    : trendingNow.filter(trend => trend.category.toLowerCase().replace(' ', '-') === selectedCategory);

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
              <span className="ml-2 text-2xl font-bold text-gray-900">FreshLook</span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trend Center</h1>
          <p className="text-gray-600">Stay ahead with the latest interior and exterior design trends from top publications and shows.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trends, styles, or topics..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>

            {/* Timeframe Filter */}
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-600" />
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {timeframes.map(timeframe => (
                  <option key={timeframe.id} value={timeframe.id}>{timeframe.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Trending Topics</p>
                <p className="text-2xl font-bold text-amber-600">247</p>
              </div>
              <TrendingUp className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New This Week</p>
                <p className="text-2xl font-bold text-green-600">32</p>
              </div>
              <Star className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Most Popular</p>
                <p className="text-2xl font-bold text-blue-600">Warm Minimalism</p>
              </div>
              <Heart className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Your Saved</p>
                <p className="text-2xl font-bold text-purple-600">18</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Premium Badge */}
        <div className="bg-gradient-to-r from-purple-600 to-amber-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold">Premium Trend Center</h2>
              <p className="text-purple-100">Access exclusive trends and personalized recommendations</p>
            </div>
          </div>
        </div>

        {/* Trends Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrends.map((trend) => (
            <div key={trend.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={trend.image} alt={trend.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {trend.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {trend.trendScore}/10
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{trend.source}</span>
                  <span className="text-xs text-gray-500">{trend.publishedAt}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{trend.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trend.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {trend.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{trend.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{trend.likes}</span>
                    </div>
                    <span>{trend.readTime}</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            Load More Trends
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TrendCenter;