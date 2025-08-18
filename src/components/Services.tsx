import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Wifi, Settings, Headphones, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Zoom Room Setup",
    description: "Enterprise-grade video conferencing solutions with seamless integration and professional installation.",
    features: ["Room controller configuration", "Display calibration", "Audio optimization", "User training"]
  },
  {
    icon: Wifi,
    title: "AV Infrastructure",
    description: "Complete audiovisual system design, cabling, and implementation for modern office environments.",
    features: ["Cable management", "Signal distribution", "Control systems", "Future-proof design"]
  },
  {
    icon: Settings,
    title: "Smart Office Solutions",
    description: "Intelligent workplace technology that adapts to your team's collaboration needs.",
    features: ["Automated controls", "Environmental integration", "Booking systems", "Analytics dashboard"]
  },
  {
    icon: Headphones,
    title: "On-site IT Support",
    description: "Expert technical support and hardware troubleshooting to keep your systems running smoothly.",
    features: ["24/7 monitoring", "Rapid response", "Preventive maintenance", "Hardware replacement"]
  },
  {
    icon: Globe,
    title: "International Service",
    description: "Global deployment and support capabilities for multinational organizations.",
    features: ["Multi-region coordination", "Local partnerships", "Cultural adaptation", "Time zone coverage"]
  },
  {
    icon: Zap,
    title: "Remote Collaboration",
    description: "Advanced tools and platforms for seamless remote work and hybrid team collaboration.",
    features: ["Cloud integration", "Security protocols", "Performance optimization", "User experience design"]
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Comprehensive AV and IT solutions designed to transform your workspace 
            into a hub of productivity and innovation.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card hover:shadow-luxury group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-luxury">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-space font-semibold text-accent group-hover:text-gradient-gold transition-luxury">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-6 font-inter">
            Ready to transform your workspace?
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow" />
        </div>
      </div>
    </section>
  );
};

export default Services;