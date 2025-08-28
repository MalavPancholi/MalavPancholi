import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Experience() {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Accomzy Accommodation Pvt. Ltd.",
      period: "Nov 2023 - Dec 2024",
      description: "Shows leadership + delivery + mentoring in a compact way. It makes you look like a tech lead who not only codes but also drives the team and product vision. Perfect balance for recruiters and portfolio viewers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "SEO Intern",
      company: "Secret MindTech",
      period: "May 2022 - June 2022",
      description: "Worked as a Digital Marketing Intern at Secret MindTech, where I supported digital campaigns, market research, and content strategy to enhance the company’s online presence and client outreach.",
      technologies: ["Google Analytics", "Google Ads", "SEMrush", "Google Sheets"]
    },
    // {
    //   title: "Software Engineer Intern",
    //   company: "BigTech Inc",
    //   period: "2019 - 2020",
    //   description: "Developed internal tools and contributed to open-source projects. Gained experience in agile development and code review processes.",
    //   technologies: ["Python", "Django", "MySQL", "Git"]
    // }
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
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <ScrollReveal key={tech} direction="up" delay={index * 200 + techIndex * 100}>
                        <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      </ScrollReveal>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}