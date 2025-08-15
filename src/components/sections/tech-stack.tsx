import { TechBadge } from "@/components/ui/tech-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function TechStack() {
  const technologies = {
    "Programming Languages": [
      "Python", "Java","SQL"
    ],
    "Backend": [
      "Node.js", "Express", "Django"
    ],
    "Databases": [
      "MongoDB", "MySQL", "Oracle"
    ],
    "Tools & Platforms": [
      "Vercel", "Git", "MongoDB Shell", "Visual Studio", "IDLE", "WordPress", "Firebase", "Cloudnary"
    ],
    "Other Technologies": [
      "SEO", "Google Analytics", "Azure Fundamentals", "Figma", "Canva"
    ],
    "Soft Skills": [
      "Communication", "Teamwork", "Critical Thinking", "Leadership"
    ]
    
  };

  return (
    <ScrollReveal direction="up">
      <section className="space-y-8 relative z-10">
        <h2 className="text-2xl font-semibold text-center">Tech Stack</h2>
        <div className="space-y-6">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <ScrollReveal key={category} direction="left" delay={categoryIndex * 200}>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <ScrollReveal key={tech} direction="up" delay={categoryIndex * 200 + techIndex * 50}>
                      <TechBadge name={tech} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}