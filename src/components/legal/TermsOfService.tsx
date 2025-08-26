import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Video, Wrench, Monitor, Building, Globe, Headphones, DollarSign, Clock, AlertTriangle, Home, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
                The terms and conditions governing our professional AV & IT infrastructure services.
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
            
            {/* Agreement to Terms */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  By accessing and using The-Dia's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any part of these terms, 
                  you may not use our services.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-accent mb-2 font-space">Professional Services Agreement</h4>
                  <p className="text-muted-foreground text-sm font-inter">
                    These terms govern our professional relationship and ensure the highest quality 
                    delivery of AV and IT infrastructure solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground font-inter leading-relaxed">The-Dia provides comprehensive AV & IT solutions:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Video className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">AV System Design</h4>
                        <p className="text-muted-foreground text-sm font-inter">Complete audio-visual system planning and installation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">IT Infrastructure</h4>
                        <p className="text-muted-foreground text-sm font-inter">Network setup, server configuration, and maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">Zoom Room Setup</h4>
                        <p className="text-muted-foreground text-sm font-inter">Enterprise conferencing solutions and integration</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">Smart Office Solutions</h4>
                        <p className="text-muted-foreground text-sm font-inter">Automation and intelligent workspace technology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">International Service</h4>
                        <p className="text-muted-foreground text-sm font-inter">Global deployment and support capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2 font-space">Ongoing Support</h4>
                        <p className="text-muted-foreground text-sm font-inter">Maintenance, troubleshooting, and technical assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card animate-fade-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-space font-bold text-gradient-diamond flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-glow"></div>
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-primary font-space">Project Deposits</h4>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 font-inter">
                        Projects may require upfront deposits as specified in project agreements
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 font-inter">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Typically 30-50% of project value
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Secures resources and equipment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Applied to final invoice
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl border border-secondary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-secondary" />
                        <h4 className="font-semibold text-secondary font-space">Payment Schedule</h4>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 font-inter">
                        Payments are due according to agreed milestones
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 font-inter">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Milestone-based payments
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Net 30 payment terms
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Multiple payment methods accepted
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-accent/10 to-transparent rounded-xl border border-accent/20">
                      <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-accent font-space">Late Payments</h4>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 font-inter">
                        Interest may be charged on overdue accounts
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 font-inter">
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-accent" />
                          1.5% monthly interest rate
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-accent" />
                          Work may be suspended
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-accent" />
                          Collection costs recoverable
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-primary font-space">Project Expenses</h4>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 font-inter">
                        Client responsibility for pre-approved expenses
                      </p>
                      <ul className="text-muted-foreground text-sm space-y-1 font-inter">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Travel and accommodation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Specialized equipment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Third-party services
                        </li>
                      </ul>
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
                  Questions About Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground font-inter leading-relaxed">For questions about these Terms of Service:</p>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shadow-card">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-accent font-space">Email</h4>
                        <a href="mailto:legal@the-dia.com" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                          legal@the-dia.com
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
                  Terms Updates
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  We may update these Terms of Service to reflect changes in our practices or applicable laws. 
                  Significant changes will be communicated through our website or direct notification.
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

export default TermsOfService;
