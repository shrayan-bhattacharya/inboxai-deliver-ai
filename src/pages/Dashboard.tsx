
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Shield, Mail, Zap, Check, AlertTriangle, TrendingUp, Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

const Dashboard = () => {
  const handleMockAction = (action: string) => {
    toast.success(`${action} completed successfully!`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Deliverability Dashboard</h1>
              <p className="text-gray-600">Monitor and optimize your email campaigns in real-time</p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inbox Placement Rate</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <Progress value={94.2} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">+2.1% from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Domain Health Score</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">98/100</div>
                  <Progress value={98} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">Excellent status</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Emails Verified</CardTitle>
                  <Check className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,847</div>
                  <p className="text-xs text-muted-foreground mt-2">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Warm-ups</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground mt-2">3 domains in progress</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Domain Status */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Domain Configuration Status</CardTitle>
                  <CardDescription>Monitor your domain health and DNS settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { domain: 'sales.company.com', spf: true, dkim: true, dmarc: true, health: 98 },
                      { domain: 'outreach.company.com', spf: true, dkim: true, dmarc: false, health: 85 },
                      { domain: 'marketing.company.com', spf: false, dkim: false, dmarc: false, health: 45 }
                    ].map((domain, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{domain.domain}</h4>
                          <div className="flex gap-2 mt-2">
                            <Badge variant={domain.spf ? "default" : "destructive"}>
                              SPF {domain.spf ? "✓" : "✗"}
                            </Badge>
                            <Badge variant={domain.dkim ? "default" : "destructive"}>
                              DKIM {domain.dkim ? "✓" : "✗"}
                            </Badge>
                            <Badge variant={domain.dmarc ? "default" : "destructive"}>
                              DMARC {domain.dmarc ? "✓" : "✗"}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{domain.health}/100</div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleMockAction('Domain configuration')}
                          >
                            Configure
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleMockAction('Email list verification')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Verify Email List
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleMockAction('Domain warm-up')}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Start Domain Warm-up
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleMockAction('Compliance check')}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Check Compliance
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleMockAction('Analytics export')}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => handleMockAction('Report export')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest events and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: 'success', message: 'Email rectification completed: 247 emails corrected', time: '1 hour ago' },
                    { type: 'success', message: 'Domain sales.company.com warm-up completed successfully', time: '2 hours ago' },
                    { type: 'warning', message: 'DMARC record missing for outreach.company.com', time: '5 hours ago' },
                    { type: 'info', message: 'Email verification completed: 1,247 emails processed', time: '1 day ago' },
                    { type: 'success', message: 'SPF record updated for marketing.company.com', time: '2 days ago' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      {activity.type === 'success' && <Check className="h-4 w-4 text-green-600 mt-0.5" />}
                      {activity.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />}
                      {activity.type === 'info' && <Mail className="h-4 w-4 text-blue-600 mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
