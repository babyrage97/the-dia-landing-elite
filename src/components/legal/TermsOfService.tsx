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
