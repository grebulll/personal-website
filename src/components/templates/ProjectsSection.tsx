import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import TiltCard from '../../TiltCard';
import { projects } from '../../constants/Projects';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="pt-10">
      <h3 className="text-3xl font-medium mb-4">Projects</h3>

      <div
        ref={projectsRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <TiltCard>
              <article className="h-full min-h-[280px] flex flex-col bg-gunmetal-black dark:bg-salt-white text-salt-white dark:text-gunmetal-black p-6 rounded-xl shadow-lg transition-all hover:bg-mint-green hover:text-gunmetal-black dark:hover:bg-mint-green dark:hover:text-gunmetal-black">
                <h4 className="font-semibold text-xl">{project.title}</h4>

                {project.subtitle && (
                  <p className="text-sm opacity-70 mt-1">{project.subtitle}</p>
                )}

                <ul className="flex flex-wrap gap-2 my-4" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded border border-current opacity-80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-light grow">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} - opens in a new tab`}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {project.link.label}
                    <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
                  </a>
                )}
              </article>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};