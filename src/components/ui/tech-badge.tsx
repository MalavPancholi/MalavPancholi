import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "card-glow px-4 py-2 text-sm font-medium",
        "border border-border/50 hover:border-primary/50",
        "transition-all duration-300 hover:scale-105",
        className
      )}
    >
      {name}
    </Badge>
  );
}