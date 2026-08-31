import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../../TiltCard';
import { timelineEvents } from '../../constants/TimelineEvents';

gsap.registerPlugin(ScrollTrigger);

export const JourneySection = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!journeyRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('.journey-step')
        .forEach((element, index) => {
          gsap.fromTo(
            element,
            { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: journeyRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        }
      );
    }, journeyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-10">
      <h3 className="text-3xl font-medium mb-4">My Journey</h3>

      <div
        ref={journeyRef}
        className="relative flex flex-col items-center justify-center"
      >
        <div
          ref={lineRef}
          aria-hidden="true"
          className="hidden md:block absolute w-1 top-0 left-1/2 -translate-x-1/2 origin-top z-0 rounded-full bg-gunmetal-black dark:bg-mint-green"
        />

        {timelineEvents.map((event, index) => (
          <div
            key={`${event.year}-${event.title}`}
            className="journey-step relative z-10 not-last:mb-12 w-full"
          >
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
              }`}
            >
              <TiltCard className={`md:w-80 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <div className="p-6 rounded-xl shadow-lg transition-all flex flex-col bg-gunmetal-black dark:bg-salt-white text-salt-white dark:text-gunmetal-black hover:bg-mint-green hover:text-gunmetal-black dark:hover:bg-mint-green dark:hover:text-gunmetal-black">
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
  );
};