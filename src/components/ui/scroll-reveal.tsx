import { useRef } from 'react';
import { useIntersectionObserver } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'fade';
  delay?: number;
}

export function ScrollReveal({ 
  children, 
  className, 
  direction = 'up',
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      case 'fade':
        return 'animate-fade-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible ? `${getAnimationClass()} opacity-100` : 'opacity-0 translate-y-10',
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}