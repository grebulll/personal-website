import { motion } from 'framer-motion';
import TiltCard from '../../TiltCard';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '2016',
    title: 'Explored Coding for the First Time',
    description:
      'Embarked on my coding journey, initially experimenting with game development, and then delving into HTML, CSS, and JavaScript.',
  },
  {
    year: '2017',
    title: 'Pursued Advanced Diploma in IT',
    description:
      'Started a comprehensive 2-year Advanced Diploma in IT, gaining foundational skills in various technologies and IT principles.',
  },
  {
    year: '2019',
    title: 'Began Bachelor’s Degree in IT',
    description:
      'Embarked on a 3-year Bachelor’s Degree in IT, expanding my knowledge and technical skills in software development, systems, and networks.',
  },
  {
    year: '2022',
    title: 'Completed Apprenticeship Program',
    description:
      'Participated in a hands-on apprenticeship program, gaining real-world experience and deepening my understanding of the tech industry.',
  },
  {
    year: '2022',
    title: 'Joined as a Full-Time Frontend Developer',
    description:
      'Transitioned into a full-time role as a Frontend Developer, working on dynamic web applications and delivering seamless user experiences.',
  },
];

export default function AboutSection() {
  const journeyRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!journeyRef.current) return;
    const elements = journeyRef.current.querySelectorAll('.journey-step');

    elements.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        el,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const line = document.getElementById('timeline-line');
    const journeyHeight = journeyRef.current.scrollHeight;

    gsap.set(line, { height: 0 });

    gsap.to(line, {
      height: journeyHeight,
      ease: 'none',
      scrollTrigger: {
        trigger: journeyRef.current,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      className="min-h-screen content-center py-20 text-gunmetal-black dark:text-salt-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-medium mb-4">About Me</h2>
          <p className="mb-8 leading-relaxed text-base md:text-lg font-light">
            I'm a frontend developer who loves building slick UIs and making
            websites feel alive. I care deeply about clean code and great UX.
            I’m always excited to learn new things and tackle challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <h3 className="text-3xl font-medium mt-8 mb-6">Core Skills</h3>
          <TiltCard tiltIntensity={1}>
            <div
              ref={typeRef}
              className="hover:cursor-text bg-gunmetal-black dark:bg-salt-white text-mint-green dark:text-gunmetal-black hover:dark:text-mint-green font-mono p-6 rounded-xl shadow-lg text-left text-xl leading-relaxed transition-all hover:shadow-2xl hover:ring-4 hover:ring-mint-green hover:bg-black"
            >
              {inView && (
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
              )}

              {typingDone && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4"
                >
                  <p>▶ React ⚛️</p>
                  <p>▶ Vue 🌱</p>
                  <p>▶ Nuxt 🧩</p>
                  <p>▶ Pinia 🍍</p>
                  <p>▶ Redux ♻️</p>
                  <p>▶ Expo 📱</p>
                  <p>▶ Tailwind 💨</p>
                  <p>▶ JavaScript ✨</p>
                  <p>▶ Git 🔧</p>
                </motion.div>
              )}
            </div>
          </TiltCard>
        </motion.div>

        <div className="pt-10">
          <h3 className="text-3xl font-medium mb-4">My Journey</h3>
          <div
            ref={journeyRef}
            className="relative flex flex-col items-center justify-center"
          >
            <div
              id="timeline-line"
              className="md:block hidden rounded-t-full rounded-b-full absolute w-1 bg-gunmetal-black dark:bg-mint-green top-0 left-1/2 transform -translate-x-1/2 origin-top z-0"
            />
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`journey-step relative z-10 not-last:mb-12 w-full flex ${
                  index % 2 === 0
                    ? 'justify-start md:pr-10'
                    : 'justify-end md:pl-10'
                }`}
              >
                <div
                  className={`flex justify-${
                    index % 2 === 0 ? 'start xl:ml-28' : 'end xl:mr-28'
                  } items-center`}
                >
                  <TiltCard>
                    <div className="md:w-80 min-h-[200px] bg-gunmetal-black dark:bg-salt-white text-salt-white hover:text-gunmetal-black dark:text-gunmetal-black hover:bg-mint-green dark:hover:bg-mint-green dark:hover:text-gunmetal-black p-6 rounded-xl shadow-lg transition-all flex flex-col">
                      <h4 className="font-semibold text-xl mb-4">
                        {event.year} - {event.title}
                      </h4>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </TiltCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
