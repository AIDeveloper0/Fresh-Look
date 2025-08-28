import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Home, CheckCircle, X } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const questions = [
    {
      question: "How would you describe your current living room furniture?",
      options: [
        { text: "Ultra-modern with clean lines", score: 10 },
        { text: "Contemporary with some traditional elements", score: 7 },
        { text: "Classic traditional style", score: 4 },
        { text: "Mix of different styles and ages", score: 2 }
      ]
    },
    {
      question: "What's your kitchen style?",
      options: [
        { text: "Open concept with waterfall countertops", score: 10 },
        { text: "Updated cabinets with modern appliances", score: 7 },
        { text: "Traditional cabinets with some updates", score: 4 },
        { text: "Original from when house was built", score: 1 }
      ]
    },
    {
      question: "How do you handle lighting in your home?",
      options: [
        { text: "Smart LED systems with dimming", score: 10 },
        { text: "Mix of modern fixtures and natural light", score: 7 },
        { text: "Standard fixtures with some accent lighting", score: 4 },
        { text: "Basic ceiling lights and table lamps", score: 2 }
      ]
    },
    {
      question: "What's your exterior curb appeal like?",
      options: [
        { text: "Landscaped with modern hardscaping", score: 10 },
        { text: "Well-maintained with some design elements", score: 7 },
        { text: "Basic landscaping, kept neat", score: 4 },
        { text: "Minimal exterior attention", score: 1 }
      ]
    },
    {
      question: "How do you approach color schemes?",
      options: [
        { text: "Trending palettes updated regularly", score: 10 },
        { text: "Neutral base with pops of current colors", score: 7 },
        { text: "Safe, classic colors throughout", score: 4 },
        { text: "Whatever colors were there originally", score: 1 }
      ]
    },
    {
      question: "What's your approach to home technology?",
      options: [
        { text: "Smart home with integrated systems", score: 10 },
        { text: "Some smart devices and upgrades", score: 7 },
        { text: "Basic modern conveniences", score: 4 },
        { text: "Traditional setup, minimal tech", score: 1 }
      ]
    },
    {
      question: "How often do you update your decor?",
      options: [
        { text: "Seasonally with current trends", score: 10 },
        { text: "Annually with new pieces", score: 7 },
        { text: "Every few years when needed", score: 4 },
        { text: "Rarely, if ever", score: 1 }
      ]
    },
    {
      question: "What's your bathroom style?",
      options: [
        { text: "Spa-like with modern fixtures", score: 10 },
        { text: "Updated with contemporary elements", score: 7 },
        { text: "Clean and functional", score: 4 },
        { text: "Original fixtures and tile", score: 1 }
      ]
    },
    {
      question: "How do you approach storage and organization?",
      options: [
        { text: "Built-in solutions with hidden storage", score: 10 },
        { text: "Stylish storage that doubles as decor", score: 7 },
        { text: "Functional storage pieces", score: 4 },
        { text: "Whatever works, aesthetics secondary", score: 1 }
      ]
    },
    {
      question: "What's your approach to following design trends?",
      options: [
        { text: "Always aware of and implementing latest trends", score: 10 },
        { text: "Selective about which trends to follow", score: 7 },
        { text: "Occasionally notice trends but slow to adopt", score: 4 },
        { text: "Prefer timeless over trendy", score: 2 }
      ]
    }
  ];

  const handleAnswerSelect = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTotalScore = () => {
    return answers.reduce((sum, score) => sum + score, 0);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 85) return { message: "Trendsetter!", color: "text-green-600", description: "Your home is incredibly on-trend!" };
    if (score >= 70) return { message: "Style Savvy", color: "text-blue-600", description: "You have a great eye for modern style." };
    if (score >= 50) return { message: "Getting There", color: "text-yellow-600", description: "You're on the right track with some updates needed." };
    return { message: "Fresh Start", color: "text-orange-600", description: "Lots of potential for trendy updates!" };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (!isQuizOpen) {
    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="h-16 w-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Trendy Is Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our free 10-question quiz to discover your home's trend score and get personalized recommendations for updates.
          </p>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            Start Free Quiz
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Home Trend Quiz</h2>
            <button 
              onClick={() => setIsQuizOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {!showResults ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option.score)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
                
                {answers[currentQuestion] && (
                  <button
                    onClick={() => currentQuestion < questions.length - 1 ? setCurrentQuestion(currentQuestion + 1) : setShowResults(true)}
                    className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <span>{currentQuestion < questions.length - 1 ? 'Next' : 'See Results'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quiz Complete!</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {getTotalScore()}/100
                </div>
                <div className={`text-xl font-semibold ${getScoreMessage(getTotalScore()).color} mb-2`}>
                  {getScoreMessage(getTotalScore()).message}
                </div>
                <p className="text-gray-600">
                  {getScoreMessage(getTotalScore()).description}
                </p>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={resetQuiz}
                  className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Retake Quiz
                </button>
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  Get Personalized Solutions
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;