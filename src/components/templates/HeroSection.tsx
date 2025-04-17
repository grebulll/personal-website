import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { FancyButton } from '../molecules/FancyButton';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const HeroSection = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const imgTooltipRef = useRef<HTMLSpanElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eyes = [
        { ref: leftPupilRef, eyeCenterX: 0, eyeCenterY: 0 },
        { ref: rightPupilRef, eyeCenterX: 0, eyeCenterY: 0 },
      ];

      eyes.forEach(({ ref }) => {
        if (!ref.current) return;

        const eye = ref.current.parentElement;
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const eyeWidth = rect.width;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const maxDistance = eyeWidth * 0.4;
        const distance = Math.min(
          maxDistance,
          Math.sqrt(dx * dx + dy * dy) / 5
        );

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        gsap.to(ref.current, {
          x,
          y,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    };

    const handleResize = () => {
      if (leftPupilRef.current) gsap.set(leftPupilRef.current, { x: 0, y: 0 });
      if (rightPupilRef.current)
        gsap.set(rightPupilRef.current, { x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!nameRef.current || !tooltipRef.current || !heroContentRef.current)
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
        <div className="md:block hidden absolute inset-0 overflow-hidden">
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
            With 3 years of experience crafting digital experiences, I
            specialize in building responsive, accessible web applications that
            users love.
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
              href="https://github.com/grebulll"
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

            <a href="/CV.pdf" target="blank">
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
        <div
          className="md:mt-0 mt-2 w-full md:w-1/2 flex justify-center items-center relative"
          onMouseEnter={() => {
            if (imgTooltipRef.current) {
              gsap.to(imgTooltipRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power2.out',
              });
            }
          }}
          onMouseLeave={() => {
            if (imgTooltipRef.current) {
              gsap.to(imgTooltipRef.current, {
                opacity: 0,
                y: 10,
                scale: 0.95,
                duration: 0.2,
                ease: 'power2.in',
              });
            }
          }}
        >
          <div className="relative">
            <img
              src="/portfolio_avatar_image.webp"
              alt="Avatar"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
            <div
              className="
                absolute 
                top-[33%] 
                left-[38%]
                -translate-x-1/2 
                -translate-y-1/2 
                w-[3%]
                aspect-[1.3]
                pointer-events-none
              "
            >
              <div className="w-full h-full" ref={leftPupilRef}>
                <img
                  src="/left_eye.png"
                  alt="Left Eye"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              className="
                absolute 
                top-[33%] 
                left-[53%]
                -translate-x-1/2 
                -translate-y-1/2 
                w-[3%]
                aspect-[1.3]
                pointer-events-none
              "
            >
              <div className="w-full h-full" ref={rightPupilRef}>
                <img
                  src="/right_eye.png"
                  alt="Right Eye"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <span
            ref={imgTooltipRef}
            className="lg:block hidden absolute bottom-full text-center p-2 bg-neon-blue dark:bg-mint-green text-salt-white dark:text-gunmetal-black text-sm font-light rounded-lg shadow-lg opacity-0 transform scale-95 pointer-events-none"
          >
            I also made this!
          </span>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};
