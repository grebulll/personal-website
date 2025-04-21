import { motion } from 'framer-motion';
import TiltCard from '../../TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal } from '../organisms/Terminal';
import { JourneySection } from './JourneySection';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
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
            <Terminal />
          </TiltCard>
        </motion.div>

        <JourneySection />
      </div>
    </section>
  );
}
