
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
  ArrowUp,
  ArrowDown,
  Star,
  Activity,
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Header */}
              <div className="mb-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-2">
                      Dashboard Overview
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Monitor key metrics and manage your email deliverability
                    </p>
                  </div>
                  <div className="hidden md:flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last updated</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">2 minutes ago</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Quick Status Banner */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-200">Excellent Performance</p>
                        <p className="text-sm text-green-600 dark:text-green-300">All systems operational • Deliverability score trending up</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="group hover-lift bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-950/20 border-blue-100 dark:border-blue-900/30 animate-fade-in">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">Deliverability Score</span>
                      </div>
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">94%</div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +3% this month
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover-lift bg-gradient-to-br from-white to-green-50/50 dark:from-gray-800 dark:to-green-950/20 border-green-100 dark:border-green-900/30 animate-fade-in">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Mail className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">Emails Sent</span>
                      </div>
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">12,457</div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +12% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover-lift bg-gradient-to-br from-white to-yellow-50/50 dark:from-gray-800 dark:to-yellow-950/20 border-yellow-100 dark:border-yellow-900/30 animate-fade-in">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">Emails Rectified</span>
                      </div>
                      <Activity className="h-4 w-4 text-yellow-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">1,247</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">AI-corrected emails</p>
                  </CardContent>
                </Card>

                <Card className="group hover-lift bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-800 dark:to-purple-950/20 border-purple-100 dark:border-purple-900/30 animate-fade-in">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                          <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">Active Users</span>
                      </div>
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">547</div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">32 new sign-ups</p>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Deliverability Overview */}
              <Card className="mb-8 hover-lift bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        Deliverability Overview
                      </CardTitle>
                      <CardDescription className="text-base mt-2">Real-time insights into your email performance</CardDescription>
                    </div>
                    <Button variant="outline" className="hover-scale">
                      <Activity className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Inbox Placement</h3>
                      <div className="relative">
                        <div className="text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 animate-scale-in">85%</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Emails landing in primary inbox</p>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Spam Rate</h3>
                      <div className="relative">
                        <div className="text-6xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 animate-scale-in">15%</div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Emails flagged as spam</p>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-bounce-gentle"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Domain Health */}
              <Card className="mb-8 hover-lift bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    Domain Health
                  </CardTitle>
                  <CardDescription className="text-base mt-2">Monitor your domain reputation and authentication status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 hover-scale group">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">SPF Record</h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">Valid and active</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          ✓ Configured
                        </span>
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 hover-scale group">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">DKIM Record</h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">Properly configured</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          ✓ Configured
                        </span>
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800 hover-scale group">
                      <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <AlertTriangle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">DMARC Record</h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-medium">Action required</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                          ⚠ Needs Setup
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Recent Activity */}
              <Card className="hover-lift bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 animate-fade-in-up">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                          <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        Recent Activity
                      </CardTitle>
                      <CardDescription className="text-base mt-2">Latest events and updates</CardDescription>
                    </div>
                    <Button variant="outline" className="hover-scale">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">New user signed up</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">5 minutes ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-scale">
                        View
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-xl border border-yellow-100 dark:border-yellow-900/30 hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">15 emails auto-rectified</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">30 minutes ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-scale">
                        View
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-100 dark:border-green-900/30 hover-lift">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Deliverability score increased</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-scale">
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
