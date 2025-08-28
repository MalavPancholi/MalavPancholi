import { TechBadge } from "@/components/ui/tech-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Projects() {
  const projects = [
    {
      title: "ProfileCard",
      url: "https://github.com/MalavPancholi/ProfileCard",
    },
    {
      title: "kanban",
      url: "https://github.com/MalavPancholi/kanban",
    },
    {
      title: "URLytics",
      url: "https://github.com/MalavPancholi/URLytics",
    },
    {
      title: "Obscura",
      url: "https://github.com/MalavPancholi/Obscura",
    },
    {
      title: "PingPongBall",
      url: "https://github.com/MalavPancholi/PingPongBall",
    },
    {
      title: "SocialCryptic",
      url: "https://github.com/MalavPancholi/SocialCryptic",
    },
    {
      title: "SecretMindTech Internship Docs",
      url: "https://github.com/MalavPancholi/SecretMindTech_Internship_Docs",
    },
  ];

  return (
    <ScrollReveal direction="up">
      <section className="space-y-8 relative z-10">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={index * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TechBadge name={project.title} />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
