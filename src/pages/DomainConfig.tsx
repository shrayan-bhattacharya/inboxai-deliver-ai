
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Copy, CheckCircle, AlertTriangle, RefreshCw, Sparkles, Globe, Lock } from 'lucide-react';

const DomainConfig = () => {
  const [domain, setDomain] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleDomainCheck = () => {
    setIsChecking(true);
    setTimeout(() => setIsChecking(false), 2000);
  };

  const dnsRecords = {
    spf: 'v=spf1 include:_spf.inboxai.com ~all',
    dkim: 'k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7...',
    dmarc: 'v=DMARC1; p=quarantine; rua=mailto:dmarc@inboxai.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20">
      <Navbar />
      
      <div className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <Shield className="h-4 w-4" />
              <span>Domain Security</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
              Domain Configuration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Secure your email deliverability with advanced SPF, DKIM, and DMARC configuration. 
              <br className="hidden sm:block" />
              Protect your domain reputation and ensure maximum inbox placement.
            </p>
          </div>

          {/* Domain Input Section */}
          <Card className="mb-8 border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <Globe className="h-6 w-6 text-blue-600" />
                <span>Add Your Domain</span>
              </CardTitle>
              <CardDescription className="text-base">
                Enter your domain to configure email authentication and security protocols
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <Input
                  placeholder="example.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 focus:border-blue-500 transition-all duration-200"
                />
                <Button 
                  onClick={handleDomainCheck} 
                  disabled={isChecking}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-8 hover:scale-105 transition-all duration-200"
                >
                  {isChecking ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Analyze Domain
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Domain Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-green-800 dark:text-green-200">SPF Record</CardTitle>
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="default" className="bg-green-500 text-white mb-3">✓ Valid & Active</Badge>
                <p className="text-sm text-green-700 dark:text-green-300">Authentication configured correctly</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-green-800 dark:text-green-200">DKIM Record</CardTitle>
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="default" className="bg-green-500 text-white mb-3">✓ Valid & Active</Badge>
                <p className="text-sm text-green-700 dark:text-green-300">Cryptographic signature verified</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">DMARC Record</CardTitle>
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="destructive" className="mb-3">⚠ Missing</Badge>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">Configuration required for security</p>
              </CardContent>
            </Card>
          </div>

          {/* DNS Records Configuration */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Lock className="h-6 w-6 text-blue-600" />
                <span>DNS Records Setup</span>
              </CardTitle>
              <CardDescription className="text-base">
                Copy these DNS records to your domain provider's control panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="spf" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <TabsTrigger value="spf" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">SPF Record</TabsTrigger>
                  <TabsTrigger value="dkim" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">DKIM Record</TabsTrigger>
                  <TabsTrigger value="dmarc" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">DMARC Record</TabsTrigger>
                </TabsList>

                <TabsContent value="spf" className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg text-green-800 dark:text-green-200">SPF (Sender Policy Framework)</h4>
                        <p className="text-green-700 dark:text-green-300 mt-1">Prevents email spoofing by specifying authorized mail servers</p>
                      </div>
                      <Badge variant="default" className="bg-green-500 text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-green-800 dark:text-green-200">DNS Record Type: TXT</label>
                      <div className="flex gap-3">
                        <Input value={dnsRecords.spf} readOnly className="font-mono text-sm bg-white dark:bg-gray-800" />
                        <Button size="sm" variant="outline" className="hover:bg-green-100 dark:hover:bg-green-900/50">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dkim" className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg text-green-800 dark:text-green-200">DKIM (DomainKeys Identified Mail)</h4>
                        <p className="text-green-700 dark:text-green-300 mt-1">Cryptographic authentication ensuring email integrity and authenticity</p>
                      </div>
                      <Badge variant="default" className="bg-green-500 text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-green-800 dark:text-green-200">DNS Record Type: TXT</label>
                      <div className="flex gap-3">
                        <Input value={dnsRecords.dkim} readOnly className="font-mono text-sm bg-white dark:bg-gray-800" />
                        <Button size="sm" variant="outline" className="hover:bg-green-100 dark:hover:bg-green-900/50">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dmarc" className="space-y-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg text-yellow-800 dark:text-yellow-200">DMARC (Domain-based Message Authentication)</h4>
                        <p className="text-yellow-700 dark:text-yellow-300 mt-1">Email authentication policy and comprehensive reporting framework</p>
                      </div>
                      <Badge variant="destructive">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Missing
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-yellow-800 dark:text-yellow-200">DNS Record Type: TXT</label>
                      <div className="flex gap-3 mb-4">
                        <Input value={dnsRecords.dmarc} readOnly className="font-mono text-sm bg-white dark:bg-gray-800" />
                        <Button size="sm" variant="outline" className="hover:bg-yellow-100 dark:hover:bg-yellow-900/50">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700" size="sm">
                        Configure DMARC Now
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Enhanced Instructions */}
          <Card className="mt-8 border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Setup Instructions</CardTitle>
              <CardDescription className="text-base">Follow these steps to secure your domain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Copy DNS Records</h4>
                    <p className="text-blue-700 dark:text-blue-300 mt-1">Copy the DNS records from the configuration tabs above</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Configure Domain Provider</h4>
                    <p className="text-purple-700 dark:text-purple-300 mt-1">Login to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add these TXT records to your DNS settings</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Verify & Monitor</h4>
                    <p className="text-green-700 dark:text-green-300 mt-1">DNS changes can take up to 24 hours to propagate globally. Our system will automatically verify and monitor your configuration.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DomainConfig;
