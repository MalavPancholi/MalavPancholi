import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection() {
  return (
    <section className="text-center space-y-6 relative z-10">
      <div className="space-y-4">
        <ScrollReveal direction="fade">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text animate-glow">
              Malav Pancholi
            </span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <p className="text-xl md:text-2xl text-muted-foreground">
             Tech Enthusiast
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={400}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and building scalable applications. 
            I love turning complex problems into simple, beautiful designs and bringing ideas to life through code.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}