import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <WhyChooseUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;