import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  href: string;
  label: string;
  className?: string;
}

export function SocialButton({ icon: Icon, href, label, className }: SocialButtonProps) {
  return (
    <Button
      variant="ghost"
      size="lg"
      asChild
      className={cn(
        "card-glow p-4 h-16 w-16 rounded-2xl border border-border/50",
        "hover:border-primary/50 hover:text-primary group",
        "transition-all duration-300",
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
      </a>
    </Button>
  );
}