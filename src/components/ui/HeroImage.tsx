import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroImageProps {
  normalImage?: string;
  hoverImage?: string;
  maskRadius?: number;
}

export default function HeroImage({ 
  normalImage = '/images/hero-normal.jpg',
  hoverImage = '/images/hero-hover.jpg',
  maskRadius = 250
}: HeroImageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const maskOverlayRef = useRef<HTMLDivElement>(null);
  const quickSetX = useRef<Function | null>(null);
  const quickSetY = useRef<Function | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const maskOverlay = maskOverlayRef.current;

    if (!section || !imageWrapper || !maskOverlay) return;

    quickSetX.current = gsap.quickTo(maskOverlay, '--mask-x', { duration: 0.3, ease: 'power2.out' });
    quickSetY.current = gsap.quickTo(maskOverlay, '--mask-y', { duration: 0.3, ease: 'power2.out' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
      },
    });

    timeline
      .to(imageWrapper, {
        scale: 0.8,
        ease: 'none',
      })
      .to(section, {
        backgroundColor: '#1A1A1A',
        ease: 'none',
      }, 0);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      quickSetX.current = null;
      quickSetY.current = null;
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !quickSetX.current || !quickSetY.current) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    quickSetX.current(x);
    quickSetY.current(y);
  };

  const handleMouseLeave = () => {
    if (!quickSetX.current || !quickSetY.current) return;
    
    quickSetX.current(-50);
    quickSetY.current(-50);
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div 
          ref={containerRef}
          className="relative w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={imageWrapperRef}
            className="absolute inset-0 will-change-transform"
          >
            <img
              src={normalImage}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover select-none"
              draggable="false"
            />
            
            <div 
              ref={maskOverlayRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                maskImage: `radial-gradient(circle ${maskRadius}px at calc(var(--mask-x, -50) * 1%) calc(var(--mask-y, -50) * 1%), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)`,
                WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at calc(var(--mask-x, -50) * 1%) calc(var(--mask-y, -50) * 1%), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <img
                src={hoverImage}
                alt="Hero Hover"
                className="absolute inset-0 w-full h-full object-cover select-none"
                draggable="false"
              />
            </div>

            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center px-4">
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
      </div>
    </div>
  );
}
