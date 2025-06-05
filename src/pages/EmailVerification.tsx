
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Upload, Download, Mail, CheckCircle, XCircle, AlertTriangle, Lightbulb, Zap, Shield, Target } from 'lucide-react';
import { toast } from 'sonner';

interface VerificationResult {
  id: string;
  email: string;
  originalEmail?: string;
  status: 'valid' | 'invalid' | 'risky' | 'disposable';
  deliverable: boolean;
  risk: 'low' | 'medium' | 'high';
  rectification?: string;
  provider?: string;
}

const EmailVerification = () => {
  const [singleEmail, setSingleEmail] = useState('');
  const [bulkEmails, setBulkEmails] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [verificationResults, setVerificationResults] = useState<VerificationResult[]>([
    { 
      id: '1',
      email: 'john.doe@company.com', 
      status: 'valid', 
      deliverable: true, 
      risk: 'low',
      provider: 'Company Domain'
    },
    { 
      id: '2',
      email: 'user@gmail.com',
      originalEmail: 'user@gmial.com', 
      status: 'valid', 
      deliverable: true, 
      risk: 'low',
      rectification: 'Corrected from gmial.com',
      provider: 'Gmail'
    },
    { 
      id: '3',
      email: 'invalid@nonexistentdomain.xyz', 
      status: 'invalid', 
      deliverable: false, 
      risk: 'high',
      provider: 'Unknown'
    },
  ]);

  const checkForRectification = (email: string) => {
    const commonMistakes: { [key: string]: string } = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'yahooo.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
    };

    const domain = email.split('@')[1];
    if (domain && commonMistakes[domain]) {
      const correctedEmail = email.replace(domain, commonMistakes[domain]);
      setSuggestion(correctedEmail);
      setShowSuggestion(true);
      return correctedEmail;
    }
    return null;
  };

  const handleSingleVerification = () => {
    if (!singleEmail) return;

    setIsVerifying(true);
    
    // Check for rectification first
    const rectifiedEmail = checkForRectification(singleEmail);
    
    setTimeout(() => {
      const emailToVerify = rectifiedEmail || singleEmail;
      const result: VerificationResult = {
        id: Date.now().toString(),
        email: emailToVerify,
        originalEmail: rectifiedEmail ? singleEmail : undefined,
        status: emailToVerify.includes('@') && emailToVerify.includes('.') ? 'valid' : 'invalid',
        deliverable: true,
        risk: 'low',
        rectification: rectifiedEmail ? `Corrected from ${singleEmail.split('@')[1]}` : undefined,
        provider: emailToVerify.includes('gmail') ? 'Gmail' : 'Other'
      };

      setVerificationResults(prev => [result, ...prev]);
      setIsVerifying(false);
      setSingleEmail('');
      setShowSuggestion(false);
      
      if (rectifiedEmail) {
        toast.success('Email verified and rectified successfully!');
      } else {
        toast.success('Email verified successfully!');
      }
    }, 2000);
  };

  const acceptSuggestion = () => {
    setSingleEmail(suggestion);
    setShowSuggestion(false);
    toast.success('Email corrected! Click verify to continue.');
  };

  const rejectSuggestion = () => {
    setShowSuggestion(false);
    toast.info('Suggestion rejected. Original email retained.');
  };

  const handleBulkVerification = () => {
    if (!bulkEmails.trim()) return;

    setVerificationProgress(0);
    const interval = setInterval(() => {
      setVerificationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success('Bulk verification completed!');
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    toast.info('Bulk processing started...');
  };

  const getStatusBadge = (result: VerificationResult) => {
    switch (result.status) {
      case 'valid':
        return <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800 hover-scale"><CheckCircle className="h-3 w-3 mr-1" />Valid</Badge>;
      case 'invalid':
        return <Badge variant="destructive" className="hover-scale dark:bg-red-900/30 dark:text-red-200"><XCircle className="h-3 w-3 mr-1" />Invalid</Badge>;
      case 'risky':
        return <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800 hover-scale"><AlertTriangle className="h-3 w-3 mr-1" />Risky</Badge>;
      case 'disposable':
        return <Badge variant="destructive" className="hover-scale dark:bg-red-900/30 dark:text-red-200">Disposable</Badge>;
      default:
        return <Badge variant="outline" className="hover-scale dark:border-gray-600 dark:text-gray-300">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
      <Navbar />
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 p-6 animate-fade-in">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3 animate-fade-in-up">
                  Email Verification & Rectification
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  AI-powered verification with automatic error correction to improve deliverability and reduce bounces
                </p>
                <div className="flex items-center justify-center gap-6 mt-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                    <Zap className="h-4 w-4" />
                    <span>Lightning Fast</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <Shield className="h-4 w-4" />
                    <span>99.9% Accurate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                    <Target className="h-4 w-4" />
                    <span>Auto-Correction</span>
                  </div>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="hover-lift glass border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Verified</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">12,847</div>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                  </CardContent>
                </Card>
                <Card className="hover-lift glass border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Valid Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">89.3%</div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2.1% improvement</p>
                  </CardContent>
                </Card>
                <Card className="hover-lift glass border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Rectified Emails</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1,247</div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Auto-corrected</p>
                  </CardContent>
                </Card>
                <Card className="hover-lift glass border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Credits Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">8,650</div>
                    <p className="text-xs text-muted-foreground mt-1">4,350 remaining</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Single Email Verification */}
                <Card className="hover-lift glass border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm animate-slide-in-left">
                  <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-t-lg">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg">
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">Smart Email Verification</span>
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">AI-powered verification with automatic error correction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Enter email address (try: user@gmial.com)"
                          value={singleEmail}
                          onChange={(e) => {
                            setSingleEmail(e.target.value);
                            if (e.target.value) {
                              checkForRectification(e.target.value);
                            } else {
                              setShowSuggestion(false);
                            }
                          }}
                          className="border-2 focus:border-yellow-400 dark:focus:border-yellow-500 transition-all duration-300 dark:bg-gray-700/50 dark:border-gray-600"
                        />
                        {showSuggestion && (
                          <Popover open={showSuggestion} onOpenChange={setShowSuggestion}>
                            <PopoverTrigger asChild>
                              <div className="absolute inset-0" />
                            </PopoverTrigger>
                            <PopoverContent className="w-80 glass border-yellow-200 dark:border-yellow-800 dark:bg-gray-800/90">
                              <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                                    <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                                  </div>
                                  <span className="font-medium text-sm text-yellow-800 dark:text-yellow-200">Smart Correction</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  Did you mean: <strong className="text-yellow-700 dark:text-yellow-300">{suggestion}</strong>?
                                </p>
                                <div className="flex gap-2">
                                  <Button size="sm" onClick={acceptSuggestion} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0">
                                    Accept
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={rejectSuggestion} className="border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>
                      <Button onClick={handleSingleVerification} disabled={isVerifying || !singleEmail} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 hover-scale">
                        <Mail className="h-4 w-4 mr-2" />
                        {isVerifying ? 'Verifying...' : 'Verify'}
                      </Button>
                    </div>
                    
                    {isVerifying && (
                      <div className="space-y-3 animate-fade-in">
                        <div className="flex justify-between text-sm">
                          <span className="dark:text-gray-300">Analyzing email...</span>
                          <span className="text-blue-600 dark:text-blue-400">Processing</span>
                        </div>
                        <Progress value={undefined} className="w-full bg-blue-100 dark:bg-blue-900/30" />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Bulk Email Verification */}
                <Card className="hover-lift glass border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm animate-slide-in-right">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-lg">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Bulk Rectify & Verify</span>
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">Upload CSV or paste multiple emails for batch processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-300">
                      <Upload className="h-10 w-10 mx-auto text-blue-400 dark:text-blue-300 mb-3 animate-bounce-gentle" />
                      <p className="text-sm text-blue-600 dark:text-blue-300 mb-3 font-medium">Drag & drop your CSV file here</p>
                      <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        Choose File
                      </Button>
                    </div>
                    
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 font-medium">or</div>
                    
                    <Textarea
                      placeholder="Paste email addresses here (one per line)&#10;user@gmial.com&#10;test@yaho.com&#10;admin@hotmial.com"
                      value={bulkEmails}
                      onChange={(e) => setBulkEmails(e.target.value)}
                      rows={4}
                      className="border-2 focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300 dark:bg-gray-700/50 dark:border-gray-600"
                    />
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 hover-scale" onClick={handleBulkVerification}>
                      <Mail className="h-4 w-4 mr-2" />
                      Bulk Rectify & Verify
                    </Button>
                    
                    {verificationProgress > 0 && verificationProgress < 100 && (
                      <div className="space-y-3 animate-fade-in">
                        <div className="flex justify-between text-sm">
                          <span className="dark:text-gray-300">Processing...</span>
                          <span className="text-blue-600 dark:text-blue-400">{verificationProgress}%</span>
                        </div>
                        <Progress value={verificationProgress} className="bg-blue-100 dark:bg-blue-900/30" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Verification Results */}
              <Card className="mt-8 hover-lift glass border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 rounded-t-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300 bg-clip-text text-transparent">Verification Results</span>
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">Recent verification and rectification results</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover-scale">
                      <Download className="h-4 w-4 mr-2" />
                      Export Results
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {verificationResults.map((result, index) => (
                      <div key={result.id} className="flex items-center justify-between p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gradient-to-r from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-700/50 hover:shadow-md transition-all duration-300 hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{result.email}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mt-2">
                            {result.rectification && (
                              <div className="text-blue-600 dark:text-blue-400 flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                                <Lightbulb className="h-3 w-3" />
                                {result.rectification}
                              </div>
                            )}
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <span className="font-medium">Risk:</span> 
                                <span className={`${result.risk === 'low' ? 'text-green-600 dark:text-green-400' : result.risk === 'medium' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'} font-medium`}>
                                  {result.risk}
                                </span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="font-medium">Deliverable:</span> 
                                <span className={`${result.deliverable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} font-medium`}>
                                  {result.deliverable ? 'Yes' : 'No'}
                                </span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="font-medium">Provider:</span> 
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{result.provider}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
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

export default EmailVerification;
