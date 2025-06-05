
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800/30 dark:to-purple-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800/30 dark:to-pink-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-200 to-cyan-200 dark:from-indigo-800/30 dark:to-cyan-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-2000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 dark:bg-blue-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-20 pb-32">
          <div className="space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Email Deliverability</span>
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                Stop Your Emails From Landing in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 dark:from-red-400 dark:via-red-500 dark:to-red-600 animate-pulse">
                  Spam
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                  Forever
                </span>
              </h1>
              
              <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                AI-powered email deliverability platform that ensures your cold emails reach inboxes, not spam folders. 
                <span className="font-semibold text-gray-800 dark:text-gray-100"> Automated domain setup, intelligent warm-up, and predictive inbox placement.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/signup')}
              >
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-lg px-10 py-6 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
                onClick={() => navigate('/dashboard')}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </Button>
            </div>
            
            <div className="flex items-center space-x-10 pt-8">
              <div className="flex items-center space-x-3 group">
                <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">99.2% Uptime</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">GDPR Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Dashboard Mockup */}
          <div className="relative animate-fade-in delay-300">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Deliverability Score</h3>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                    Excellent
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-8xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">94%</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 dark:bg-green-300 rounded-full animate-ping"></div>
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 font-semibold">Overall Deliverability</p>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Inbox Rate</span>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full shadow-lg transition-all duration-1000 ease-out group-hover:shadow-green-400/50 dark:group-hover:shadow-green-300/50" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Spam Rate</span>
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-red-400 to-red-500 h-3 rounded-full shadow-lg transition-all duration-1000 ease-out group-hover:shadow-red-400/50 dark:group-hover:shadow-red-300/50" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Domain Health</span>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
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
