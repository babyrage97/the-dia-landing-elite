import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Users, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Global Banking Headquarters",
    client: "Fortune 100 Financial Institution",
    location: "New York, NY",
    size: "50 Conference Rooms",
    description: "Complete Zoom Room deployment across multiple floors with integrated calendar systems and advanced analytics.",
    tags: ["Zoom Rooms", "Enterprise", "Analytics"],
    status: "Completed",
    results: "95% adoption rate, 40% reduction in meeting setup time"
  },
  {
    title: "Tech Campus Innovation Hub",
    client: "Leading Software Company",
    location: "San Francisco, CA",
    size: "25 Collaboration Spaces",
    description: "Smart office integration with environmental controls, booking systems, and wireless presentation capabilities.",
    tags: ["Smart Office", "IoT", "Wireless"],
    status: "Completed",
    results: "300% increase in room utilization, seamless hybrid work"
  },
  {
    title: "International Law Firm",
    client: "Top-Tier Legal Practice",
    location: "London, UK",
    size: "30 Meeting Rooms",
    description: "Secure video conferencing with end-to-end encryption and multi-region support for client confidentiality.",
    tags: ["Security", "International", "Legal"],
    status: "In Progress",
    results: "Enhanced client confidence, global collaboration enabled"
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