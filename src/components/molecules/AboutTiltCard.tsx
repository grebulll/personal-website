import TiltCard from '../../TiltCard';

export const AboutTitleCard = () => {
  return (
    <TiltCard>
      <div className="flex flex-col border-2 rounded-xl overflow-hidden">
        <div className="flex items-center space-x-2 py-4 px-4 border-b bg-gunmetal-black border-[#1d2233]">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-salt-white px-4 p-2 rounded-b-xl space-y-4">
          <p className="font-light">
            &gt; 3 years experience as a Full-time Frontend Developer
          </p>
          <p className="font-light">
            &gt; I love clean code, scalable components, and UI/UX
          </p>
          <p className="font-light">
            &gt; Tech Stack: React, Vue.js, Tailwind, Nuxt, Redux and Expo
          </p>

          <p className="font-medium">&gt; Let's build something together!</p>
          <button className="text-gunmetal-black mt-6 font-normal hover:bg-[#F0F1F6] hover:text-[#121726] hover:cursor-pointer transition duration-300 px-6 py-3 rounded-xl shadow-md">
            <p className="text-lg font-light">Contact</p>
          </button>
        </div>
      </div>
    </TiltCard>
  );
};
