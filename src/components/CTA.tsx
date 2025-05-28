
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Fix Your Email Deliverability?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join 500+ businesses that have improved their inbox placement with InboxAI
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-center justify-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">94% average inbox placement rate</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">Automated domain configuration</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">AI-powered optimization</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Check className="h-5 w-5 text-green-400" />
            <span className="text-white">Full compliance automation</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Start Your Free Trial Today
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
            Schedule a Demo
          </Button>
        </div>
        
        <p className="text-blue-100">
          No credit card required • 14-day free trial • Setup in under 5 minutes
        </p>
      </div>
    </section>
  );
};

export default CTA;
