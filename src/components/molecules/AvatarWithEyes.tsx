import { RefObject } from 'react';
import gsap from 'gsap';

interface AvatarWithEyesProps {
  leftPupilRef: RefObject<HTMLDivElement | null>;
  rightPupilRef: RefObject<HTMLDivElement | null>;
  tooltipRef: RefObject<HTMLSpanElement | null>;
}

const AvatarWithEyes = ({
  leftPupilRef,
  rightPupilRef,
  tooltipRef,
}: AvatarWithEyesProps) => {
  const showTooltip = () => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  };

  const hideTooltip = () => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  };

  return (
    <div
      className="md:mt-0 mt-2 w-full md:w-1/2 flex justify-center items-center relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div className="relative">
        <img
          src="/portfolio_avatar_image.webp"
          alt="Avatar"
          className="w-full h-auto max-w-[500px] mx-auto"
        />
        <div className="absolute top-[33%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-[3%] aspect-[1.3] pointer-events-none">
          <div className="w-full h-full" ref={leftPupilRef}>
            <img src="/left_eye.png" alt="Left Eye" className="w-full h-auto" />
          </div>
        </div>
        <div className="absolute top-[33%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-[3%] aspect-[1.3] pointer-events-none">
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
        ref={tooltipRef}
        className="lg:block hidden absolute bottom-full text-center p-2 bg-neon-blue dark:bg-mint-green text-salt-white dark:text-gunmetal-black text-sm font-light rounded-lg shadow-lg opacity-0 transform scale-95 pointer-events-none"
      >
        I also made this!
      </span>
    </div>
  );
};

export default AvatarWithEyes;
