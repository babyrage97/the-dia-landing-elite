import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Clock, Users, Lightbulb, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over a decade of experience delivering premium AV and IT solutions to Fortune 500 companies worldwide."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your sensitive business communications."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support ensuring your systems operate at peak performance always."
  },
  {
    icon: Users,
    title: "Certified Teams",
    description: "Factory-trained technicians certified by leading manufacturers including Zoom, Microsoft, and Cisco."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Cutting-edge solutions that anticipate future needs and integrate seamlessly with emerging technologies."
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Measurable improvements in productivity, collaboration efficiency, and operational cost reduction."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-4">
            Why Choose The-Dia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            We don't just install technology—we craft intelligent solutions that evolve with your business, 
            backed by unmatched expertise and unwavering commitment to excellence.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="card-gradient border-border/30 hover:border-primary/30 transition-luxury shadow-card hover:shadow-luxury group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-luxury">
                  <reason.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-space font-semibold text-accent mb-4 group-hover:text-gradient-diamond transition-luxury">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-2">500+</div>
            <div className="text-muted-foreground font-inter">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-space font-bold text-gradient-diamond mb-2">99.9%</div>
            <div className="text-muted-foreground font-inter">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-2">50+</div>
            <div className="text-muted-foreground font-inter">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-space font-bold text-gradient-diamond mb-2">24/7</div>
            <div className="text-muted-foreground font-inter">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;