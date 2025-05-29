
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, LogIn, BarChart, Mail, CheckCircle } from 'lucide-react';

const UserJourneyFlow = () => {
  const journeySteps = [
    {
      id: 1,
      title: "Landing Page",
      route: "/",
      icon: Users,
      description: "User sees 94% inbox placement pitch",
      action: "Click 'Get Started'"
    },
    {
      id: 2,
      title: "Sign Up/Login",
      route: "/signup",
      icon: LogIn,
      description: "Mock authentication",
      action: "Login with demo credentials"
    },
    {
      id: 3,
      title: "Dashboard",
      route: "/dashboard",
      icon: BarChart,
      description: "View metrics and navigation",
      action: "Navigate to Email Verification"
    },
    {
      id: 4,
      title: "Email Verification",
      route: "/email-verification",
      icon: Mail,
      description: "Verify & rectify emails",
      action: "Process emails with AI corrections"
    },
    {
      id: 5,
      title: "Review Results",
      route: "/dashboard",
      icon: CheckCircle,
      description: "Updated stats and analytics",
      action: "View improved metrics"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">InboxAI User Journey Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            {journeySteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center text-center space-y-3 p-4 border rounded-lg bg-white shadow-sm min-w-[200px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-blue-600 font-mono">{step.route}</p>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  <p className="text-xs bg-gray-100 px-2 py-1 rounded">{step.action}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 hidden lg:block" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Demo Credentials</h4>
            <p className="text-sm text-blue-800">
              <strong>Email:</strong> demo@inboxai.com<br />
              <strong>Password:</strong> test123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserJourneyFlow;
