import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-space font-bold text-gradient-gold mb-4">
              The-Dia
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed mb-6 max-w-md">
              Transforming modern workspaces with premium AV and IT infrastructure solutions. 
              Your trusted partner for enterprise conferencing and international service delivery.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-luxury group" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-luxury group" aria-label="Twitter">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:info@the-dia.com" className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-luxury group" aria-label="Email">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-space font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                  Zoom Room Setup
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                  AV Infrastructure
                </a>
               </li>
               <li>
                 <a href="#services" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                   On-site IT Support
                 </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                  International Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-space font-semibold text-accent mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                <span className="font-inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-secondary flex-shrink-0" />
                <span className="font-inter">office@the-dia.com</span>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-accent flex-shrink-0 mt-1" />
                <span className="font-inter">
                  Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-inter text-sm">
  © 2025{' '}
  <a 
    href="https://withoutco.de" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-accent underline-offset-4 hover:underline transition-all duration-200"
  >
    withoutco.de
  </a>{' '}
  All rights reserved.
</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-luxury font-inter">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
