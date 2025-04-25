import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useEyeTracking = () => {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      [leftPupilRef, rightPupilRef].forEach((ref) => {
        if (!ref.current) return;
        const eye = ref.current.parentElement;
        if (!eye) return;

        const rect = eye.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(
          rect.width * 0.4,
          Math.sqrt(dx ** 2 + dy ** 2) / 5
        );
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        gsap.to(ref.current, { x, y, duration: 0.2, ease: 'power2.out' });
      });
    };

    const handleResize = () => {
      gsap.set(leftPupilRef.current, { x: 0, y: 0 });
      gsap.set(rightPupilRef.current, { x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [leftPupilRef, rightPupilRef]);

  return { leftPupilRef, rightPupilRef };
};
