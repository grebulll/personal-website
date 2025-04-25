import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { useRef } from 'react';
import { useEyeTracking } from '../../hooks/EyeTracking';
import { useTooltipAnimation } from '../../hooks/ToolTipAnimation';
import { HeroContent } from '../molecules/HeroContent';
import AvatarWithEyes from '../molecules/AvatarWithEyes';

const BackgroundBlobs = () => (
  <div className="md:block hidden absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue dark:bg-salt-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-gunmetal-black dark:bg-mint-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  </div>
);

export const HeroSection = () => {
  const imgTooltipRef = useRef<HTMLSpanElement>(null);
  const { leftPupilRef, rightPupilRef } = useEyeTracking();
  const {
    targetRef: nameRef,
    tooltipRef,
    contentRef: heroContentRef,
  } = useTooltipAnimation();

  return (
    <div className="w-full content-center min-h-screen relative z-10 transition-background duration-300 ease-out">
      <div className="justify-self-center flex md:flex-row flex-col font-inter text-gunmetal-black dark:text-salt-white items-center">
        <BackgroundBlobs />
        <HeroContent
          nameRef={nameRef}
          tooltipRef={tooltipRef}
          heroContentRef={heroContentRef}
        />
        <AvatarWithEyes
          leftPupilRef={leftPupilRef}
          rightPupilRef={rightPupilRef}
          tooltipRef={imgTooltipRef}
        />
      </div>
      <ScrollIndicator />
    </div>
  );
};
