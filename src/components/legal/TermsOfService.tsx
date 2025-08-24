import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The terms and conditions governing our professional AV & IT infrastructure services.
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
          
          {/* Agreement to Terms */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Agreement to Terms
            </h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                By accessing and using The-Dia's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any part of these terms, 
                you may not use our services.
              </p>
              <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-6 rounded-xl border border-[#FFD700]/20">
                <p className="font-semibold text-[#FFD700] mb-2">Professional Services Agreement</p>
                <p className="text-muted-foreground text-sm">
                  These terms govern our professional relationship and ensure the highest quality 
                  delivery of AV and IT infrastructure solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Services Description */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Our Services
            </h2>
            <p className="text-muted-foreground mb-8">The-Dia provides comprehensive AV & IT solutions:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">📹</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">AV System Design</h4>
                    <p className="text-muted-foreground text-sm">Complete audio-visual system planning and installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">IT Infrastructure</h4>
                    <p className="text-muted-foreground text-sm">Network setup, server configuration, and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">💻</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Zoom Room Setup</h4>
                    <p className="text-muted-foreground text-sm">Enterprise conferencing solutions and integration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Smart Office Solutions</h4>
                    <p className="text-muted-foreground text-sm">Automation and intelligent workspace technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">International Service</h4>
                    <p className="text-muted-foreground text-sm">Global deployment and support capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] text-lg">🛠️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground text-sm">Maintenance, troubleshooting, and technical assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Payment Terms
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                  <h4 className="font-semibold mb-3 text-[#FFD700]">Project Deposits</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Projects may require upfront deposits as specified in project agreements
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Typically 30-50% of project value</li>
                    <li>• Secures resources and equipment</li>
                    <li>• Applied to final invoice</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                  <h4 className="font-semibold mb-3 text-[#FFD700]">Payment Schedule</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Payments are due according to agreed milestones
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Milestone-based payments</li>
                    <li>• Net 30 payment terms</li>
                    <li>• Multiple payment methods accepted</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                  <h4 className="font-semibold mb-3 text-[#FFD700]">Late Payments</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Interest may be charged on overdue accounts
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• 1.5% monthly interest rate</li>
                    <li>• Work may be suspended</li>
                    <li>• Collection costs recoverable</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-xl border border-[#FFD700]/20">
                  <h4 className="font-semibold mb-3 text-[#FFD700]">Project Expenses</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Client responsibility for pre-approved expenses
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Travel and accommodation</li>
                    <li>• Specialized equipment</li>
                    <li>• Third-party services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Questions About Terms
            </h2>
            
            <p className="text-muted-foreground mb-8">For questions about these Terms of Service:</p>
            
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-8 rounded-xl border border-[#FFD700]/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#FFD700] text-xl">@</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFD700]">Email</h4>
                    <a href="mailto:legal@the-dia.com" className="text-muted-foreground hover:text-[#FFD700] transition-colors">
                      legal@the-dia.com
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
            <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Terms Updates</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We may update these Terms of Service to reflect changes in our practices or applicable laws. 
              Significant changes will be communicated through our website or direct notification.
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

export default TermsOfService;
