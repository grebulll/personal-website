import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { AvatarModelScene } from '../organisms/AvatarModelScene';

export const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row min-h-screen justify-center container justify-self-center items-center font-inter text-gunmetal-black relative z-10 transition-background duration-300 ease-out">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gunmetal-black rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="flex flex-col z-20">
          <h1 className="text-7xl font-medium pb-6 animate-fadeInUp">
            Hi, I'm Gabriel
          </h1>
          <h2 className="text-xl font-medium pb-6">
            Frontend Developer based in Malta
          </h2>
          <p className="text-lg font-light max-w-lg mb-8">
            I build thoughtful interfaces with React and Vue.js
          </p>
          <p className="text-lg font-light max-w-lg mb-8">
            With 3 years of experience crafting digital experiences, I
            specialize in building responsive, accessible web applications that
            users love.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gunmetal-black text-white rounded-lg hover:bg-mint-green hover:cursor-pointer hover:text-gunmetal-black transition">
              Contact me
            </button>
          </div>
        </div>

        <div className="w-4/12 h-72 relative hover:scale-105 hover:cursor-pointer transition-all duration-500 z-20">
          <AvatarModelScene />
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
};
