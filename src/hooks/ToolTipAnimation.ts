import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useTooltipAnimation = () => {
  const targetRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const target = targetRef.current;
    const content = contentRef.current;
    let currentAnimation: gsap.core.Tween | null = null;

    if (!tooltip || !target || !content) return;

    gsap.set(tooltip, {
      opacity: 0,
      y: 10,
      scale: 0.95,
    });

    gsap.set(content, { opacity: 0, scale: 0.8, rotation: -10, y: 30 });

    gsap.to(content, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.1,
    });

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

    target.addEventListener('mouseenter', handleMouseEnter);
    target.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (currentAnimation) currentAnimation.kill();
      target.removeEventListener('mouseenter', handleMouseEnter);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return {
    targetRef,
    tooltipRef,
    contentRef,
  };
};
