import { AboutTitleCard } from '../molecules/AboutTiltCard';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative z-10 bg-salt-white"
    >
      <div className="container py-20">
        <AboutTitleCard />
      </div>
    </section>
  );
};
