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
import { Upload, Download, Mail, CheckCircle, XCircle, AlertTriangle, Lightbulb } from 'lucide-react';
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
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Valid</Badge>;
      case 'invalid':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Invalid</Badge>;
      case 'risky':
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertTriangle className="h-3 w-3 mr-1" />Risky</Badge>;
      case 'disposable':
        return <Badge variant="destructive">Disposable</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Verification & Rectification</h1>
                <p className="text-gray-600">Verify and correct email addresses to improve deliverability and reduce bounces</p>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Verified</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,847</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Valid Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">89.3%</div>
                    <p className="text-xs text-muted-foreground">+2.1% improvement</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Rectified Emails</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">1,247</div>
                    <p className="text-xs text-muted-foreground">Auto-corrected</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,650</div>
                    <p className="text-xs text-muted-foreground">4,350 remaining</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Single Email Verification with Rectification */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      Smart Email Verification
                    </CardTitle>
                    <CardDescription>AI-powered verification with automatic error correction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
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
                          className="flex-1"
                        />
                        {showSuggestion && (
                          <Popover open={showSuggestion} onOpenChange={setShowSuggestion}>
                            <PopoverTrigger asChild>
                              <div className="absolute inset-0" />
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                                  <span className="font-medium text-sm">Rectification Suggestion</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                  Did you mean: <strong>{suggestion}</strong>?
                                </p>
                                <div className="flex gap-2">
                                  <Button size="sm" onClick={acceptSuggestion}>
                                    Accept
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={rejectSuggestion}>
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>
                      <Button onClick={handleSingleVerification} disabled={isVerifying || !singleEmail}>
                        <Mail className="h-4 w-4 mr-2" />
                        {isVerifying ? 'Verifying...' : 'Verify'}
                      </Button>
                    </div>
                    
                    {isVerifying && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Analyzing email...</span>
                          <span>Processing</span>
                        </div>
                        <Progress value={undefined} className="w-full" />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Bulk Email Verification */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bulk Rectify & Verify</CardTitle>
                    <CardDescription>Upload CSV or paste multiple emails for batch processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Drag & drop your CSV file here</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                    
                    <div className="text-center text-sm text-gray-500">or</div>
                    
                    <Textarea
                      placeholder="Paste email addresses here (one per line)&#10;user@gmial.com&#10;test@yaho.com&#10;admin@hotmial.com"
                      value={bulkEmails}
                      onChange={(e) => setBulkEmails(e.target.value)}
                      rows={4}
                    />
                    
                    <Button className="w-full" onClick={handleBulkVerification}>
                      <Mail className="h-4 w-4 mr-2" />
                      Bulk Rectify & Verify
                    </Button>
                    
                    {verificationProgress > 0 && verificationProgress < 100 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Processing...</span>
                          <span>{verificationProgress}%</span>
                        </div>
                        <Progress value={verificationProgress} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Verification Results */}
              <Card className="mt-6">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Verification Results</CardTitle>
                      <CardDescription>Recent verification and rectification results</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Results
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {verificationResults.map((result) => (
                      <div key={result.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{result.email}</div>
                          <div className="text-sm text-gray-600 space-y-1">
                            {result.rectification && (
                              <div className="text-blue-600 flex items-center gap-1">
                                <Lightbulb className="h-3 w-3" />
                                {result.rectification}
                              </div>
                            )}
                            <div>
                              Risk: {result.risk} • Deliverable: {result.deliverable ? 'Yes' : 'No'} • Provider: {result.provider}
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
