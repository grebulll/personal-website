import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('../floating_island.glb');
  return <primitive object={scene} scale={0.02} position={[0, -0.5, 0]} />;
}

function App() {
  return (
    <div className="items-center min-h-screen bg-dark-blue font-inter text-[#F0F1F6] flex flex-col p-10">
      <div className="relative z-0 container">
        <div className="lg:bg-[radial-gradient(circle_at_73%_50%,_rgba(97,98,154,1)_1%,_rgba(62,70,111,0.4)_5%,_rgba(17,24,38,0.9)_20%)] bg-[radial-gradient(circle_at_70%_50%,_rgba(97,98,154,0.3)_0%,_rgba(62,70,111,0.3)_25%,_rgba(17,24,38,1)_40%)] bg-charcoal shadow-lg shadow-[#121726]/30 mb-6 py-16 px-14 rounded-2xl flex items-center justify-between opacity-0 animate-fadeIn">
          <div className="space-y-6 w-1/2 z-10">
            <h1 className="text-lavender text-4xl font-bold leading-snug">
              Hi, I'm Gabriel
            </h1>
            <h3 className="text-off-white text-xl">
              - Frontend Developer based in Malta
            </h3>
            <p className="text-off-white font-extralight">
              I build thoughtful interfaces with{' '}
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
                autoRotateSpeed={2}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
