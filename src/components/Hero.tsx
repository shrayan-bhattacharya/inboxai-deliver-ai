
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stop Your Emails From Landing in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  Spam
                </span>{' '}
                Forever
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered email deliverability platform that ensures your cold emails reach inboxes, not spam folders. 
                Automated domain setup, intelligent warm-up, and predictive inbox placement.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
                onClick={() => navigate('/signup')}
              >
                Start 14-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2"
                onClick={() => navigate('/dashboard')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo (2 min)
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">99.2% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">GDPR Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Deliverability Score</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Excellent
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">94%</div>
                  <p className="text-gray-600">Overall Deliverability</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Inbox Rate</span>
                      <span className="text-sm font-semibold text-green-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Spam Rate</span>
                      <span className="text-sm font-semibold text-red-600">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Domain Health</span>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Excellent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
