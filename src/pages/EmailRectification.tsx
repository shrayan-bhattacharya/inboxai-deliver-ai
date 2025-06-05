
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Navbar from '@/components/Navbar';
import { Upload, Download, Mail, CheckCircle, XCircle, AlertTriangle, Lightbulb, Zap, TrendingUp, Sparkles, Brain, Target } from 'lucide-react';
import { toast } from 'sonner';

interface RectificationResult {
  id: string;
  originalEmail: string;
  rectifiedEmail: string;
  confidence: number;
  issueType: 'typo' | 'domain' | 'format' | 'provider';
  description: string;
  status: 'corrected' | 'suggested' | 'failed';
}

const EmailRectification = () => {
  const [singleEmail, setSingleEmail] = useState('');
  const [bulkEmails, setBulkEmails] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  
  const [rectificationResults, setRectificationResults] = useState<RectificationResult[]>([
    {
      id: '1',
      originalEmail: 'john.doe@gmial.com',
      rectifiedEmail: 'john.doe@gmail.com',
      confidence: 98,
      issueType: 'typo',
      description: 'Common typo in Gmail domain',
      status: 'corrected'
    },
    {
      id: '2', 
      originalEmail: 'sarah@hotmial.com',
      rectifiedEmail: 'sarah@hotmail.com',
      confidence: 95,
      issueType: 'typo',
      description: 'Typo in Hotmail domain',
      status: 'corrected'
    },
    {
      id: '3',
      originalEmail: 'mike@yaho.com',
      rectifiedEmail: 'mike@yahoo.com',
      confidence: 92,
      issueType: 'domain',
      description: 'Incomplete domain name',
      status: 'suggested'
    },
    {
      id: '4',
      originalEmail: 'invalid.email.format',
      rectifiedEmail: 'invalid.email.format@gmail.com',
      confidence: 65,
      issueType: 'format',
      description: 'Missing @ symbol and domain',
      status: 'suggested'
    },
    {
      id: '5',
      originalEmail: 'user@outlok.co',
      rectifiedEmail: 'user@outlook.com',
      confidence: 88,
      issueType: 'provider',
      description: 'Incorrect provider domain',
      status: 'corrected'
    }
  ]);

  const handleSingleRectification = () => {
    if (!singleEmail) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResult: RectificationResult = {
        id: Date.now().toString(),
        originalEmail: singleEmail,
        rectifiedEmail: generateRectification(singleEmail),
        confidence: Math.floor(Math.random() * 30) + 70,
        issueType: getIssueType(singleEmail),
        description: generateDescription(singleEmail),
        status: 'corrected'
      };
      
      setRectificationResults(prev => [mockResult, ...prev]);
      setIsProcessing(false);
      setSingleEmail('');
      toast.success('Email rectified successfully!');
    }, 2000);
  };

  const generateRectification = (email: string): string => {
    const corrections: { [key: string]: string } = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'yahooo.com': 'yahoo.com',
      'yaho.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
      'outlok.co': 'outlook.com'
    };
    
    for (const [wrong, correct] of Object.entries(corrections)) {
      if (email.includes(wrong)) {
        return email.replace(wrong, correct);
      }
    }
    
    if (!email.includes('@')) {
      return email + '@gmail.com';
    }
    
    return email;
  };

  const getIssueType = (email: string): 'typo' | 'domain' | 'format' | 'provider' => {
    if (!email.includes('@')) return 'format';
    if (email.includes('gmial') || email.includes('hotmial')) return 'typo';
    if (email.includes('yaho') || email.includes('outlok')) return 'domain';
    return 'provider';
  };

  const generateDescription = (email: string): string => {
    const type = getIssueType(email);
    const descriptions = {
      typo: 'Common typo detected in email domain',
      domain: 'Incomplete or incorrect domain name',
      format: 'Invalid email format structure',
      provider: 'Incorrect email provider domain'
    };
    return descriptions[type];
  };

  const handleBulkRectification = () => {
    if (!bulkEmails.trim()) return;
    
    setProcessingProgress(0);
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success('Bulk rectification completed!');
          return 100;
        }
        return prev + 12;
      });
    }, 300);
    
    toast.info('AI rectification processing started...');
  };

  const getStatusBadge = (result: RectificationResult) => {
    switch (result.status) {
      case 'corrected':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover-scale"><CheckCircle className="h-3 w-3 mr-1" />Corrected</Badge>;
      case 'suggested':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover-scale"><Lightbulb className="h-3 w-3 mr-1" />Suggested</Badge>;
      case 'failed':
        return <Badge variant="destructive" className="hover-scale"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getIssueTypeBadge = (type: string) => {
    const badges = {
      typo: <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 hover-scale">Typo</Badge>,
      domain: <Badge variant="outline" className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 hover-scale">Domain</Badge>,
      format: <Badge variant="outline" className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 hover-scale">Format</Badge>,
      provider: <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover-scale">Provider</Badge>
    };
    return badges[type as keyof typeof badges];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="mb-8 animate-fade-in-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                          AI Email Rectification
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">Advanced AI-powered email correction and validation system</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      <span>Powered by advanced machine learning algorithms</span>
                      <Target className="h-4 w-4 text-green-500 ml-4" />
                      <span>94.8% accuracy rate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 animate-fade-in-up">
                <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      Rectified Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">1,247</div>
                    <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                      Success Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">94.8%</div>
                    <p className="text-xs text-muted-foreground">Rectification accuracy</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-white" />
                      </div>
                      Common Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Typos</div>
                    <p className="text-xs text-muted-foreground">68% of all corrections</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg">
                        <Target className="h-4 w-4 text-white" />
                      </div>
                      Time Saved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24.5h</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="single" className="space-y-6 animate-fade-in-up">
                <TabsList className="grid w-full grid-cols-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50">
                  <TabsTrigger value="single" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Single Rectification</TabsTrigger>
                  <TabsTrigger value="bulk" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Bulk Processing</TabsTrigger>
                  <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="single">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Single Email Rectification */}
                    <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                            <Lightbulb className="h-5 w-5 text-white" />
                          </div>
                          AI Email Rectification
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">Advanced AI correction with confidence scoring</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Try: user@gmial.com, test@hotmial.com"
                            value={singleEmail}
                            onChange={(e) => setSingleEmail(e.target.value)}
                            className="flex-1 bg-white/50 dark:bg-slate-800/50 border-white/20 dark:border-slate-700/50"
                          />
                          <Button onClick={handleSingleRectification} disabled={isProcessing || !singleEmail} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                            <Zap className="h-4 w-4 mr-2" />
                            {isProcessing ? 'Processing...' : 'Rectify'}
                          </Button>
                        </div>
                        
                        {isProcessing && (
                          <div className="space-y-2 animate-fade-in">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">AI analyzing email patterns...</span>
                              <span className="text-blue-600 dark:text-blue-400">Processing</span>
                            </div>
                            <Progress value={undefined} className="w-full" />
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Quick Examples */}
                    <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          Try These Examples
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400">Click to test common email issues</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {[
                          'user@gmial.com',
                          'test@hotmial.com', 
                          'admin@yaho.com',
                          'contact@outlok.co',
                          'invalid.email.format'
                        ].map((example) => (
                          <Button
                            key={example}
                            variant="outline"
                            className="w-full justify-start text-left hover-scale bg-white/50 dark:bg-slate-800/50 border-white/20 dark:border-slate-700/50"
                            onClick={() => setSingleEmail(example)}
                          >
                            {example}
                          </Button>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="bulk">
                  <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg">
                          <Upload className="h-5 w-5 text-white" />
                        </div>
                        Bulk Email Rectification
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">Process multiple emails with AI-powered corrections</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center bg-white/30 dark:bg-slate-800/30">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 dark:text-gray-500 mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Upload CSV file with emails</p>
                        <Button variant="outline" size="sm" className="hover-scale bg-white/50 dark:bg-slate-800/50">
                          Choose File
                        </Button>
                      </div>
                      
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">or</div>
                      
                      <Textarea
                        placeholder="Paste emails here (one per line):&#10;user@gmial.com&#10;test@hotmial.com&#10;admin@yaho.com&#10;contact@outlok.co"
                        value={bulkEmails}
                        onChange={(e) => setBulkEmails(e.target.value)}
                        rows={6}
                        className="bg-white/50 dark:bg-slate-800/50 border-white/20 dark:border-slate-700/50"
                      />
                      
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" onClick={handleBulkRectification}>
                        <Zap className="h-4 w-4 mr-2" />
                        Bulk Rectify Emails
                      </Button>
                      
                      {processingProgress > 0 && processingProgress < 100 && (
                        <div className="space-y-2 animate-fade-in">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">AI processing emails...</span>
                            <span className="text-blue-600 dark:text-blue-400">{processingProgress}%</span>
                          </div>
                          <Progress value={processingProgress} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-white" />
                          </div>
                          Issue Distribution
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Typos (68%)</span>
                            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '68%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Domain Issues (20%)</span>
                            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-400 to-indigo-500 h-2 rounded-full" style={{width: '20%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Format Errors (8%)</span>
                            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full" style={{width: '8%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Provider Issues (4%)</span>
                            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{width: '4%'}}></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          Top Corrections
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { from: 'gmial.com', to: 'gmail.com', count: 1247 },
                            { from: 'hotmial.com', to: 'hotmail.com', count: 856 },
                            { from: 'yaho.com', to: 'yahoo.com', count: 423 },
                            { from: 'outlok.com', to: 'outlook.com', count: 312 }
                          ].map((correction) => (
                            <div key={correction.from} className="flex justify-between text-sm">
                              <span className="text-gray-700 dark:text-gray-300">{correction.from} → {correction.to}</span>
                              <span className="font-medium text-blue-600 dark:text-blue-400">{correction.count}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Rectification Results */}
              <Card className="mt-6 hover-lift glass border-white/20 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl animate-fade-in-up">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        Recent Rectifications
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">AI-powered email corrections with confidence scores</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="hover-scale bg-white/50 dark:bg-slate-800/50 border-white/20 dark:border-slate-700/50">
                      <Download className="h-4 w-4 mr-2" />
                      Export Results
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rectificationResults.map((result) => (
                      <div key={result.id} className="flex items-center justify-between p-4 border border-white/20 dark:border-slate-700/50 rounded-lg bg-white/30 dark:bg-slate-800/30 hover-lift">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-red-600 dark:text-red-400 line-through">{result.originalEmail}</span>
                            <span className="text-gray-400 dark:text-gray-500">→</span>
                            <span className="font-medium text-green-600 dark:text-green-400">{result.rectifiedEmail}</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <div className="flex items-center gap-2">
                              <span>{result.description}</span>
                              <span className="text-blue-600 dark:text-blue-400">• Confidence: {result.confidence}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getIssueTypeBadge(result.issueType)}
                          {getStatusBadge(result)}
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
    </div>
  );
};

export default EmailRectification;
