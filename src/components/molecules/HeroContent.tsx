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
        I build thoughtful interfaces with React and Vue.js
      </p>
      <p className="text-base md:text-lg font-light">
        With 3 years of experience crafting digital experiences, I specialize in
        building responsive, accessible web applications that users love.
      </p>
      <div className="flex flex-row my-8 gap-2 md:justify-start justify-center">
        <a
          href="https://www.linkedin.com/in/gabriel-cini-b36687201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="hover:text-neon-blue dark:hover:text-mint-green transition-colors"
          />
        </a>
        <a
          href="https://github.com/gab-cin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={30}
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
        <a href="/CV.pdf" target="_blank">
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
