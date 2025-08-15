import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AnimatedBackground() {
  const scrollY = useScrollAnimation();

  const shapes = [
    {
      id: 1,
      size: 'w-20 h-20',
      color: 'bg-primary/10',
      animation: 'animate-float',
      position: 'top-20 left-[10%]',
      parallax: 0.2
    },
    {
      id: 2,
      size: 'w-16 h-16',
      color: 'bg-accent/10',
      animation: 'animate-float-slow',
      position: 'top-40 right-[15%]',
      parallax: 0.3
    },
    {
      id: 3,
      size: 'w-24 h-24',
      color: 'bg-primary-glow/10',
      animation: 'animate-float-reverse',
      position: 'top-[60%] left-[5%]',
      parallax: 0.15
    },
    {
      id: 4,
      size: 'w-12 h-12',
      color: 'bg-accent/20',
      animation: 'animate-spin-slow',
      position: 'top-[80%] right-[20%]',
      parallax: 0.4
    },
    {
      id: 5,
      size: 'w-32 h-32',
      color: 'bg-primary/5',
      animation: 'animate-float-slow',
      position: 'top-[30%] right-[5%]',
      parallax: 0.1
    },
    {
      id: 6,
      size: 'w-8 h-8',
      color: 'bg-primary-glow/30',
      animation: 'animate-pulse-slow',
      position: 'top-[70%] left-[20%]',
      parallax: 0.5
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`
            absolute ${shape.size} ${shape.color} ${shape.animation} ${shape.position}
            rounded-full blur-sm opacity-60
          `}
          style={{
            transform: `translateY(${scrollY * shape.parallax}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
}