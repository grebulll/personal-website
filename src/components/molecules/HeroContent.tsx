import { FancyButton } from '../molecules/FancyButton';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RefObject } from 'react';

interface HeroContentProps {
  nameRef: RefObject<HTMLSpanElement | null>;
  tooltipRef: RefObject<HTMLSpanElement | null>;
  heroContentRef: RefObject<HTMLDivElement | null>;
}

export const HeroContent = ({
  nameRef,
  tooltipRef,
  heroContentRef,
}: HeroContentProps) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroContentRef}
      className="flex flex-col z-20 w-full md:w-1/2 h-full"
    >
      <h1 className="text-4xl md:text-7xl font-medium mb-8 animate-fadeInUp">
        Hi, I'm{' '}
        <span
          ref={nameRef}
          className="text-gunmetal-black dark:text-salt-white cursor-pointer relative inline-block"
        >
          Gabriel
          <span
            ref={tooltipRef}
            className="absolute left-1/2 bottom-full mb-3 w-max -translate-x-1/2 text-center p-3 bg-neon-blue dark:bg-mint-green text-salt-white dark:text-gunmetal-black text-sm font-light rounded-lg shadow-lg will-change-transform pointer-events-none"
          >
            some people call me <span className="font-bold">Bull</span>
          </span>
        </span>
      </h1>
      <h2 className="text-lg md:text-xl font-medium mb-8">
        Frontend Developer based in Malta
      </h2>
      <p className="text-base md:text-lg font-light mb-8">
        I build design systems and trading interfaces with React and TypeScript.
      </p>
      <p className="text-base md:text-lg font-light">
        4 years of production experience. Currently building OpenFin desktop
        trading applications for a capital markets client - design tokens,
        theming, component libraries, and the framework migrations nobody
        volunteers for.
      </p>
      <div className="flex flex-row my-8 gap-2 md:justify-start justify-center">
        <a
          href="https://www.linkedin.com/in/gabriel-cini-b36687201/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin
            size={30}
            aria-hidden="true"
            className="hover:text-neon-blue dark:hover:text-mint-green transition-colors"
          />
        </a>
        <a
          href="https://github.com/grebulll"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithub
            size={30}
            aria-hidden="true"
            className="hover:text-neon-blue dark:hover:text-mint-green transition-colors"
          />
        </a>
      </div>
      <div className="flex gap-2 md:justify-start justify-center">
        <FancyButton
          onClick={handleScrollToContact}
          title="Contact me"
          backgroundColor="bg-gunmetal-black dark:bg-salt-white"
          hoverBackgroundColor="dark:bg-mint-green"
          textColor="text-salt-white dark:text-gunmetal-black"
          hoverTextColor="hover:text-gunmetal-black dark:hover:text-gunmetal-black"
          flairColor="bg-mint-green dark:bg-mint-green"
        />
        <a href="/Gabriel_Cini_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download my CV (PDF)">
          <FancyButton
            title="My CV"
            backgroundColor="bg-gunmetal-black dark:bg-salt-white"
            hoverBackgroundColor="dark:bg-mint-green"
            textColor="text-salt-white dark:text-gunmetal-black"
            hoverTextColor="hover:text-gunmetal-black dark:hover:text-gunmetal-black"
            flairColor="bg-mint-green dark:bg-mint-green"
          />
        </a>
      </div>
    </div>
  );
};
