import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
              Cookie Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            How we use cookies and similar technologies to enhance your experience on our website.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* What Are Cookies */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              What Are Cookies
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-6 rounded-xl border border-[#FFD700]/20">
                <h4 className="font-semibold text-[#FFD700] mb-3">Cookie Purpose</h4>
                <p className="text-muted-foreground text-sm">
                  We use cookies to enhance website functionality, analyze usage patterns, and provide 
                  personalized experiences that help us deliver better AV & IT services.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-8">
              {/* Essential Cookies */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xl">🔒</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Essential Cookies</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Always Active</span>
                      <span className="text-muted-foreground text-sm">Cannot be disabled</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Session Management</h4>
                    <p className="text-muted-foreground text-xs">User authentication and security</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Form Functionality</h4>
                    <p className="text-muted-foreground text-xs">Contact forms and submissions</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Site Navigation</h4>
                    <p className="text-muted-foreground text-xs">Basic website functionality</p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">Analytics Cookies</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Optional</span>
                      <span className="text-muted-foreground text-sm">Can be disabled</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Help us understand how visitors interact with our website to improve our services.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Google Analytics</h4>
                    <p className="text-muted-foreground text-xs">Traffic and usage patterns</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Page Views</h4>
                    <p className="text-muted-foreground text-xs">Popular content and sections</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Performance</h4>
                    <p className="text-muted-foreground text-xs">Site speed and optimization</p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xl">⚙️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Functional Cookies</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Optional</span>
                      <span className="text-muted-foreground text-sm">Enhance experience</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Enhance your experience with personalized features and preferences.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Theme Preferences</h4>
                    <p className="text-muted-foreground text-xs">Dark/light mode selection</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Language Settings</h4>
                    <p className="text-muted-foreground text-xs">Preferred language choices</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Form Data</h4>
                    <p className="text-muted-foreground text-xs">Temporary data retention</p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 text-xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-orange-400">Marketing Cookies</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Requires Consent</span>
                      <span className="text-muted-foreground text-sm">Can be disabled</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Used to deliver relevant advertising and track campaign effectiveness.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">LinkedIn Tracking</h4>
                    <p className="text-muted-foreground text-xs">B2B conversion tracking</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Google Ads</h4>
                    <p className="text-muted-foreground text-xs">Remarketing and optimization</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Social Media</h4>
                    <p className="text-muted-foreground text-xs">Integration and sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Third-Party Services
            </h2>
            
            <p className="text-muted-foreground mb-8">Our website includes third-party services that may set their own cookies:</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#4285F4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4285F4] text-xl font-bold">G</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-foreground">Google Analytics</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Provides website analytics and user behavior insights to help us improve our AV & IT services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Analytics</span>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-muted/40 text-muted-foreground text-xs rounded-full hover:bg-muted/60 transition-colors"
                    >
                      Privacy Policy ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#0077B5]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0077B5] text-xl font-bold">in</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-foreground">LinkedIn</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Professional networking and B2B conversion tracking for our enterprise services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Marketing</span>
                    <a 
                      href="https://www.linkedin.com/legal/privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-muted/40 text-muted-foreground text-xs rounded-full hover:bg-muted/60 transition-colors"
                    >
                      Privacy Policy ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/20 rounded-xl border border-border/30">
                <div className="w-12 h-12 bg-[#4285F4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4285F4] text-xl">Aa</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-foreground">Google Fonts</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Web font delivery service for consistent typography across our website.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Essential</span>
                    <a 
                      href="https://developers.google.com/fonts/faq#privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-muted/40 text-muted-foreground text-xs rounded-full hover:bg-muted/60 transition-colors"
                    >
                      Privacy FAQ ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Managing Your Cookie Preferences
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Cookie Banner Control</h3>
                <div className="bg-muted/30 p-6 rounded-xl border border-border/30">
                  <p className="text-muted-foreground mb-4">
                    When you first visit our site, you'll see a cookie banner allowing you to accept or 
                    customize your cookie preferences. You can change these settings at any time.
                  </p>
                  <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#B8860B]/10 p-4 rounded-lg border border-[#FFD700]/20">
                    <h4 className="font-medium text-[#FFD700] mb-2">Quick Cookie Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">Essential Cookies</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Always On</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">Analytics Cookies</span>
                        <button className="px-4 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded hover:bg-[#FFD700]/30 transition-colors">
                          Manage
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm">Marketing Cookies</span>
                        <button className="px-4 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded hover:bg-[#FFD700]/30 transition-colors">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Browser Settings</h3>
                <p className="text-muted-foreground mb-6">You can also control cookies through your browser settings:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-[#4285F4]">🌐</span> Google Chrome
                      </h4>
                      <p className="text-muted-foreground text-sm">Settings → Privacy and Security → Cookies</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-[#FF7139]">🦊</span> Mozilla Firefox
                      </h4>
                      <p className="text-muted-foreground text-sm">Preferences → Privacy & Security → Cookies</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-[#1575F9]">🧭</span> Safari
                      </h4>
                      <p className="text-muted-foreground text-sm">Preferences → Privacy → Cookies</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <span className="text-[#0078D4]">Ⅻ</span> Microsoft Edge
                      </h4>
                      <p className="text-muted-foreground text-sm">Settings → Site permissions → Cookies</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                  <p className="text-yellow-600 text-sm">
                    <strong>Note:</strong> Disabling essential cookies may affect website functionality and your ability to access certain features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-full"></div>
              Questions About Cookies
            </h2>
            
            <p className="text-muted-foreground mb-8">If you have questions about our use of cookies:</p>
            
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
                    <span className="text-[#FFD700] text-xl">🍪</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFD700]">Subject</h4>
                    <p className="text-muted-foreground text-sm">Cookie Policy Inquiry</p>
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
              We may update this Cookie Policy to reflect changes in technology, regulations, or our practices. 
              Significant changes will be communicated through our website or email notifications.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
