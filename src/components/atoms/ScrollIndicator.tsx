import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 hidden'
      }`}
      onClick={handleScrollToAbout}
    >
      <div className="animate-bounce flex flex-col items-center cursor-pointer">
        <svg
          className="w-6 h-6 text-mint-green"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
