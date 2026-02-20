import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroImageProps {
  normalImage?: string;
  hoverImage?: string;
}

export default function HeroImage({ 
  normalImage = '/images/hero-normal.jpg',
  hoverImage = '/images/hero-hover.jpg'
}: HeroImageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const hoverImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: false,
      },
    });

    tl.to(image, {
      scale: 1.2,
      y: 100,
      filter: 'brightness(0.7)',
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <img
          src={normalImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div 
          ref={hoverImageRef}
          className="absolute inset-0"
          style={{
            clipPath: `circle(200px at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: 'clip-path 0.15s ease-out',
          }}
        >
          <img
            src={hoverImage}
            alt="Hero Hover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight">
            Tu Nombre
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mt-4 font-bold uppercase tracking-wider">
            Desarrollador Full Stack
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-8 h-8 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
}
