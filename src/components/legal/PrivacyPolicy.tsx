import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Phone, Mail, MapPin, Home, CheckCircle, AlertTriangle, Info } from "lucide-react";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
                How we protect and handle your personal information with the highest standards of security and transparency.
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
            
            {/* Information We Collect */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent font-space">Personal Information</h3>
                  <p className="text-muted-foreground mb-6 font-inter leading-relaxed">We may collect the following personal information:</p>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground font-space">Contact Details</span>
                        <p className="text-muted-foreground text-sm font-inter">Name, email, phone number for project communication</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground font-space">Business Information</span>
                        <p className="text-muted-foreground text-sm font-inter">Company name, business requirements, project specifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground font-space">Communication History</span>
                        <p className="text-muted-foreground text-sm font-inter">Project discussions, support interactions, preferences</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-accent font-space">Technical Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 font-space">Device & Browser</h4>
                      <p className="text-muted-foreground text-sm font-inter">IP address, browser type, device information</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 font-space">Usage Analytics</h4>
                      <p className="text-muted-foreground text-sm font-inter">Website interactions, page views, session data</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-inter leading-relaxed">We use collected information to deliver premium AV & IT infrastructure services:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 font-space">Service Delivery</h4>
                        <p className="text-muted-foreground text-sm font-inter">AV system design, IT infrastructure, Zoom Room setup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Info className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 font-space">Project Management</h4>
                        <p className="text-muted-foreground text-sm font-inter">Planning, implementation, timeline coordination</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 font-space">Customer Support</h4>
                        <p className="text-muted-foreground text-sm font-inter">Technical assistance, maintenance, troubleshooting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 font-space">Service Enhancement</h4>
                        <p className="text-muted-foreground text-sm font-inter">Quality improvement, optimization, innovation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  We implement industry-standard security measures to protect your information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Badge 
                      variant="default"
                      className="bg-primary/20 text-primary border-primary/30 mb-4"
                    >
                      <Lock className="w-3 h-3 mr-1" />
                      Security Features
                    </Badge>
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2 font-space">
                        <Lock className="w-4 h-4" /> Encryption
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter">
                        All data transmissions are encrypted using SSL/TLS protocols
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl border border-secondary/20">
                      <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2 font-space">
                        <Shield className="w-4 h-4" /> Access Control
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter">
                        Strict access controls and authentication protocols
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Badge 
                      variant="outline"
                      className="border-accent/20 text-accent/80 hover:bg-accent/10 mb-4"
                    >
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Compliance
                    </Badge>
                    <div className="p-4 bg-gradient-to-br from-accent/10 to-transparent rounded-xl border border-accent/20">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2 font-space">
                        <Eye className="w-4 h-4" /> Regular Audits
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter">
                        Continuous security monitoring and vulnerability assessments
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2 font-space">
                        <Shield className="w-4 h-4" /> Data Backup
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter">
                        Secure, encrypted backups with disaster recovery protocols
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground font-inter leading-relaxed">For privacy-related questions or to exercise your rights:</p>
                
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
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-accent font-space">Phone</h4>
                        <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                          +1 (555) 123-4567
                        </a>
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
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  We're committed to transparency and protecting your privacy. Contact us anytime for clarifications.
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

export default PrivacyPolicy;
