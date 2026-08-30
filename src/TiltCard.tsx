import { useState, useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  tiltIntensity?: number;
  resetSpeed?: number;
  className?: string;
}

const TiltCard = ({
  children,
  tiltIntensity = 10,
  resetSpeed = 300,
  className = '',
}: TiltCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isHovering = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    isHovering.current = true;
    cancelAnimationFrame(animationRef.current as number);

    animationRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = ((y - centerY) / centerY) * tiltIntensity;
      const tiltY = ((centerX - x) / centerX) * tiltIntensity;

      setTilt({ x: tiltX, y: tiltY });
    });
  };

  const handleMouseLeave = () => {
    isHovering.current = false;

    const startTime = performance.now();
    const startTilt = { ...tilt };

    const animateReset = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / resetSpeed, 1);

      setTilt({
        x: startTilt.x * (1 - progress),
        y: startTilt.y * (1 - progress),
      });

      if (progress < 1 && !isHovering.current) {
        animationRef.current = requestAnimationFrame(animateReset);
      }
    };

    animationRef.current = requestAnimationFrame(animateReset);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovering.current
          ? 'transform 0.05s linear'
          : `transform ${resetSpeed}ms cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
        transformStyle: 'preserve-3d',
      }}
      className={`hover:cursor-pointer ${className}`}    >
      {children}
    </div>
  );
};

export default TiltCard;
