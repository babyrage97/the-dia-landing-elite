import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const selectRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { toast } = useToast();

  // Detektovanje mobilnog uređaja
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasTouch = 'ontouchstart' in window;
      const smallScreen = window.innerWidth < 768;
      
      setIsMobile(isMobileDevice && (hasTouch || smallScreen));
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Prevencija scroll-a na Android uređajima
  useEffect(() => {
    if (isMobile) {
      const preventBodyScroll = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target?.closest('[data-radix-select-content]')) {
          document.body.style.overflow = 'hidden';
        }
      };

      const restoreBodyScroll = () => {
        document.body.style.overflow = '';
      };

      document.addEventListener('focusin', preventBodyScroll);
      document.addEventListener('focusout', restoreBodyScroll);

      return () => {
        document.removeEventListener('focusin', preventBodyScroll);
        document.removeEventListener('focusout', restoreBodyScroll);
        document.body.style.overflow = '';
      };
    }
  }, [isMobile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Company: ${formData.company || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent! ✅",
          description: "Thank you for your inquiry. We'll respond within 24 hours."
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Poboljšano rukovanje select otvaranjem
  const handleSelectOpenChange = (isOpen: boolean) => {
    if (isMobile) {
      if (isOpen) {
        // Sprečava scroll i čuva trenutnu poziciju
        const scrollPos = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPos}px`;
        document.body.style.width = '100%';
        
        // Fokusira select nakon kratke pauze
        setTimeout(() => {
          selectRef.current?.focus();
        }, 100);
      } else {
        // Vraća scroll poziciju
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  };

  // Native select za mobilne uređaje
  const MobileSelect = () => (
    <div className="relative">
      <select 
        value={formData.service} 
        onChange={(e) => handleChange("service", e.target.value)}
        className="w-full h-10 px-3 py-2 bg-input border border-border/50 rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none cursor-pointer"
        style={{ fontSize: '16px' }} // Sprečava zoom na iOS
      >
        <option value="">Select a service</option>
        <option value="zoom-rooms">Zoom Room Setup</option>
        <option value="av-infrastructure">AV Infrastructure</option>
        <option value="it-support">On-site IT Support</option>
        <option value="international">International Service</option>
        <option value="collaboration">Remote Collaboration</option>
        <option value="provisit">ProVisit Ticket Service</option>
        <option value="consultation">General Consultation</option>
      </select>
      {/* Custom arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 md:px-8 bg-muted/30 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
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
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to transform your workspace? Contact our experts for a personalized consultation 
            and discover how The-Dia can elevate your organization's collaboration capabilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-space font-semibold text-accent">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-accent font-inter">Name *</Label>
                      <Input 
                        id="name" 
                        value={formData.name} 
                        onChange={e => handleChange("name", e.target.value)} 
                        className="bg-input border-border/50 focus:border-primary transition-luxury" 
                        style={{ fontSize: '16px' }}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-accent font-inter">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={e => handleChange("email", e.target.value)} 
                        className="bg-input border-border/50 focus:border-primary transition-luxury" 
                        style={{ fontSize: '16px' }}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-accent font-inter">Company</Label>
                    <Input 
                      id="company" 
                      value={formData.company} 
                      onChange={e => handleChange("company", e.target.value)} 
                      className="bg-input border-border/50 focus:border-primary transition-luxury" 
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-accent font-inter">Service Interest</Label>
                    {isMobile ? (
                      <MobileSelect />
                    ) : (
                      <Select 
                        value={formData.service} 
                        onValueChange={value => handleChange("service", value)}
                        onOpenChange={handleSelectOpenChange}
                      >
                        <SelectTrigger 
                          ref={selectRef}
                          className="bg-input border-border/50 focus:border-primary transition-luxury"
                          style={{ fontSize: '16px' }}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          side="bottom"
                          align="start"
                          className="z-[9999] max-h-60 overflow-y-auto"
                          sideOffset={4}
                        >
                          <SelectItem value="zoom-rooms">Zoom Room Setup</SelectItem>
                          <SelectItem value="av-infrastructure">AV Infrastructure</SelectItem>
                          <SelectItem value="it-support">On-site IT Support</SelectItem>
                          <SelectItem value="international">International Service</SelectItem>
                          <SelectItem value="collaboration">Remote Collaboration</SelectItem>
                          <SelectItem value="provisit">ProVisit Ticket Service</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-accent font-inter">Message *</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message} 
                      onChange={e => handleChange("message", e.target.value)} 
                      className="bg-input border-border/50 focus:border-primary transition-luxury min-h-[120px]" 
                      placeholder="Tell us about your project requirements..." 
                      style={{ fontSize: '16px' }}
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury transition-luxury group disabled:opacity-50" 
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-accent">Email Us</h3>
                    <p className="text-muted-foreground font-inter">office@the-dia.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-accent">Call Us</h3>
                    <p className="text-muted-foreground font-inter">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-accent">Visit Us</h3>
                    <p className="text-muted-foreground font-inter">
                      Dubai
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-accent">Business Hours</h3>
                    <p className="text-muted-foreground font-inter">
                      Mon - Fri: 8:00 AM - 8:00 PM PST<br />
                      Weekend: Emergency Support Only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
