import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Options {
  /** Seconds without pointer input before the eyes start looking around. */
  idleAfter?: number;
  /** Seconds spent looking at each element while idle. */
  dwell?: number;
  /**
   * Elements the avatar glances at when idle, in priority order.
   * Only ones currently on screen are used.
   */
  idleTargets?: string[];
}

const DEFAULT_TARGETS = [
  '#projects h3',
  '#contact h3',
  '[data-eye-target]',
  'h1',
  'h3',
  'button',
];

export const useEyeTracking = ({
  idleAfter = 2,
  dwell = 2.4,
  idleTargets = DEFAULT_TARGETS,
}: Options = {}) => {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  /** Point in viewport space the eyes are aimed at. */
  const gaze = useRef<{ x: number; y: number } | null>(null);
  const lastInput = useRef(0);
  const lookIndex = useRef(0);
  const lookSwitchedAt = useRef(0);

  useEffect(() => {
    const left = leftPupilRef.current;
    const right = rightPupilRef.current;
    if (!left || !right) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const setters = [left, right].map((el) => ({
      x: gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power2.out' }),
      y: gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power2.out' }),
    }));

    /** Elements currently on screen that are worth looking at. */
    const visibleTargets = (): Element[] => {
      const vh = window.innerHeight;
      return idleTargets
        .flatMap((sel) => Array.from(document.querySelectorAll(sel)))
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.bottom > 0 && r.top < vh && r.width > 0;
        });
    };

    // pointermove covers mouse and touch-drag in one listener
    const onPointerMove = (e: PointerEvent) => {
      gaze.current = { x: e.clientX, y: e.clientY };
      lastInput.current = performance.now();
    };

    // a tap is a deliberate "look here" - treat it as input too
    const onPointerDown = (e: PointerEvent) => {
      gaze.current = { x: e.clientX, y: e.clientY };
      lastInput.current = performance.now();
    };

    const onResize = () => {
      gaze.current = null;
      gsap.set([left, right], { x: 0, y: 0 });
    };

    let raf = 0;
    const tick = (t: number) => {
      const idle = (t - lastInput.current) / 1000 > idleAfter;

      if (idle) {
        // move to the next target once the dwell time is up
        if ((t - lookSwitchedAt.current) / 1000 > dwell) {
          lookSwitchedAt.current = t;
          lookIndex.current += 1;
        }

        const targets = visibleTargets();
        if (targets.length) {
          const el = targets[lookIndex.current % targets.length];
          const r = el.getBoundingClientRect();
          gaze.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }
      }

      if (gaze.current) {
        // Aim from the midpoint between the eyes, then apply the same angle to
        // both pupils. Solving each eye independently is anatomically correct
        // but converges at close range, which reads as cross-eyed on a
        // stylised face - this keeps them parallel.
        const lRect = left.parentElement?.getBoundingClientRect();
        const rRect = right.parentElement?.getBoundingClientRect();
        if (lRect && rRect) {
          const midX = (lRect.left + lRect.width / 2 + rRect.left + rRect.width / 2) / 2;
          const midY = (lRect.top + lRect.height / 2 + rRect.top + rRect.height / 2) / 2;

          const dx = gaze.current.x - midX;
          const dy = gaze.current.y - midY;
          const angle = Math.atan2(dy, dx);
          const reach = Math.sqrt(dx ** 2 + dy ** 2) / 5;

          [lRect, rRect].forEach((rect, i) => {
            // cap still scales per eye, so travel stays proportional
            const distance = Math.min(rect.width * 0.4, reach);
            setters[i].x(Math.cos(angle) * distance);
            setters[i].y(Math.sin(angle) * distance);
          });
        }
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('resize', onResize);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      gsap.set([left, right], { x: 0, y: 0 });
    };
  }, [idleAfter, dwell, idleTargets]);

  return { leftPupilRef, rightPupilRef };
};