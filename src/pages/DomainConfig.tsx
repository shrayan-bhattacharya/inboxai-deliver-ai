
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Copy, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Domain Configuration</h1>
          <p className="text-gray-600">Configure SPF, DKIM, and DMARC records for optimal deliverability</p>
        </div>

        {/* Domain Input */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add Domain</CardTitle>
            <CardDescription>Enter your domain to configure email authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleDomainCheck} disabled={isChecking}>
                {isChecking ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Shield className="h-4 w-4 mr-2" />
                )}
                Check Domain
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Domain Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SPF Record</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <Badge variant="default" className="bg-green-100 text-green-800">Valid</Badge>
              <p className="text-xs text-muted-foreground mt-2">Configured correctly</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DKIM Record</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <Badge variant="default" className="bg-green-100 text-green-800">Valid</Badge>
              <p className="text-xs text-muted-foreground mt-2">Keys properly signed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DMARC Record</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <Badge variant="destructive">Missing</Badge>
              <p className="text-xs text-muted-foreground mt-2">Action required</p>
            </CardContent>
          </Card>
        </div>

        {/* DNS Records Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>DNS Records Setup</CardTitle>
            <CardDescription>Copy these DNS records to your domain provider</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="spf" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="spf">SPF Record</TabsTrigger>
                <TabsTrigger value="dkim">DKIM Record</TabsTrigger>
                <TabsTrigger value="dmarc">DMARC Record</TabsTrigger>
              </TabsList>

              <TabsContent value="spf" className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">SPF (Sender Policy Framework)</h4>
                      <p className="text-sm text-gray-600">Prevents email spoofing by specifying authorized servers</p>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">DNS Record Type: TXT</label>
                    <div className="flex mt-2 gap-2">
                      <Input value={dnsRecords.spf} readOnly className="font-mono text-sm" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dkim" className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">DKIM (DomainKeys Identified Mail)</h4>
                      <p className="text-sm text-gray-600">Cryptographic authentication for email integrity</p>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">DNS Record Type: TXT</label>
                    <div className="flex mt-2 gap-2">
                      <Input value={dnsRecords.dkim} readOnly className="font-mono text-sm" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dmarc" className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">DMARC (Domain-based Message Authentication)</h4>
                      <p className="text-sm text-gray-600">Email authentication policy and reporting</p>
                    </div>
                    <Badge variant="destructive">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Missing
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">DNS Record Type: TXT</label>
                    <div className="flex mt-2 gap-2">
                      <Input value={dnsRecords.dmarc} readOnly className="font-mono text-sm" />
                      <Button size="sm" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button className="mt-3" size="sm">
                    Configure DMARC
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium">Copy DNS Records</h4>
                  <p className="text-sm text-gray-600">Copy the DNS records from the tabs above</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium">Add to Domain Provider</h4>
                  <p className="text-sm text-gray-600">Login to your domain registrar (GoDaddy, Namecheap, etc.) and add these TXT records</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium">Verify Configuration</h4>
                  <p className="text-sm text-gray-600">DNS changes can take up to 24 hours to propagate. We'll automatically verify once ready.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DomainConfig;
