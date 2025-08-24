import { useState } from "react";
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
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll respond within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section className="py-24 px-4 md:px-8 bg-muted/30 relative">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-accent font-inter">Name *</Label>
                    <Input id="name" value={formData.name} onChange={e => handleChange("name", e.target.value)} className="bg-input border-border/50 focus:border-primary transition-luxury" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-accent font-inter">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} className="bg-input border-border/50 focus:border-primary transition-luxury" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-accent font-inter">Company</Label>
                  <Input id="company" value={formData.company} onChange={e => handleChange("company", e.target.value)} className="bg-input border-border/50 focus:border-primary transition-luxury" />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-accent font-inter">Service Interest</Label>
                  <Select value={formData.service} onValueChange={value => handleChange("service", value)}>
                    <SelectTrigger className="bg-input border-border/50 focus:border-primary transition-luxury">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zoom-rooms">Zoom Room Setup</SelectItem>
                      <SelectItem value="av-infrastructure">AV Infrastructure</SelectItem>
                      
                      <SelectItem value="it-support">On-site IT Support</SelectItem>
                      <SelectItem value="international">International Service</SelectItem>
                      <SelectItem value="collaboration">Remote Collaboration</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-accent font-inter">Message *</Label>
                  <Textarea id="message" value={formData.message} onChange={e => handleChange("message", e.target.value)} className="bg-input border-border/50 focus:border-primary transition-luxury min-h-[120px]" placeholder="Tell us about your project requirements..." required />
                </div>
                
<Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury transition-luxury group" size="lg">
  Send Message
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
    </section>;
};
export default Contact;
