import { SocialButton } from "@/components/ui/social-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Github, Linkedin, Mail, Twitter, Globe, FileText, Phone } from "lucide-react";

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MalavPancholi",
      label: "GitHub Profile"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/malavpancholi",
      label: "LinkedIn Profile"
    },
    {
      icon: Mail,
      href: "mailto:pancholimalav6@gmail.com",
      label: "Email Contact"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/malav_31",
      label: "Twitter Profile"
    },
    {
      icon: Phone,
      href: "tel:+918780363156",
      label: "Phone Number"
    },
    {
      icon: FileText,
      href: "/Malav_Pancholi_CV.pdf",
      label: "Download Resume"
    }
  ];

  return (
    <ScrollReveal direction="up">
      <section className="space-y-6 relative z-10">
        <h2 className="text-2xl font-semibold text-center">Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <ScrollReveal key={link.label} direction="up" delay={index * 100}>
              <SocialButton
                icon={link.icon}
                href={link.href}
                label={link.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}