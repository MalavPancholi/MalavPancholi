import { HeroSection } from "@/components/sections/hero-section";
import { SocialLinks } from "@/components/sections/social-links";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16 space-y-20 relative z-10">
        <HeroSection />
        <SocialLinks />
        <TechStack />
        <Experience />
        
        {/* Footer */}
        <ScrollReveal direction="fade">
          <footer className="text-center text-muted-foreground pt-8 border-t border-border/50">
            <p>© 2025 Malav Pancholi. Built with React & Tailwind CSS.</p>
          </footer>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Index;
