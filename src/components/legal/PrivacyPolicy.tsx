import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - matching your site's hero style */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
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

          {/* Information Sharing */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Information Sharing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-[#FFD700] rounded"></div>
                </div>
                <h4 className="font-semibold mb-3">Service Providers</h4>
                <p className="text-muted-foreground text-sm">Trusted vendors for equipment, installation, and technical support</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-[#FFD700] rounded-full"></div>
                </div>
                <h4 className="font-semibold mb-3">Business Partners</h4>
                <p className="text-muted-foreground text-sm">AV manufacturers, technology partners, integration specialists</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-[#FFD700] rounded-sm"></div>
                </div>
                <h4 className="font-semibold mb-3">Legal Compliance</h4>
                <p className="text-muted-foreground text-sm">When required by law or to protect our legitimate interests</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-6 rounded-xl border border-[#FFD700]/20">
              <p className="font-semibold text-[#FFD700] mb-2">Our Commitment</p>
              <p className="text-muted-foreground">We never sell or rent your personal information to third parties. Your data is shared only to deliver exceptional service.</p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Data Security
            </h2>
            
            <p className="text-muted-foreground mb-8">Enterprise-grade security measures protect your information:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-[#FFD700] rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">SSL/TLS Encryption</h4>
                    <p className="text-muted-foreground text-sm">Secure data transmission</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Infrastructure</h4>
                    <p className="text-muted-foreground text-sm">Protected servers and data centers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Access Control</h4>
                    <p className="text-muted-foreground text-sm">Limited authorized personnel</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-4 bg-[#FFD700] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Regular Audits</h4>
                    <p className="text-muted-foreground text-sm">Continuous security monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Your Rights
            </h2>
            
            <p className="text-muted-foreground mb-8">You have complete control over your personal information:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                <h4 className="font-semibold mb-3 text-[#FFD700]">Access & Review</h4>
                <p className="text-muted-foreground text-sm">Request copies of your personal information and see how it's being used</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                <h4 className="font-semibold mb-3 text-[#FFD700]">Correct & Update</h4>
                <p className="text-muted-foreground text-sm">Fix any inaccurate or incomplete information we hold about you</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                <h4 className="font-semibold mb-3 text-[#FFD700]">Delete & Remove</h4>
                <p className="text-muted-foreground text-sm">Request deletion of your personal information when no longer needed</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                <h4 className="font-semibold mb-3 text-[#FFD700]">Data Portability</h4>
                <p className="text-muted-foreground text-sm">Receive your data in a structured, commonly used format</p>
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

          {/* Updates Notice */}
          <div className="bg-gradient-to-r from-[#FFD700]/10 via-[#B8860B]/10 to-[#FFD700]/10 rounded-2xl p-8 border border-[#FFD700]/20 text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Policy Updates</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We may update this Privacy Policy to reflect changes in our practices or applicable laws. 
              We'll notify you of significant changes through our website or email.
            </p>
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
  );
};

export default PrivacyPolicy;
