import React, { useState } from 'react';
import { Video, Calendar, Clock, User, Star, MessageSquare, CheckCircle, Award } from 'lucide-react';

const ExpertConsultations = () => {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const experts = [
    {
      id: 1,
      name: "Sarah Richardson",
      specialty: "Kitchen & Bath Design",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Award-winning designer with 15+ years experience. Featured on HGTV's Design Inc and Sarah's House.",
      expertise: ["Kitchen Renovation", "Bathroom Design", "Color Consultation", "Space Planning"],
      availability: "Available this week",
      nextSlot: "Tomorrow 2:00 PM"
    },
    {
      id: 2,
      name: "Jonathan Adler",
      specialty: "Modern & Contemporary",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 200,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Renowned interior designer and author. Known for bold, modern designs with a touch of whimsy.",
      expertise: ["Modern Design", "Color Psychology", "Furniture Selection", "Art Curation"],
      availability: "Available next week",
      nextSlot: "March 18, 10:00 AM"
    },
    {
      id: 3,
      name: "Joanna Gaines",
      specialty: "Farmhouse & Rustic",
      rating: 5.0,
      reviews: 203,
      hourlyRate: 250,
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Co-host of HGTV's Fixer Upper. Expert in farmhouse style and creating warm, inviting spaces.",
      expertise: ["Farmhouse Style", "Rustic Design", "Open Concept", "Outdoor Living"],
      availability: "Limited availability",
      nextSlot: "March 25, 3:00 PM"
    },
    {
      id: 4,
      name: "Bobby Berk",
      specialty: "Modern Minimalism",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 180,
      image: "https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Interior design expert from Netflix's Queer Eye. Specializes in functional, beautiful spaces.",
      expertise: ["Minimalist Design", "Small Spaces", "Organization", "Budget Makeovers"],
      availability: "Available this week",
      nextSlot: "March 16, 4:00 PM"
    }
  ];

  const upcomingSessions = [
    {
      expert: "Sarah Richardson",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      topic: "Kitchen Island Design Consultation",
      status: "confirmed"
    },
    {
      expert: "Bobby Berk",
      date: "March 20, 2024",
      time: "10:00 AM EST",
      duration: "45 minutes",
      topic: "Living Room Layout Review",
      status: "pending"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Consultations</h1>
          <p className="text-gray-600">Get personalized advice from top interior design professionals.</p>
        </div>

        {/* Pro Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold">Pro Member Exclusive</h2>
              <p className="text-blue-100">Book unlimited 1-on-1 sessions with industry experts</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Available Experts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Experts</h2>
              <div className="space-y-6">
                {experts.map((expert) => (
                  <div key={expert.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">${expert.hourlyRate}/hour</div>
                            <div className="text-sm text-gray-500">{expert.availability}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-amber-600 font-medium">{expert.specialty}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                            <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{expert.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {expert.expertise.map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Next available: {expert.nextSlot}</span>
                          </div>
                          <button
                            onClick={() => setSelectedExpert(expert.id)}
                            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                          >
                            Book Session
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Modal */}
            {selectedExpert && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Book Session with {experts.find(e => e.id === selectedExpert)?.name}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTimeSlot(time)}
                            className={`p-2 text-sm border rounded-lg transition-colors ${
                              selectedTimeSlot === time
                                ? 'bg-amber-600 text-white border-amber-600'
                                : 'border-gray-300 hover:border-amber-600'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Topic</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        rows={3}
                        placeholder="Briefly describe what you'd like to discuss..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-6">
                    <button
                      onClick={() => setSelectedExpert(null)}
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{session.expert}</h4>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        session.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {session.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{session.topic}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{session.date}</span>
                      <Clock className="h-3 w-3" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Session History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Sessions</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Kitchen Design Review</p>
                    <p className="text-xs text-gray-500">with Sarah Richardson • March 8</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Color Consultation</p>
                    <p className="text-xs text-gray-500">with Jonathan Adler • March 1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-3">Session Tips</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Prepare photos of your space beforehand</li>
                <li>• Have your measurements ready</li>
                <li>• List your specific questions</li>
                <li>• Sessions are recorded for your reference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultations;