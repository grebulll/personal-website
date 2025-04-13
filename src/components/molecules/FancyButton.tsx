import gsap from 'gsap';
import { useRef, useEffect } from 'react';

interface FancyButtonProps {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  flairColor?: string;
  className?: string;
  onClick?: () => void;
}

export const FancyButton = ({
  type,
  title,
  backgroundColor = 'bg-gunmetal-black',
  hoverBackgroundColor = 'hover:bg-gunmetal-black',
  textColor = 'text-salt-white',
  hoverTextColor = 'hover:text-gunmetal-black',
  flairColor = 'bg-mint-green',
  className = '',
  onClick,
}: FancyButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const X_OFFSET = 59;
    const Y_OFFSET = 23;

    const getXY = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      return {
        x: e.clientX - rect.left - X_OFFSET,
        y: e.clientY - rect.top - Y_OFFSET,
      };
    };

    const handleEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      gsap.set(flair, { x, y, scale: 0 });
      gsap.to(flair, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(flair, {
        scale: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      gsap.to(flair, { x, y, duration: 0.2 });
    };

    button.addEventListener('mouseenter', handleEnter);
    button.addEventListener('mouseleave', handleLeave);
    button.addEventListener('mousemove', handleMove);

    return () => {
      button.removeEventListener('mouseenter', handleEnter);
      button.removeEventListener('mouseleave', handleLeave);
      button.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <button
      type={type ?? 'button'}
      ref={buttonRef}
      onClick={onClick}
      className={`hover:cursor-pointer relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg overflow-hidden group transition-all ${backgroundColor} ${hoverBackgroundColor} ${textColor} ${hoverTextColor} ${className}`}
    >
      <div
        ref={flairRef}
        className={`absolute w-56 h-56 rounded-full pointer-events-none transform scale-0 will-change-transform ${flairColor}`}
      />
      <span className="relative z-10">{title}</span>
    </button>
  );
};
