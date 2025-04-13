import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { AvatarModelScene } from '../organisms/AvatarModelScene';
import { FancyButton } from '../molecules/FancyButton';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const anotherTooltipRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !nameRef.current ||
      !tooltipRef.current ||
      !anotherTooltipRef.current ||
      !heroContentRef.current
    )
      return;

    const name = nameRef.current;
    const tooltip = tooltipRef.current;
    const heroContent = heroContentRef.current;

    gsap.set(tooltip, {
      opacity: 0,
      y: 10,
      scale: 0.95,
    });

    gsap.set(heroContent, { opacity: 0, scale: 0.8, rotation: -10, y: 30 });

    gsap.to(heroContent, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.1,
    });

    let currentAnimation: gsap.core.Tween | null = null;

    const handleMouseEnter = () => {
      if (currentAnimation) currentAnimation.kill();

      currentAnimation = gsap.to(tooltip, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      if (currentAnimation) currentAnimation.kill();

      currentAnimation = gsap.to(tooltip, {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.in',
      });
    };

    name.addEventListener('mouseenter', handleMouseEnter);
    name.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (currentAnimation) currentAnimation.kill();
      name.removeEventListener('mouseenter', handleMouseEnter);
      name.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full content-center min-h-screen relative z-10 transition-background duration-300 ease-out">
      <div className="justify-self-center flex md:flex-row flex-col font-inter text-gunmetal-black dark:text-salt-white items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue dark:bg-salt-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gunmetal-black dark:bg-mint-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

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
                some people call me{' '}
                <span ref={anotherTooltipRef} className="font-bold">
                  Bull
                </span>
              </span>
            </span>
          </h1>
          <h2 className="text-lg md:text-xl font-medium mb-8">
            Frontend Developer based in Malta
          </h2>
          <p className="text-base md:text-lg font-light mb-8">
            I build thoughtful interfaces with React and Vue.js
          </p>
          <p className="text-base md:text-lg font-light mb-8">
            With 3 years of experience crafting digital experiences, I
            specialize in building responsive, accessible web applications that
            users love.
          </p>

          <div className="flex gap-2 justify-center">
            <FancyButton
              title="Contact me"
              backgroundColor="bg-gunmetal-black dark:bg-salt-white"
              hoverBackgroundColor="dark:bg-mint-green"
              textColor="text-salt-white dark:text-gunmetal-black"
              hoverTextColor="hover:text-gunmetal-black dark:hover:text-gunmetal-black"
              flairColor="bg-mint-green dark:bg-mint-green"
            />
          </div>
        </div>
        <AvatarModelScene />
      </div>
      <ScrollIndicator />
    </div>
  );
};
