import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const skillGroups = [
  { label: 'core', items: 'React · TypeScript · JavaScript' },
  { label: 'design', items: 'Design Tokens · Storybook · Theming' },
  { label: 'state & forms', items: 'Redux Toolkit · RTK Query · Zod' },
  { label: 'styling', items: 'Tailwind CSS · CSS3' },
  { label: 'mobile', items: 'React Native · Expo' },
  { label: 'vue', items: 'Vue 3 · Nuxt · Pinia' },
  { label: 'testing', items: 'Vitest · Component tests · CI' },
  { label: 'platform', items: 'OpenFin · Git · Node.js' },
];

export const Terminal = () => {
  const { ref: typeRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const prefersReducedMotion = useReducedMotion();
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setTypingDone(true);
      return;
    }
    const totalTypingTime = 'npm run dev'.length * 50 + 600;
    const timer = setTimeout(() => setTypingDone(true), totalTypingTime);
    return () => clearTimeout(timer);
  }, [inView, prefersReducedMotion]);

  return (
    <div
      ref={typeRef}
      className="min-h-[420px] hover:cursor-text bg-gunmetal-black dark:bg-salt-white text-mint-green dark:text-gunmetal-black hover:dark:text-mint-green font-mono p-5 sm:p-6 rounded-xl shadow-lg text-left text-sm sm:text-base md:text-lg leading-relaxed transition-all hover:shadow-2xl hover:ring-4 hover:ring-mint-green hover:bg-black"
    >
      {inView ? (
        <p>
          {prefersReducedMotion ? (
            <span>npm run dev</span>
          ) : (
            <Typewriter
              words={['npm run dev']}
              loop={1}
              cursor
              cursorStyle="█"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          )}
        </p>
      ) : null}

      {typingDone ? (
        <div className="mt-4 space-y-3 sm:space-y-1">
          {skillGroups.map((group, index) => (
            <motion.p
              key={group.label}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.25,
                delay: prefersReducedMotion ? 0 : index * 0.12,
                ease: 'easeOut',
              }}
              className="flex flex-col sm:flex-row sm:gap-2"
            >
              <span className="opacity-70 shrink-0">
                <span aria-hidden="true">✓ </span>
                {group.label}:
              </span>
              <span className="pl-5 sm:pl-0">{group.items}</span>
            </motion.p>
          ))}
        </div>
      ) : null}
    </div>
  );
};