import React from 'react';
import { motion } from 'framer-motion';

const ProVisitSection = () => {
  const features = [
    {
      icon: "📅",
      title: "Smart Visit Scheduling",
      description: "Automatically schedule and coordinate client visits with location sharing and time management"
    },
    {
      icon: "👷",
      title: "Engineer Assignment", 
      description: "Assign qualified engineers to specific visits based on expertise and availability"
    },
    {
      icon: "✅",
      title: "Client Approval Systemm",
      description: "Clients receive detailed visit information and must approve before engineers arrive"
    },
    {
      icon: "📋",
      title: "Complete Inventory Management",
      description: "Track every piece of equipment in each meeting room with detailed specifications"
    },
    {
      icon: "📸",
      title: "Visual Documentation",
      description: "Photo documentation of all equipment and room configurations for complete records"
    },
    {
      icon: "📊",
      title: "Detailed Reporting",
      description: "Comprehensive reports on visit outcomes, equipment status, and maintenance needs"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Visit Request",
      description: "Create visit tickets with location, time, and engineer requirements"
    },
    {
      step: "02", 
      title: "Client Approval",
      description: "Client reviews visit details and approves access and timing"
    },
    {
      step: "03",
      title: "Engineer Dispatch",
      description: "Qualified engineer receives assignment with all necessary documentation"
    },
    {
      step: "04",
      title: "Inventory Update",
      description: "Real-time equipment inventory updates with photos and specifications"
    }
  ];

  return (
    <section id="provisit" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
              ProVisit
            </span>{" "}
            Ticket Service
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#B8860B] mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Streamlined client visit management with real-time scheduling, approval workflows, 
            and comprehensive equipment inventory tracking
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 h-full">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-6">Core Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFD700]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#B8860B]/10 rounded-2xl p-8 border border-[#FFD700]/20">
              <h4 className="text-xl font-semibold text-[#FFD700] mb-4">Visit Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Tickets</span>
                  <span className="text-2xl font-bold text-foreground">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Approved Visits</span>
                  <span className="text-2xl font-bold text-foreground">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg Response</span>
                  <span className="text-2xl font-bold text-foreground">2.4h</span>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Visit approved - Nutanix Office</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Engineer assigned - Room 402</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Inventory updated - Conference A</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workflow Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
              Visit Workflow
            </span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots/Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            ProVisit in Action
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="aspect-video bg-muted/30 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-border/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#FFD700] text-2xl">📱</span>
                  </div>
                  <p className="text-muted-foreground">Dashboard Screenshot</p>
                  <p className="text-muted-foreground text-sm">Upload your ProVisit interface image</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Visit Dashboard</h4>
              <p className="text-muted-foreground">Comprehensive overview of all scheduled visits, engineer assignments, and client approvals</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="aspect-video bg-muted/30 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-border/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#FFD700] text-2xl">📋</span>
                  </div>
                  <p className="text-muted-foreground">Inventory Interface</p>
                  <p className="text-muted-foreground text-sm">Upload your inventory management view</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Equipment Inventory</h4>
              <p className="text-muted-foreground">Detailed tracking of meeting room equipment with photos and specifications</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-12 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Streamline Your Client Visit Management
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              ProVisit integrates seamlessly with our AV & IT infrastructure services to provide 
              complete visibility and control over client site visits and equipment management.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold rounded-lg hover:from-[#B8860B] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request ProVisit Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProVisitSection;
