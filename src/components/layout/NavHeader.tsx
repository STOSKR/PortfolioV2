import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavHeaderProps {
  navItems?: Array<{ label: string; href: string }>;
}

export default function NavHeader({ 
  navItems = [
    { label: 'INICIO', href: '/' },
    { label: 'SOBRE MÍ', href: '#about' },
    { label: 'PROYECTOS', href: '#projects' },
    { label: 'CONTACTO', href: '#contact' },
  ]
}: NavHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { y: 0, opacity: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b-2 border-lime/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-black text-lime hover:text-white transition-colors">
            TU NOMBRE
          </a>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-lime transition-colors font-bold uppercase text-sm tracking-wider relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
