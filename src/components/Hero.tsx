
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              AI-Powered Email Deliverability
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Stop Your Emails</span>
                <br />
                <span className="text-gray-900 dark:text-white">From Landing in</span>
                <br />
                <span className="gradient-text">Spam Forever</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                AI-powered email deliverability platform that ensures your cold emails reach inboxes, not spam folders. 
                <span className="font-semibold text-gray-800 dark:text-gray-200"> Automated domain setup, intelligent warm-up, and predictive inbox placement.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/signup')}
              >
                <TrendingUp className="mr-3 h-6 w-6" />
                Start 14-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/dashboard')}
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo (2 min)
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">99.2% Uptime</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Dashboard Mockup */}
          <div className="relative">
            {/* Floating cards effect */}
            <div className="absolute -top-4 -left-4 w-72 h-40 glass-effect rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Weekly Growth</h4>
                <div className="text-green-500 text-2xl font-bold">↗ 23%</div>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Inbox rate improvement</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Deliverability Score</h3>
                  <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-bold">
                    Excellent
                  </div>
                </div>
                
                <div className="text-center relative">
                  <div className="text-8xl font-bold gradient-text mb-4">94%</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Overall Deliverability</p>
                  
                  {/* Circular progress indicator */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-32 h-32 rounded-full border-8 border-gray-200 dark:border-gray-700">
                      <div className="w-full h-full rounded-full border-8 border-transparent border-t-green-500 animate-spin"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Inbox Rate</span>
                      <span className="font-bold text-green-600 dark:text-green-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Spam Rate</span>
                      <span className="font-bold text-red-600 dark:text-red-400">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-1000" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Domain Health</span>
                      <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-lg text-sm font-bold">
                        Excellent
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-32 glass-effect rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                  <p className="text-xl font-bold text-gray-800 dark:text-gray-200">12,457 emails</p>
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
