
import React from 'react';
import { Settings, Zap, Check, Shield, BarChart, Link } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: 'Domain Configuration',
      description: 'Automated SPF, DKIM, DMARC setup with one-click deployment',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Email Warm-up',
      description: 'AI-driven warm-up sequences to build domain reputation gradually',
      color: 'yellow'
    },
    {
      icon: Check,
      title: 'Email Verification',
      description: 'Real-time email validation to reduce bounces and improve sender reputation',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Compliance Automation',
      description: 'Built-in GDPR, CAN-SPAM compliance with automated unsubscribe handling',
      color: 'red'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive deliverability metrics and performance insights',
      color: 'purple'
    },
    {
      icon: Link,
      title: 'API Integrations',
      description: 'Connect with Gmail, Outlook, Zoho, and popular CRM platforms',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete email deliverability and prospecting solution
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClasses(feature.color)}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
