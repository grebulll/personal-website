import { useEffect, useState } from 'react';
import { HeroSection } from './components/templates/HeroSection';
import AboutSection from './components/templates/AboutSection';
import ContactSection from './components/templates/ContactSection';
import { Footer } from './components/templates/Footer';

export default function App() {
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

  return (
    <div data-theme={theme} className="min-h-screen relative overflow-hidden">
      <button
        onClick={toggleTheme}
        className="absolute hover:cursor-pointer top-4 right-4 z-50 p-2 rounded-full bg-gunmetal-black dark:bg-salt-white text-salt-white dark:text-gunmetal-black shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
      <div className="bg-salt-white dark:bg-gunmetal-black transition-colors">
        <div className="container md:pt-0 pb-20 pt-20 justify-self-center lg:px-44 px-8">
          <HeroSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
