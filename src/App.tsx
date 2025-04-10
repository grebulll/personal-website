import { useRef, useEffect } from 'react';
import { AboutSection } from './components/templates/AboutSection';
import { HeroSection } from './components/templates/HeroSection';

export default function App() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        backgroundRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      backgroundRef.current.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(99, 102, 241, 0.1) 0%,
          rgba(249, 250, 251, 1) 20%,
          rgba(249, 250, 251, 1) 50%
        ),
        linear-gradient(
          to top right,
          #F9FAFB,
          #F9FAFB
        )
      `;
    };

    const container = backgroundRef.current;
    if (!container) return;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-salt-white relative overflow-hidden"
      ref={backgroundRef}
      style={{
        background: `
      linear-gradient(
        to bottom right,
        #F9FAFB,
        #F9FAFB
      )
    `,
      }}
    >
      <div className="container justify-self-center px-44">
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}
