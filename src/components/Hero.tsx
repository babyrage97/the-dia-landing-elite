import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern conference room with premium AV equipment" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-space font-bold text-gradient-gold mb-2">
              The-Dia
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-glow" />
          </div>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-inter font-light text-foreground mb-6 leading-relaxed">
            Smart AV & IT Infrastructure for{" "}
            <span className="text-gradient-diamond font-medium">Modern Workspaces</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Premium enterprise solutions for Zoom Rooms, conferencing integration, 
            smart office infrastructure, and international service delivery.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury transition-luxury group px-8 py-6 text-lg font-medium"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent/20 text-accent hover:bg-accent/10 transition-luxury group px-8 py-6 text-lg font-medium"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-muted-foreground mb-4 font-inter">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-accent font-space font-medium">CHBC</span>
              <span className="text-accent font-space font-medium">Nutanix</span>
              <span className="text-accent font-space font-medium">Zoom</span>
              <span className="text-accent font-space font-medium">Microsoft</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;