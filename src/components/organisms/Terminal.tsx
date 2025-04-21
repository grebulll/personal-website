import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

export const Terminal = () => {
  const { ref: typeRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (inView) {
      const totalTypingTime = 'npm run dev'.length * 50 + 600;
      const timer = setTimeout(() => setTypingDone(true), totalTypingTime);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={typeRef}
      className="min-h-[389px] hover:cursor-text bg-gunmetal-black dark:bg-salt-white text-mint-green dark:text-gunmetal-black hover:dark:text-mint-green font-mono p-6 rounded-xl shadow-lg text-left text-xl leading-relaxed transition-all hover:shadow-2xl hover:ring-4 hover:ring-mint-green hover:bg-black"
    >
      {inView ? (
        <p>
          <Typewriter
            words={['npm run dev']}
            loop={1}
            cursor
            cursorStyle="█"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </p>
      ) : null}
      {typingDone ? (
        <motion.div
          transition={{
            staggerChildren: 0.3,
          }}
          className="mt-4"
        >
          {[
            'React ⚛️',
            'Vue 🌱',
            'Nuxt 🧩',
            'Pinia 🍍',
            'Redux ♻️',
            'Expo 📱',
            'Tailwind 💨',
            'JavaScript ✨',
            'Git 🔧',
          ].map((skill, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0,
                delay: index * 0.03,
              }}
            >
              ▶ {skill}
            </motion.p>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};
