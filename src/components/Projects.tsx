import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Users, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Nutanix EMEA IT Support",
    client: "Nutanix",
    location: "EMEA Region",
    size: "Multi-Region Support",
    description: "Comprehensive IT equipment and meeting room support across the entire EMEA region. Providing ongoing technical assistance and maintenance for office infrastructure.",
    tags: ["IT Support", "Meeting Rooms", "EMEA"],
    status: "Ongoing",
    results: "2+ years of continuous support, reliable infrastructure management"
  },
  {
    title: "European Patent Office Support",
    client: "European Patent Office",
    location: "Munich, Germany",
    size: "Full Office Support",
    description: "On-site support for meetings and events, specialized Neat Bars equipment management, comprehensive IT support from laptop rollout to troubleshooting.",
    tags: ["On-site Support", "Neat Bars", "IT Support"],
    status: "Ongoing",
    results: "Enhanced meeting efficiency, seamless event support, reliable IT operations"
  },
  {
    title: "Lenovo Infrastructure Management",
    client: "Lenovo",
    location: "Enterprise Sites",
    size: "Server & Network Infrastructure",
    description: "Professional server rack installation, ongoing management and configuration services, plus installation and deinstallation of Access Points for network infrastructure.",
    tags: ["Server Installation", "Configuration", "Access Points"],
    status: "Completed",
    results: "Optimized network performance, professional infrastructure deployment"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gradient-gold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Discover how we've transformed workspaces for industry leaders, 
            delivering measurable results and exceptional user experiences.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border/50 hover:border-primary/20 transition-luxury shadow-card hover:shadow-luxury group animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" 
                      ? "bg-primary/20 text-primary border-primary/30" 
                      : "bg-secondary/20 text-secondary border-secondary/30"
                    }
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-space font-semibold text-accent group-hover:text-gradient-gold transition-luxury">
                  {project.title}
                </CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-primary" />
                    {project.client}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    {project.size}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="border-accent/20 text-accent/80 hover:bg-accent/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-space font-medium text-accent mb-2">Key Results</h4>
                  <p className="text-sm text-muted-foreground font-inter">
                    {project.results}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card-gradient border border-border/30 rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-semibold text-gradient-diamond mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground font-inter mb-6">
              Let's discuss how we can transform your workspace with cutting-edge AV and IT solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;