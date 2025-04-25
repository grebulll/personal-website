import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TiltCard from '../../TiltCard';
import { timelineEvents } from '../../constants/TimelineEvents';

export const JourneySection = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!journeyRef.current) return;
    const elements = journeyRef.current.querySelectorAll('.journey-step');

    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        element,
        { x: direction, opacity: 0 },
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
  );
};
