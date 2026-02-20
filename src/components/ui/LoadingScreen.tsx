import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spinner = spinnerRef.current;

    if (!container || !spinner) return;

    const loadingTimer = setTimeout(() => {
      const exitTl = gsap.timeline();
      
      exitTl
        .to(spinner, {
          scale: 0,
          opacity: 0,
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
    <>
      <style>{`
        @keyframes spin3D {
          from {
            transform: rotate3d(.5,.5,.5, 360deg);
          }
          to {
            transform: rotate3d(0deg);
          }
        }

        .spinner-box {
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
        }

        .leo {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }

        .blue-orbit {
          width: 165px;
          height: 165px;
          border: 1px solid #91daffa5;
          -webkit-animation: spin3D 3s linear .2s infinite;
          animation: spin3D 3s linear .2s infinite;
        }

        .green-orbit {
          width: 120px;
          height: 120px;
          border: 1px solid #91ffbfa5;
          -webkit-animation: spin3D 2s linear 0s infinite;
          animation: spin3D 2s linear 0s infinite;
        }

        .red-orbit {
          width: 90px;
          height: 90px;
          border: 1px solid #ffca91a5;
          -webkit-animation: spin3D 1s linear 0s infinite;
          animation: spin3D 1s linear 0s infinite;
        }

        .white-orbit {
          width: 60px;
          height: 60px;
          border: 2px solid #ffffff;
          -webkit-animation: spin3D 10s linear 0s infinite;
          animation: spin3D 10s linear 0s infinite;
        }

        .w1 {
          transform: rotate3D(1, 1, 1, 90deg);
        }

        .w2 {
          transform: rotate3D(1, 2, .5, 90deg);
        }

        .w3 {
          transform: rotate3D(.5, 1, 2, 90deg);
        }
      `}</style>
      
      <div
        ref={containerRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-lime"
        style={{ 
          clipPath: 'circle(100% at 50% 50%)',
          pointerEvents: 'auto',
        }}
      >
        <div ref={spinnerRef} className="spinner-box">
          <div className="blue-orbit leo"></div>
          <div className="green-orbit leo"></div>
          <div className="red-orbit leo"></div>
          <div className="white-orbit w1 leo"></div>
          <div className="white-orbit w2 leo"></div>
          <div className="white-orbit w3 leo"></div>
        </div>
      </div>
    </>
  );
}
