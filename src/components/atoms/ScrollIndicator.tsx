export function ScrollIndicator() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 md:block hidden`}
      onClick={handleScrollToAbout}
    >
      <div className="animate-bounce flex flex-col items-center cursor-pointer">
        <svg
          className="w-6 h-6 text-gunmetal-black"
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
