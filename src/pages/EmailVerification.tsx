
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, Download, Mail, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const EmailVerification = () => {
  const [singleEmail, setSingleEmail] = useState('');
  const [bulkEmails, setBulkEmails] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);

  const handleSingleVerification = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => setIsVerifying(false), 2000);
  };

  const verificationResults = [
    { email: 'john.doe@company.com', status: 'valid', deliverable: true, risk: 'low' },
    { email: 'invalid@nonexistentdomain.xyz', status: 'invalid', deliverable: false, risk: 'high' },
    { email: 'risky@catchall.com', status: 'risky', deliverable: true, risk: 'medium' },
    { email: 'role@company.com', status: 'role', deliverable: true, risk: 'medium' },
    { email: 'disposable@tempmail.com', status: 'disposable', deliverable: false, risk: 'high' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'valid':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Valid</Badge>;
      case 'invalid':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Invalid</Badge>;
      case 'risky':
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertTriangle className="h-3 w-3 mr-1" />Risky</Badge>;
      case 'role':
        return <Badge variant="outline">Role Account</Badge>;
      case 'disposable':
        return <Badge variant="destructive">Disposable</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Verification</h1>
          <p className="text-gray-600">Verify email addresses to improve deliverability and reduce bounces</p>
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
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2.1%</div>
              <p className="text-xs text-muted-foreground">-1.8% improvement</p>
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
          {/* Single Email Verification */}
          <Card>
            <CardHeader>
              <CardTitle>Single Email Verification</CardTitle>
              <CardDescription>Verify individual email addresses instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter email address"
                  value={singleEmail}
                  onChange={(e) => setSingleEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSingleVerification} disabled={isVerifying}>
                  <Mail className="h-4 w-4 mr-2" />
                  Verify
                </Button>
              </div>
              
              {singleEmail && (
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{singleEmail}</span>
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Valid
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Deliverable:</span>
                      <span className="ml-2 font-medium text-green-600">Yes</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Risk Level:</span>
                      <span className="ml-2 font-medium text-green-600">Low</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Type:</span>
                      <span className="ml-2 font-medium">Personal</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Provider:</span>
                      <span className="ml-2 font-medium">Gmail</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bulk Email Verification */}
          <Card>
            <CardHeader>
              <CardTitle>Bulk Email Verification</CardTitle>
              <CardDescription>Upload a CSV file or paste multiple emails</CardDescription>
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
                placeholder="Paste email addresses here (one per line)"
                value={bulkEmails}
                onChange={(e) => setBulkEmails(e.target.value)}
                rows={4}
              />
              
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Verify Bulk Emails
              </Button>
              
              {verificationProgress > 0 && (
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

        {/* Recent Verification Results */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Verification Results</CardTitle>
            <CardDescription>Latest email verification results and analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {verificationResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{result.email}</div>
                    <div className="text-sm text-gray-600">
                      Risk: {result.risk} • Deliverable: {result.deliverable ? 'Yes' : 'No'}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(result.status)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <div className="text-sm text-gray-600">
                Showing 5 of 156 results
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailVerification;
