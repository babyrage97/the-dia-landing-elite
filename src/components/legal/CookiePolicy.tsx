import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Shield, BarChart3, Target, Settings, Globe, Home, Mail, Phone, MapPin, AlertTriangle, CheckCircle, Lock } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background text-foreground">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto relative z-10">
            {/* Back Button */}
            <div className="mb-8 animate-fade-up">
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-luxury group"
              >
                <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center group-hover:bg-primary/20 transition-luxury">
                  <Home className="w-4 h-4" />
                </div>
                <span className="font-medium font-inter">Back to Home</span>
              </button>
            </div>
            
            {/* Title Section */}
            <div className="text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold text-gradient-gold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
                How we use cookies and similar technologies to enhance your experience on our website.
              </p>
              <div className="mt-6 text-sm text-muted-foreground font-inter">
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow mt-6" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto relative z-10 space-y-12">
            
            {/* What Are Cookies */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  What Are Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg font-inter leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-accent mb-3 font-space">Cookie Purpose</h4>
                  <p className="text-muted-foreground text-sm font-inter">
                    We use cookies to enhance website functionality, analyze usage patterns, and provide 
                    personalized experiences that help us deliver better AV & IT services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Essential Cookies */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-primary font-space">Essential Cookies</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Always Active
                        </Badge>
                        <span className="text-muted-foreground text-sm font-inter">Cannot be disabled</span>
                      </div>
                      <p className="text-muted-foreground mb-4 font-inter">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Session Management</h4>
                      <p className="text-muted-foreground text-xs font-inter">User authentication and security</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Form Functionality</h4>
                      <p className="text-muted-foreground text-xs font-inter">Contact forms and submissions</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Site Navigation</h4>
                      <p className="text-muted-foreground text-xs font-inter">Basic website functionality</p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border border-secondary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-secondary font-space">Analytics Cookies</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-secondary/30 text-secondary">
                          Optional
                        </Badge>
                        <span className="text-muted-foreground text-sm font-inter">Can be disabled</span>
                      </div>
                      <p className="text-muted-foreground mb-4 font-inter">
                        Help us understand how visitors interact with our website to improve our services.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Google Analytics</h4>
                      <p className="text-muted-foreground text-xs font-inter">Traffic and usage patterns</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Page Views</h4>
                      <p className="text-muted-foreground text-xs font-inter">Popular content and sections</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Performance</h4>
                      <p className="text-muted-foreground text-xs font-inter">Site speed and optimization</p>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-accent font-space">Marketing Cookies</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Requires Consent
                        </Badge>
                        <span className="text-muted-foreground text-sm font-inter">Can be disabled</span>
                      </div>
                      <p className="text-muted-foreground mb-4 font-inter">
                        Used to deliver relevant advertising and track campaign effectiveness.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">LinkedIn Tracking</h4>
                      <p className="text-muted-foreground text-xs font-inter">B2B conversion tracking</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Google Ads</h4>
                      <p className="text-muted-foreground text-xs font-inter">Remarketing and optimization</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-sm mb-1 font-space">Social Media</h4>
                      <p className="text-muted-foreground text-xs font-inter">Integration and sharing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent font-space">Cookie Banner Control</h3>
                  <div className="bg-muted/30 p-6 rounded-xl border border-border/30">
                    <p className="text-muted-foreground mb-4 font-inter">
                      When you first visit our site, you will see a cookie banner allowing you to accept or 
                      customize your cookie preferences. You can change these settings at any time.
                    </p>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-medium text-accent mb-2 font-space">Quick Cookie Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm font-inter">Essential Cookies</span>
                          <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">Always On</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm font-inter">Analytics Cookies</span>
                          <button className="px-4 py-1 bg-secondary/20 text-secondary text-xs rounded hover:bg-secondary/30 transition-luxury font-inter">
                            Manage
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm font-inter">Marketing Cookies</span>
                          <button className="px-4 py-1 bg-accent/20 text-accent text-xs rounded hover:bg-accent/30 transition-luxury font-inter">
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent font-space">Browser Settings</h3>
                  <p className="text-muted-foreground mb-6 font-inter">You can also control cookies through your browser settings:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                        <h4 className="font-medium mb-2 flex items-center gap-2 font-space">
                          <Globe className="w-4 h-4 text-primary" /> Google Chrome
                        </h4>
                        <p className="text-muted-foreground text-sm font-inter">Settings → Privacy and Security → Cookies</p>
                      </div>
                      <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                        <h4 className="font-medium mb-2 flex items-center gap-2 font-space">
                          <Globe className="w-4 h-4 text-secondary" /> Mozilla Firefox
                        </h4>
                        <p className="text-muted-foreground text-sm font-inter">Preferences → Privacy & Security → Cookies</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                        <h4 className="font-medium mb-2 flex items-center gap-2 font-space">
                          <Globe className="w-4 h-4 text-accent" /> Safari
                        </h4>
                        <p className="text-muted-foreground text-sm font-inter">Preferences → Privacy → Cookies</p>
                      </div>
                      <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                        <h4 className="font-medium mb-2 flex items-center gap-2 font-space">
                          <Settings className="w-4 h-4 text-primary" /> Microsoft Edge
                        </h4>
                        <p className="text-muted-foreground text-sm font-inter">Settings → Site permissions → Cookies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 p-4 rounded-lg">
                    <p className="text-yellow-600 text-sm font-inter">
                      <strong>Note:</strong> Disabling essential cookies may affect website functionality and your ability to access certain features.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Questions About Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground font-inter leading-relaxed">If you have questions about our use of cookies:</p>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shadow-card">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-accent font-space">Email</h4>
                        <a href="mailto:privacy@the-dia.com" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                          privacy@the-dia.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shadow-card">
                        <Cookie className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-accent font-space">Subject</h4>
                        <p className="text-muted-foreground text-sm font-inter">Cookie Policy Inquiry</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shadow-card">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-accent font-space">Location</h4>
                        <p className="text-muted-foreground font-inter">Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center animate-fade-up">
              <div className="bg-card-gradient border border-border/30 rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
                <h3 className="text-2xl font-space font-semibold text-gradient-diamond mb-4">
                  Policy Updates
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  We may update this Cookie Policy to reflect changes in technology, regulations, or our practices. 
                  Significant changes will be communicated through our website or email notifications.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow" />
              </div>
            </div>

          </div>
        </section>
        
        {/* Floating Back Button */}
        <button
          onClick={() => window.location.href = '/'}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-background rounded-full shadow-luxury hover:shadow-glow transition-luxury transform hover:scale-110 flex items-center justify-center group"
          aria-label="Back to Home"
        >
          <Home className="w-6 h-6 transform group-hover:-translate-x-1 transition-luxury" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg shadow-luxury opacity-0 group-hover:opacity-100 transition-luxury whitespace-nowrap font-inter">
            Back to Home
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
          </div>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
