
import React from 'react';
import { AlertTriangle, X, Shield } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Cold Emails Are Failing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            90% of cold emails never reach the inbox. Here's why your outreach campaigns are underperforming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
            <div className="text-red-600 mb-4">
              <AlertTriangle className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Poor Domain Setup
            </h3>
            <p className="text-gray-600">
              Missing SPF, DKIM, DMARC records send your emails straight to spam
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
            <div className="text-red-600 mb-4">
              <X className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cold Domain Reputation
            </h3>
            <p className="text-gray-600">
              New domains have zero trust with email providers
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
            <div className="text-red-600 mb-4">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Compliance Violations
            </h3>
            <p className="text-gray-600">
              GDPR and CAN-SPAM violations lead to blacklisting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
