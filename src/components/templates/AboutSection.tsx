import { motion } from 'framer-motion';
import TiltCard from '../../TiltCard';
import { Terminal } from '../organisms/Terminal';
import { JourneySection } from './JourneySection';
import { ProjectsSection } from './ProjectsSection';

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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-medium mb-4">About Me</h2>
          <p className="mb-8 leading-relaxed text-base md:text-lg font-light">
            I build design systems and the interfaces that sit on top of them.
            Most of my work lately is desktop trading software - colour tokens
            across multiple themes, component libraries other teams depend on,
            and the framework migrations nobody volunteers for. Before that,
            healthcare apps and a ticketing kiosk you can still find at Malta
            International Airport.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <h3 className="text-3xl font-medium mt-8 mb-6">Core Skills</h3>
          <TiltCard tiltIntensity={1} className="w-full">
            <Terminal />
          </TiltCard>
        </motion.div>

        <ProjectsSection />

        <JourneySection />
      </div>
    </section>
  );
}
