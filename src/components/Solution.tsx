
import React from 'react';
import { Check, Zap, Brain } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Complete Email Deliverability Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            InboxAI combines domain configuration, AI-powered warm-up, and predictive analytics to guarantee your emails reach inboxes.
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Automated Domain Configuration
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">One-Click SPF/DKIM/DMARC Setup</h4>
                    <p className="text-gray-600">Automatically configure all DNS records with our smart detection system</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Health Monitoring</h4>
                    <p className="text-gray-600">24/7 monitoring with instant alerts for configuration issues</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Domain Management</h4>
                    <p className="text-gray-600">Manage unlimited domains from a single dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Domain Health Score</h4>
                  <div className="text-3xl font-bold text-gray-900">98/100</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SPF Record</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Valid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">DKIM</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">DMARC</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Valid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  AI-Powered Inbox Prediction
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Machine Learning Models</h4>
                    <p className="text-gray-600">Predict inbox placement across all major email providers with 94% accuracy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Optimization</h4>
                    <p className="text-gray-600">AI analyzes your email content and suggests improvements to avoid spam triggers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Optimization</h4>
                    <p className="text-gray-600">Continuously improve deliverability based on performance data</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Inbox Prediction Rates</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Gmail</span>
                      <span className="text-sm font-semibold text-blue-600">92% Inbox Rate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Outlook</span>
                      <span className="text-sm font-semibold text-green-600">88% Inbox Rate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Yahoo</span>
                      <span className="text-sm font-semibold text-purple-600">85% Inbox Rate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
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

export default Solution;
