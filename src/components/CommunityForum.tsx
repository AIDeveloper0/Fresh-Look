import React, { useState } from 'react';
import { MessageSquare, Users, Send, Search, Filter, Pin, Heart, Reply, MoreVertical, Home, Award, Clock, TrendingUp } from 'lucide-react';

interface CommunityForumProps {
  onNavigate?: (page: string) => void;
}

const CommunityForum: React.FC<CommunityForumProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPostContent, setNewPostContent] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const categories = [
    { id: 'all', label: 'All Discussions', count: 1247 },
    { id: 'living-room', label: 'Living Room', count: 324 },
    { id: 'kitchen', label: 'Kitchen', count: 289 },
    { id: 'bedroom', label: 'Bedroom', count: 156 },
    { id: 'bathroom', label: 'Bathroom', count: 98 },
    { id: 'exterior', label: 'Exterior', count: 134 },
    { id: 'diy', label: 'DIY Projects', count: 246 },
    { id: 'help', label: 'Help & Advice', count: 178 }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Help! My living room feels too cold and sterile",
      author: "Sarah_Designer",
      authorLevel: "Premium Member",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Living Room",
      content: "I recently updated my living room with modern furniture, but now it feels too cold and unwelcoming. Any suggestions for adding warmth without cluttering the space?",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: "2 hours ago",
      isPinned: false,
      tags: ["Modern", "Warm", "Living Room", "Help"]
    },
    {
      id: 2,
      title: "Before & After: My Kitchen Island Transformation",
      author: "HomeRenovator_Mike",
      authorLevel: "Pro Member",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Kitchen",
      content: "Just finished my kitchen island project! Added waterfall countertops and hidden storage. Here's the complete transformation...",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 67,
      likes: 128,
      views: 892,
      timeAgo: "5 hours ago",
      isPinned: true,
      tags: ["Kitchen", "DIY", "Before & After", "Island"]
    },
    {
      id: 3,
      title: "Biophilic design trends - what's working for you?",
      author: "PlantLover_Emma",
      authorLevel: "Premium Member",
      avatar: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "General",
      content: "I'm incorporating more natural elements into my home design. What biophilic trends are you loving right now? Share your plant walls, natural textures, and green spaces!",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 34,
      likes: 76,
      views: 445,
      timeAgo: "1 day ago",
      isPinned: false,
      tags: ["Biophilic", "Plants", "Natural", "Trends"]
    },
    {
      id: 4,
      title: "Budget-friendly accent wall ideas under $100",
      author: "BudgetDesigner_Alex",
      authorLevel: "Free Member",
      avatar: "https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "DIY",
      content: "Looking for creative accent wall ideas that won't break the bank. I have about $100 to work with and want maximum impact. What are your favorite budget solutions?",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 89,
      likes: 156,
      views: 1203,
      timeAgo: "2 days ago",
      isPinned: false,
      tags: ["Budget", "Accent Wall", "DIY", "Under $100"]
    },
    {
      id: 5,
      title: "Curved furniture trend - love it or leave it?",
      author: "ModernMinimalist_Jay",
      authorLevel: "Pro Member",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Furniture",
      content: "Seeing curved sofas and rounded coffee tables everywhere. Is this trend here to stay or just a passing phase? What's your take on organic shapes in modern design?",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 42,
      likes: 63,
      views: 567,
      timeAgo: "3 days ago",
      isPinned: false,
      tags: ["Curved", "Furniture", "Trends", "Modern"]
    },
    {
      id: 6,
      title: "Outdoor living space setup for small patios",
      author: "SmallSpaceBigStyle",
      authorLevel: "Premium Member",
      avatar: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Exterior",
      content: "Working with a tiny 8x10 patio but want to create a cozy outdoor living area. Any tips for maximizing small outdoor spaces? Furniture recommendations welcome!",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      replies: 28,
      likes: 39,
      views: 312,
      timeAgo: "4 days ago",
      isPinned: false,
      tags: ["Small Space", "Outdoor", "Patio", "Cozy"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category.toLowerCase().replace(' ', '-') === selectedCategory);

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleNewPost = () => {
    if (newPostContent.trim()) {
      // Handle new post submission
      console.log('New post:', newPostContent);
      setNewPostContent('');
      setShowNewPost(false);
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
          </div>
        </div>
      </header>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Forum</h1>
            <p className="text-gray-600">Connect with fellow home enthusiasts, share projects, and get expert advice.</p>
          </div>

          {/* Stats Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">50,247</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">1,247</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">8,934</div>
                <div className="text-sm text-gray-600">Messages Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
                <div className="text-sm text-gray-600">Online Now</div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0 space-y-6">
              {/* New Post Button */}
              <button
                onClick={() => setShowNewPost(true)}
                className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Start New Discussion
              </button>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Members */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Richardson", level: "Expert", posts: 234 },
                    { name: "Mike Chen", level: "Pro Member", posts: 189 },
                    { name: "Emma Wilson", level: "Premium", posts: 156 },
                    { name: "Alex Johnson", level: "Pro Member", posts: 134 }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.level} • {member.posts} posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Filters */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Forum Posts */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {post.isPinned && <Pin className="h-4 w-4 text-amber-600" />}
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-amber-600 cursor-pointer">
                              {post.title}
                            </h3>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                          <span className="font-medium">{post.author}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            post.authorLevel === 'Pro Member' ? 'bg-blue-100 text-blue-800' :
                            post.authorLevel === 'Premium Member' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {post.authorLevel}
                          </span>
                          <span>{post.category}</span>
                          <span>{post.timeAgo}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        
                        {post.image && (
                          <img
                            src={post.image}
                            alt="Post image"
                            className="w-full max-w-md h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <button className="flex items-center space-x-1 hover:text-amber-600">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-amber-600">
                              <Reply className="h-4 w-4" />
                              <span>{post.replies} replies</span>
                            </button>
                            <span>{post.views} views</span>
                          </div>
                          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                            Join Discussion
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  Load More Discussions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Start New Discussion</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="">Select a category</option>
                  {categories.slice(1).map(category => (
                    <option key={category.id} value={category.id}>{category.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Share your thoughts, questions, or project details..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (optional)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Add tags separated by commas"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowNewPost(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleNewPost}
                className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Post Discussion</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityForum;