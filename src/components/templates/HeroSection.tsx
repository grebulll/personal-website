import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { AvatarModelScene } from '../organisms/AvatarModelScene';

export const HeroSection = () => {
  return (
    <div className="w-full content-center min-h-screen relative z-10 transition-background duration-300 ease-out">
      <div className="justify-self-center flex flex-row font-inter text-gunmetal-black items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gunmetal-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="flex flex-col z-20 w-full md:w-1/2 h-full">
          <h1 className="text-4xl md:text-7xl font-medium pb-4 animate-fadeInUp relative group">
            Hi, I'm{' '}
            <span className="text-gunmetal-black cursor-pointer">
              Gabriel
              <span className="absolute transform left-1/2 -translate-x-1/2 text-center bottom-full mb-3 p-3 bg-neon-blue text-salt-white text-sm font-light rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-4 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 ease-in-out">
                They call me Bull sometimes
              </span>
            </span>
          </h1>
          <h2 className="text-lg md:text-xl font-medium pb-4">
            Frontend Developer based in Malta
          </h2>
          <p className="text-base md:text-lg font-light mb-4">
            I build thoughtful interfaces with React and Vue.js
          </p>
          <p className="text-base md:text-lg font-light mb-6">
            With 3 years of experience crafting digital experiences, I
            specialize in building responsive, accessible web applications that
            users love.
          </p>

          <div className="flex gap-2 justify-center">
            <button className="px-6 py-3 bg-gunmetal-black text-salt-white rounded-lg hover:bg-mint-green hover:cursor-pointer hover:text-gunmetal-black transition">
              Contact me
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full h-[390px] md:w-1/2 hover:scale-105 hover:cursor-pointer transition-all duration-500 z-20">
          <AvatarModelScene />
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};
