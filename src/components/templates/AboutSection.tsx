import { motion } from 'framer-motion';
import TiltCard from '../../TiltCard';
import { FaJs, FaReact, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { SiNuxtdotjs, SiRedux, SiTailwindcss } from 'react-icons/si';

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
  return (
    <section
      className="min-h-screen content-center py-20 text-gunmetal-black"
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
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <h3 className="text-3xl font-medium mb-4">My Journey</h3>
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-center">
                <TiltCard>
                  <div className="md:w-80 min-h-[200px] bg-gunmetal-black text-salt-white p-6 rounded-xl shadow-lg hover:bg-mint-green hover:text-gunmetal-black transition-all flex flex-col">
                    <h4 className="font-semibold text-xl mb-4">
                      {event.year} - {event.title}
                    </h4>
                    <p className="text-sm text-salt-white">
                      {event.description}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <h3 className="text-3xl font-medium mt-8 mb-6">Core Skills</h3>
          <div className="flex flex-row flex-wrap gap-8 justify-center">
            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <FaReact className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">React</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <FaVuejs className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">Vue</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <SiNuxtdotjs className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">Nuxt</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <SiRedux className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">Redux</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <SiTailwindcss className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">Tailwind</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <FaJs className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">JavaScript</h4>
                </div>
              </TiltCard>
            </div>

            <div className="w-64">
              <TiltCard>
                <div className="flex flex-col items-center text-center p-6 bg-gradient-to-r bg-gunmetal-black text-salt-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <FaGitAlt className="text-5xl mb-4" />
                  <h4 className="text-xl font-semibold">Git</h4>
                </div>
              </TiltCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
