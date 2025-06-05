
import React from 'react';
import { AlertTriangle, X, Shield, TrendingDown } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-full px-4 py-2 text-sm font-medium text-red-700 dark:text-red-300 mb-6">
            <TrendingDown className="h-4 w-4" />
            <span>Critical Email Deliverability Issues</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your Cold Emails Are <span className="text-red-600">Failing</span>
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light">
            <span className="font-bold text-red-600">90%</span> of cold emails never reach the inbox. Here's why your outreach campaigns are underperforming and costing you revenue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 transition-transform">
              <AlertTriangle className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Poor Domain Setup
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Missing SPF, DKIM, DMARC records send your emails straight to spam folders, damaging your sender reputation permanently.
            </p>
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-300 font-semibold">Impact: 60% of emails go to spam</p>
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 transition-transform">
              <X className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cold Domain Reputation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              New domains have zero trust with email providers like Gmail and Outlook, resulting in automatic spam classification.
            </p>
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-300 font-semibold">Impact: 80% inbox placement failure</p>
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Compliance Violations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              GDPR and CAN-SPAM violations lead to permanent blacklisting and legal penalties up to $43,792 per violation.
            </p>
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <p className="text-sm text-red-700 dark:text-red-300 font-semibold">Impact: Legal risks & blacklisting</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-10 border border-red-200 dark:border-red-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-600 dark:text-red-400 mb-2">$43,792</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Maximum CAN-SPAM penalty per email</p>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 dark:text-red-400 mb-2">90%</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Cold emails that never reach inbox</p>
            </div>
            <div>
              <div className="text-4xl font-black text-red-600 dark:text-red-400 mb-2">-78%</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Revenue loss from poor deliverability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
