
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Mail,
  Shield,
  Settings,
  Home,
  LogOut,
  Zap,
  TrendingUp,
  Users,
  Globe,
  MessageSquare,
  AlertTriangle,
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Monitor key metrics and manage your email deliverability</p>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      Deliverability Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94%</div>
                    <p className="text-xs text-muted-foreground">+3% this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-green-500" />
                      Emails Sent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">12,457</div>
                    <p className="text-xs text-muted-foreground">+12% from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      Emails Rectified
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">1,247</div>
                    <p className="text-xs text-muted-foreground">AI-corrected emails</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      Active Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">547</div>
                    <p className="text-xs text-muted-foreground">32 new sign-ups</p>
                  </CardContent>
                </Card>
              </div>

              {/* Deliverability Overview */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Deliverability Overview</CardTitle>
                  <CardDescription>Real-time insights into your email performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Inbox Placement</h3>
                      <div className="text-center">
                        <div className="text-6xl font-bold text-gray-900 mb-2">85%</div>
                        <p className="text-gray-600">Emails landing in primary inbox</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Spam Rate</h3>
                      <div className="text-center">
                        <div className="text-6xl font-bold text-gray-900 mb-2">15%</div>
                        <p className="text-gray-600">Emails flagged as spam</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Domain Health */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Domain Health</CardTitle>
                  <CardDescription>Monitor your domain reputation and authentication status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Globe className="h-6 w-6 mx-auto text-green-500 mb-2" />
                      <h4 className="font-medium">SPF Record</h4>
                      <p className="text-sm text-gray-600">Valid and active</p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-6 w-6 mx-auto text-green-500 mb-2" />
                      <h4 className="font-medium">DKIM Record</h4>
                      <p className="text-sm text-gray-600">Properly configured</p>
                    </div>
                    <div className="text-center">
                      <AlertTriangle className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                      <h4 className="font-medium">DMARC Record</h4>
                      <p className="text-sm text-gray-600">Action required</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest events and updates</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">New user signed up</p>
                          <p className="text-xs text-gray-600">5 minutes ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <div>
                          <p className="text-sm font-medium">15 emails auto-rectified</p>
                          <p className="text-xs text-gray-600">30 minutes ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium">Deliverability score increased</p>
                          <p className="text-xs text-gray-600">1 hour ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
