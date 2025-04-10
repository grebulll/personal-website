import { ScrollIndicator } from '../atoms/ScrollIndicator';
import { AvatarModelScene } from '../organisms/AvatarModelScene';

export const HeroSection = () => {
  return (
    <div className="flex flex-row min-h-screen justify-center container justify-self-center items-center font-inter text-gunmetal-black relative z-10">
      <div className="flex flex-col">
        <h1 className="text-7xl font-medium py-6">Hi, I'm Gabriel</h1>
        <h2 className="text-xl font-normal pb-6">
          Frontend Developer based in Malta
        </h2>
        <p className="text-lg font-light">
          I build thoughtful interfaces with React and Vue.js
        </p>
      </div>
      <div className="w-4/12 h-72 relative hover:cursor-pointer transition-all duration-500">
        <AvatarModelScene />
      </div>
      <ScrollIndicator />
    </div>
  );
};
