import React from 'react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navigation />
    <div className="min-h-screen bg-muted/30 text-foreground">
      {/* Background Pattern - matching ProVisit */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-[#FFD700] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="font-medium">Back to Home</span>
            </button>
          </div>
          
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              How we protect and handle your personal information with the highest standards of security and transparency.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Information We Collect */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Information We Collect
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Personal Information</h3>
                <p className="text-muted-foreground mb-6">We may collect the following personal information:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">Contact Details</span>
                      <p className="text-muted-foreground text-sm">Name, email, phone number for project communication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">Business Information</span>
                      <p className="text-muted-foreground text-sm">Company name, business requirements, project specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">Communication History</span>
                      <p className="text-muted-foreground text-sm">Project discussions, support interactions, preferences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Technical Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                    <h4 className="font-medium mb-2">Device & Browser</h4>
                    <p className="text-muted-foreground text-sm">IP address, browser type, device information</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                    <h4 className="font-medium mb-2">Usage Analytics</h4>
                    <p className="text-muted-foreground text-sm">Website interactions, page views, session data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              How We Use Your Information
            </h2>
            
            <p className="text-muted-foreground mb-6">We use collected information to deliver premium AV & IT infrastructure services:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-6 h-6 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Service Delivery</h4>
                    <p className="text-muted-foreground text-sm">AV system design, IT infrastructure, Zoom Room setup</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-6 h-6 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Project Management</h4>
                    <p className="text-muted-foreground text-sm">Planning, implementation, timeline coordination</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-6 h-6 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Customer Support</h4>
                    <p className="text-muted-foreground text-sm">Technical assistance, maintenance, troubleshooting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                  <div className="w-6 h-6 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Service Enhancement</h4>
                    <p className="text-muted-foreground text-sm">Quality improvement, optimization, innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Contact Us
            </h2>
            
            <p className="text-muted-foreground mb-8">For privacy-related questions or to exercise your rights:</p>
            
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-8 rounded-xl border border-[#FFD700]/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FFD700] text-xl">@</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFD700]">Email</h4>
                    <a href="mailto:privacy@the-dia.com" className="text-muted-foreground hover:text-[#FFD700] transition-colors">
                      privacy@the-dia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FFD700] text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFD700]">Phone</h4>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-[#FFD700] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FFD700] text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFD700]">Location</h4>
                    <p className="text-muted-foreground">Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Floating Back Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Back to Home"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
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
