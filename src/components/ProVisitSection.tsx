import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, CheckCircle, Clipboard, Camera, BarChart } from "lucide-react";

const ProVisitSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Visit Scheduling",
      description: "Automatically schedule and coordinate client visits with location sharing and time management",
      details: ["Real-time scheduling", "Location tracking", "Time optimization", "Automated notifications"]
    },
    {
      icon: Users,
      title: "Engineer Assignment", 
      description: "Assign qualified engineers to specific visits based on expertise and availability",
      details: ["Skill-based matching", "Availability tracking", "Workload balancing", "Performance metrics"]
    },
    {
      icon: CheckCircle,
      title: "Client Approval System",
      description: "Clients receive detailed visit information and must approve before engineers arrive",
      details: ["Automated approvals", "Detailed notifications", "Approval tracking", "Client dashboard"]
    },
    {
      icon: Clipboard,
      title: "Complete Inventory Management",
      description: "Track every piece of equipment in each meeting room with detailed specifications",
      details: ["Asset tracking", "Room mapping", "Specification logs", "Maintenance history"]
    },
    {
      icon: Camera,
      title: "Visual Documentation",
      description: "Photo documentation of all equipment and room configurations for complete records",
      details: ["Photo capture", "Visual comparisons", "Change tracking", "Documentation archive"]
    },
    {
      icon: BarChart,
      title: "Detailed Reporting",
      description: "Comprehensive reports on visit outcomes, equipment status, and maintenance needs",
      details: ["Performance analytics", "Status reports", "Trend analysis", "Custom dashboards"]
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
      title: "Ticket Closure",
      description: "Closing ticket with all necessary documentation, photos and updates of inventory"
    }
  ];

  return (
    <section id="provisit" className="py-24 px-4 md:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern - matching WhyChooseUs exactly */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-4">
            ProVisit Ticket Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Streamlined client visit management with real-time scheduling, approval workflows, 
            and comprehensive equipment inventory tracking
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card hover:shadow-luxury group h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-luxury">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-space font-semibold text-accent group-hover:text-gradient-gold transition-luxury">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-space font-bold text-center text-gradient-gold mb-12">
            Visit Workflow
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-black font-bold text-lg font-space">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-accent mb-2 font-space">{item.title}</h4>
                <p className="text-muted-foreground text-sm font-inter">{item.description}</p>
                
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
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
          <h3 className="text-3xl font-space font-bold text-center text-gradient-gold mb-12">
            ProVisit in Action
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card hover:shadow-luxury group">
              <CardContent className="p-8">
<div className="aspect-video rounded-xl mb-6 overflow-hidden">
  <img 
    src="/public/provisit/visits.jpg"
    alt="ProVisit visit Management" 
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
                <h4 className="text-xl font-semibold text-accent mb-2 font-space">Visit Dashboard</h4>
                <p className="text-muted-foreground font-inter">Comprehensive overview of all scheduled visits, engineer assignments, and client approvals</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card hover:shadow-luxury group">
              <CardContent className="p-8">
<div className="aspect-video rounded-xl mb-6 overflow-hidden">
  <img 
    src="/public/provisit/inventory.jpg"
    alt="ProVisit Inventory Management" 
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
                <h4 className="text-xl font-semibold text-accent mb-2 font-space">Equipment Inventory</h4>
                <p className="text-muted-foreground font-inter">Detailed tracking of meeting room equipment with photos and specifications</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-accent mb-4 font-space">
            Streamline Your Client Visit Management
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter leading-relaxed">
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury transition-luxury group px-6 py-3 text-base font-medium inline-flex items-center gap-2 rounded-xl"
          >
            Request ProVisit Demo
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <div className="mt-8">
            <p className="text-lg text-muted-foreground mb-6 font-inter">
              Ready to optimize your visit management?
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProVisitSection;
