import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo) return;

    const tl = gsap.timeline();

    tl.from(logo, {
      scale: 0,
      rotation: 360,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }).to(logo, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });

    const loadingTimer = setTimeout(() => {
      const exitTl = gsap.timeline();
      
      exitTl
        .to(logo, {
          scale: 0,
          rotation: -360,
          duration: 0.5,
          ease: 'back.in(1.7)',
        })
        .to(
          container,
          {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              if (onLoadingComplete) {
                onLoadingComplete();
              }
            },
          },
          '-=0.3'
        );
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      tl.kill();
    };
  }, [onLoadingComplete]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';

    return () => {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
      document.body.style.userSelect = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-lime"
      style={{ 
        clipPath: 'circle(100% at 50% 50%)',
        pointerEvents: 'auto',
      }}
    >
      <div ref={logoRef} className="w-64 h-64">
        <img 
          src="/images/logo.svg" 
          alt="Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
