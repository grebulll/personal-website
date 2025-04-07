import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import TiltCard from './TiltCard';

function AvatarModel() {
  const { scene } = useGLTF('../floating_island.glb');
  return <primitive object={scene} scale={0.02} position={[0, -0.5, 0]} />;
}

function App() {
  return (
    <div className="items-center min-h-screen bg-dark-blue font-inter text-[#F0F1F6] flex flex-col p-10">
      <div className="relative z-0 lg:container">
        <div
          className="bg-[radial-gradient(circle_at_73%_50%,_rgba(150,140,255,0.5)_0%,_rgba(70,80,130,0.3)_7%,_rgba(18,23,38,1)_30%)]
  bg-charcoal shadow-lg shadow-[#121726]/30 mb-6 py-16 px-14 rounded-2xl flex items-center justify-between opacity-0 animate-fadeIn"
        >
          <div className="space-y-6 w-1/2 z-10">
            <h1 className="text-lavender text-4xl font-bold leading-snug">
              Hi, I'm Gabriel
            </h1>
            <h3 className="text-off-white text-xl">
              - Frontend Developer based in Malta
            </h3>
            <p className="text-off-white font-extralight">
              Building performant UIs with{' '}
              <span className="text-lavender font-medium">React</span> and{' '}
              <span className="text-lavender font-medium">Vue</span>.
            </p>
            <button className="bg-dark-blue font-normal text-off-white hover:bg-[#F0F1F6] hover:text-[#121726] hover:cursor-pointer transition duration-300 px-6 py-3 rounded-xl shadow-md">
              <p className="text-lg">View Projects</p>
            </button>
          </div>

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
        </div>

        <div className="bg-charcoal shadow-lg shadow-[#121726]/30 py-16 px-14 rounded-2xl opacity-0 animate-fadeIn animation-delay-200">
          <div className="space-y-6">
            <h2 className="text-lavender text-3xl font-medium leading-snug">
              About
            </h2>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <div className="bg-[#171d2f] p-6 rounded-2xl space-y-4">
                  <p className="font-light">
                    &gt; 3 years experience as a Full-time Frontend Developer
                  </p>
                  <p className="font-light">
                    &gt; I love clean code, scalable components, and UI/UX
                  </p>
                  <p className="font-light">
                    &gt; Tech Stack: React, Vue.js, Tailwind, Nuxt, Redux and
                    Expo
                  </p>
                </div>

                <p className="font-light pt-4">
                  Current Status: Open to work in Malta or remote
                </p>
              </div>

              <div className="col-span-6">
                <TiltCard>
                  <div className="bg-dark-blue text-white rounded-xl p-3 shadow-2xl">
                    <div className="bg-[#161a2c] py-4 rounded-t-xl rounded-b-xl">
                      <div className="flex items-center space-x-2 pb-4 px-4 border-b border-[#1d2233]">
                        <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-[#161a2c] px-4 rounded-b-2xl p-2">
                        <h3 className="text-xl font-extralight">
                          Let's build something together!
                        </h3>
                        <button className="bg-dark-blue text-white mt-6 font-normal hover:bg-[#F0F1F6] hover:text-[#121726] hover:cursor-pointer transition duration-300 px-6 py-3 rounded-xl shadow-md">
                          <p className="text-lg font-light">Contact</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
