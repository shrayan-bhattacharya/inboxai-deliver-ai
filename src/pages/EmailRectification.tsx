
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
import { Upload, Download, Mail, CheckCircle, XCircle, AlertTriangle, Lightbulb, Zap, TrendingUp } from 'lucide-react';
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
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Corrected</Badge>;
      case 'suggested':
        return <Badge className="bg-blue-100 text-blue-800"><Lightbulb className="h-3 w-3 mr-1" />Suggested</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getIssueTypeBadge = (type: string) => {
    const badges = {
      typo: <Badge variant="outline" className="text-orange-600">Typo</Badge>,
      domain: <Badge variant="outline" className="text-purple-600">Domain</Badge>,
      format: <Badge variant="outline" className="text-red-600">Format</Badge>,
      provider: <Badge variant="outline" className="text-blue-600">Provider</Badge>
    };
    return badges[type as keyof typeof badges];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Email Rectification</h1>
                <p className="text-gray-600">Advanced AI-powered email correction and validation system</p>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      Rectified Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      Success Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">94.8%</div>
                    <p className="text-xs text-muted-foreground">Rectification accuracy</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">Typos</div>
                    <p className="text-xs text-muted-foreground">68% of all corrections</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24.5h</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="single" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="single">Single Rectification</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Processing</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="single">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Single Email Rectification */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-500" />
                          AI Email Rectification
                        </CardTitle>
                        <CardDescription>Advanced AI correction with confidence scoring</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Try: user@gmial.com, test@hotmial.com"
                            value={singleEmail}
                            onChange={(e) => setSingleEmail(e.target.value)}
                            className="flex-1"
                          />
                          <Button onClick={handleSingleRectification} disabled={isProcessing || !singleEmail}>
                            <Zap className="h-4 w-4 mr-2" />
                            {isProcessing ? 'Processing...' : 'Rectify'}
                          </Button>
                        </div>
                        
                        {isProcessing && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>AI analyzing email patterns...</span>
                              <span>Processing</span>
                            </div>
                            <Progress value={undefined} className="w-full" />
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Quick Examples */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Try These Examples</CardTitle>
                        <CardDescription>Click to test common email issues</CardDescription>
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
                            className="w-full justify-start text-left"
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
                  <Card>
                    <CardHeader>
                      <CardTitle>Bulk Email Rectification</CardTitle>
                      <CardDescription>Process multiple emails with AI-powered corrections</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload CSV file with emails</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                      
                      <div className="text-center text-sm text-gray-500">or</div>
                      
                      <Textarea
                        placeholder="Paste emails here (one per line):&#10;user@gmial.com&#10;test@hotmial.com&#10;admin@yaho.com&#10;contact@outlok.co"
                        value={bulkEmails}
                        onChange={(e) => setBulkEmails(e.target.value)}
                        rows={6}
                      />
                      
                      <Button className="w-full" onClick={handleBulkRectification}>
                        <Zap className="h-4 w-4 mr-2" />
                        Bulk Rectify Emails
                      </Button>
                      
                      {processingProgress > 0 && processingProgress < 100 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>AI processing emails...</span>
                            <span>{processingProgress}%</span>
                          </div>
                          <Progress value={processingProgress} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analytics">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Issue Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Typos (68%)</span>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div className="bg-orange-500 h-2 rounded-full" style={{width: '68%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Domain Issues (20%)</span>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{width: '20%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Format Errors (8%)</span>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div className="bg-red-500 h-2 rounded-full" style={{width: '8%'}}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Provider Issues (4%)</span>
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '4%'}}></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top Corrections</CardTitle>
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
                              <span>{correction.from} → {correction.to}</span>
                              <span className="font-medium">{correction.count}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Rectification Results */}
              <Card className="mt-6">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Recent Rectifications</CardTitle>
                      <CardDescription>AI-powered email corrections with confidence scores</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Results
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rectificationResults.map((result) => (
                      <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-red-600 line-through">{result.originalEmail}</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-medium text-green-600">{result.rectifiedEmail}</span>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center gap-2">
                              <span>{result.description}</span>
                              <span className="text-blue-600">• Confidence: {result.confidence}%</span>
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
