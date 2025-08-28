import React, { useState } from 'react';
import { Palette, Home, Camera, Ruler, PaintBucket, Lightbulb, Sofa, Grid3X3, Download, Save, ArrowLeft } from 'lucide-react';

const StyleTools = () => {
  const [activeRoom, setActiveRoom] = useState('living-room');
  const [selectedTool, setSelectedTool] = useState('color-palette');

  const rooms = [
    { id: 'living-room', label: 'Living Room', icon: <Sofa className="h-5 w-5" /> },
    { id: 'kitchen', label: 'Kitchen', icon: <Home className="h-5 w-5" /> },
    { id: 'bedroom', label: 'Bedroom', icon: <Home className="h-5 w-5" /> },
    { id: 'bathroom', label: 'Bathroom', icon: <Home className="h-5 w-5" /> },
    { id: 'exterior', label: 'Exterior', icon: <Home className="h-5 w-5" /> }
  ];

  const tools = [
    { id: 'color-palette', label: 'Color Palette Generator', icon: <Palette className="h-5 w-5" /> },
    { id: 'room-planner', label: 'Room Planner', icon: <Grid3X3 className="h-5 w-5" /> },
    { id: 'lighting-calculator', label: 'Lighting Calculator', icon: <Lightbulb className="h-5 w-5" /> },
    { id: 'paint-visualizer', label: 'Paint Visualizer', icon: <PaintBucket className="h-5 w-5" /> },
    { id: 'measurement-tool', label: 'Measurement Tool', icon: <Ruler className="h-5 w-5" /> },
    { id: 'style-matcher', label: 'Style Matcher', icon: <Camera className="h-5 w-5" /> }
  ];

  const colorPalettes = [
    {
      name: "Warm Minimalist",
      colors: ["#F5F5DC", "#D2B48C", "#8B7355", "#654321", "#2F1B14"],
      description: "Perfect for creating cozy, uncluttered spaces"
    },
    {
      name: "Modern Coastal",
      colors: ["#F0F8FF", "#B0E0E6", "#4682B4", "#2F4F4F", "#191970"],
      description: "Bring the serenity of the ocean indoors"
    },
    {
      name: "Earthy Bohemian",
      colors: ["#F4A460", "#CD853F", "#A0522D", "#8B4513", "#654321"],
      description: "Rich, natural tones for a grounded feel"
    },
    {
      name: "Scandinavian Fresh",
      colors: ["#FFFFFF", "#F5F5F5", "#E6E6FA", "#D3D3D3", "#696969"],
      description: "Clean, bright palette with subtle warmth"
    }
  ];

  const renderColorPaletteTool = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Color Palettes for {rooms.find(r => r.id === activeRoom)?.label}</h3>
        <p className="text-gray-600 mb-6">Discover professionally curated color combinations that are trending right now.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {colorPalettes.map((palette, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">{palette.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{palette.description}</p>
            
            <div className="flex space-x-2 mb-4">
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 text-amber-600 hover:text-amber-700 text-sm">
                <Save className="h-4 w-4" />
                <span>Save Palette</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-semibold text-amber-800 mb-2">Pro Tip</h4>
        <p className="text-amber-700 text-sm">
          Use the 60-30-10 rule: 60% dominant color, 30% secondary color, and 10% accent color for balanced room design.
        </p>
      </div>
    </div>
  );

  const renderRoomPlanner = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Room Planner - {rooms.find(r => r.id === activeRoom)?.label}</h3>
        <p className="text-gray-600 mb-6">Plan your space layout with our interactive room designer.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <Grid3X3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-600 mb-2">Interactive Room Planner</h4>
            <p className="text-gray-500 mb-4">Drag and drop furniture, adjust layouts, and visualize your space</p>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Launch Planner
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2">Furniture Library</h5>
          <p className="text-sm text-gray-600">Access 1000+ furniture pieces</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2">Measurement Tools</h5>
          <p className="text-sm text-gray-600">Precise room and furniture sizing</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2">3D Visualization</h5>
          <p className="text-sm text-gray-600">See your design in 3D</p>
        </div>
      </div>
    </div>
  );

  const renderLightingCalculator = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lighting Calculator - {rooms.find(r => r.id === activeRoom)?.label}</h3>
        <p className="text-gray-600 mb-6">Calculate the perfect lighting for your space based on room size and function.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Room Dimensions</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="10" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ceiling Height (feet)</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="9" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Lighting Requirements</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Room Area:</span>
                  <span className="text-sm font-semibold">120 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Recommended Lumens:</span>
                  <span className="text-sm font-semibold">2,400 - 3,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Suggested Fixtures:</span>
                  <span className="text-sm font-semibold">3-4 fixtures</span>
                </div>
              </div>

              {/* Premium Badge */}
              <div className="bg-gradient-to-r from-purple-600 to-amber-600 text-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Premium Tools</span>
                </div>
                <p className="text-sm text-purple-100">
                  Access professional styling tools with your Premium membership
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="mt-6 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
          Calculate Lighting Plan
        </button>
      </div>
    </div>
  );

  const renderToolContent = () => {
    switch (selectedTool) {
      case 'color-palette':
        return renderColorPaletteTool();
      case 'room-planner':
        return renderRoomPlanner();
      case 'lighting-calculator':
        return renderLightingCalculator();
      default:
        return (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <div className="text-gray-400 mb-4">
              {tools.find(t => t.id === selectedTool)?.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              {tools.find(t => t.id === selectedTool)?.label}
            </h3>
            <p className="text-gray-500">This tool is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Style Tools</h1>
              <p className="text-gray-600">Professional tools to help you design and visualize your perfect space.</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-6">
            {/* Room Selection */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Select Room</h3>
              <div className="space-y-1">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeRoom === room.id
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {room.icon}
                    <span>{room.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tool Selection */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Tools</h3>
              <div className="space-y-1">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                      selectedTool === tool.id
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tool.icon}
                    <span>{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderToolContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleTools;