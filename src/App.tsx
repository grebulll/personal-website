import { useRef, useEffect, useState } from 'react';
import { HeroSection } from './components/templates/HeroSection';
import AboutSection from './components/templates/AboutSection';
import ContactSection from './components/templates/ContactSection';

export default function App() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setTheme(savedMode === 'true' ? 'dark' : 'light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', theme === 'dark' ? 'true' : 'false');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        backgroundRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      backgroundRef.current.style.background =
        theme === 'dark'
          ? `
          
        `
          : `
          radial-gradient(
            circle at ${x * 100}% ${y * 100}%,
            rgba(31, 41, 55, 0.1) 0%,
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
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-salt-white dark:bg-gunmetal-black relative overflow-hidden transition-colors duration-300 ease-in-out"
      ref={backgroundRef}
      style={{
        background:
          theme === 'dark'
            ? `linear-gradient(to bottom right, #111827, #111827)`
            : `linear-gradient(to bottom right, #F9FAFB, #F9FAFB)`,
      }}
    >
      <button
        onClick={toggleTheme}
        className="hover:cursor-pointer fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        aria-label={
          theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        }
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
      <div className="container pb-20 justify-self-center lg:px-44 px-8">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
