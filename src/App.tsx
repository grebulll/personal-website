import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import TiltCard from './TiltCard';
import { useEffect, useState } from 'react';

function AvatarModel() {
  const { scene } = useGLTF('../floating_island.glb');
  return <primitive object={scene} scale={0.02} position={[0, -0.5, 0]} />;
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 hidden'
      }`}
      onClick={handleScrollToAbout}
    >
      <div className="animate-bounce flex flex-col items-center cursor-pointer">
        <svg
          className="w-6 h-6 text-mint-green"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-salt-white">
      <div className="min-h-screen justify-center container justify-self-center items-center font-inter text-gunmetal-black flex flex-col">
        <div className="w-1/2 h-72 relative hover:cursor-pointer">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 50 }}
            className="relative z-20"
          >
            <directionalLight
              position={[5, 10, 7]}
              intensity={1.2}
              color="#FFEECC"
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <ambientLight intensity={0.2} />
            <AvatarModel />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.4}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
        <h1 className="text-7xl font-medium py-6">Hi, I'm Gabriel</h1>
        <h2 className="text-xl font-normal pb-6">
          Frontend Developer based in Malta
        </h2>
        <p className="text-lg font-light">
          I build thoughtful interfaces with React and Vue.js
        </p>
      </div>
      <ScrollIndicator />

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container py-20">
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

                <p className="font-medium">
                  &gt; Let's build something together!
                </p>
                <button className="text-gunmetal-black mt-6 font-normal hover:bg-[#F0F1F6] hover:text-[#121726] hover:cursor-pointer transition duration-300 px-6 py-3 rounded-xl shadow-md">
                  <p className="text-lg font-light">Contact</p>
                </button>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>
    </div>
  );
}

export default App;
