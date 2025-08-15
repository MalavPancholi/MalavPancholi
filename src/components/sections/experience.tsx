import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Experience() {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Accomzy Accommodation Pvt. Ltd.",
      period: "Nov 2023 - Dec 2024",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications and improved user experience. Collaborated with design teams to implement pixel-perfect UI components.",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Firebase"]
    },
    {
      title: "Software Engineer Intern",
      company: "BigTech Inc",
      period: "2019 - 2020",
      description: "Developed internal tools and contributed to open-source projects. Gained experience in agile development and code review processes.",
      technologies: ["Python", "Django", "MySQL", "Git"]
    }
  ];

  return (
    <ScrollReveal direction="up">
      <section className="space-y-8 relative z-10">
        <h2 className="text-2xl font-semibold text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
              <Card className="card-glow border border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-muted-foreground animate">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <ScrollReveal key={tech} direction="up" delay={index * 200 + techIndex * 100}>
                        <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      </ScrollReveal>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}