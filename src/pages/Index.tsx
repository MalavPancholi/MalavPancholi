import { HeroSection } from "@/components/sections/hero-section";
import { SocialLinks } from "@/components/sections/social-links";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16 space-y-20 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Social Links */}
        <SocialLinks />

        {/* Tech Stack */}
        <TechStack />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Footer */}
        

        <ScrollReveal direction="fade">
          <footer>
  <div className="text-center space-y-2">
    <p>© 2025 Malav Pancholi | Built with ❤️ using React & Tailwind</p>
    <div className="flex justify-center gap-4">
      <a href="https://github.com/MalavPancholi" className="hover:text-blue-400">GitHub</a>
      <a href="https://linkedin.com" className="hover:text-blue-400">LinkedIn</a>
    </div>
  </div>
</footer>

        </ScrollReveal>
      </div>
    </div>
  );
};

export default Index;
