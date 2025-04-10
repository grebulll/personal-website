import { AboutTitleCard } from '../molecules/AboutTiltCard';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex relative z-10 justify-center"
    >
      <div className="py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="relative">
            <AboutTitleCard />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-medium text-gunmetal-black">
            My Journey
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-3 h-3 bg-neon-blue rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium">Frontend Specialist</h3>
                <p className="text-gray-600">
                  3+ years building responsive web applications with modern
                  frameworks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-3 h-3 bg-neon-blue rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium">UI/UX Focused</h3>
                <p className="text-gray-600">
                  Passionate about creating intuitive interfaces with attention
                  to detail
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-3 h-3 bg-neon-blue rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-medium">Problem Solver</h3>
                <p className="text-gray-600">
                  Enjoy tackling complex challenges with clean, maintainable
                  solutions
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="px-6 py-3 bg-gunmetal-black text-white rounded-lg hover:bg-opacity-90 transition">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
