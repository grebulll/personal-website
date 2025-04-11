import { useState, useEffect, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

function AvatarModel() {
  const { scene } = useGLTF('../floating_island.glb');
  return <primitive object={scene} scale={0.018} />;
}

export const AvatarModelScene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!isLoading && modelRef.current) {
      gsap.fromTo(
        modelRef.current.scale,
        { x: 0.1, y: 0.1, z: 0.1 },
        { x: 1, y: 1, z: 1, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, [isLoading]);

  return (
    <div
      className="relative flex flex-col w-full h-[390px] md:w-1/2 hover:scale-105 hover:cursor-pointer transition-all duration-500 z-20"
      style={{ opacity: isLoading ? 0 : 1 }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center z-30 bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-white"></div>
        </div>
      )}
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="relative z-20"
        onCreated={() => setIsLoading(false)}
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
  );
};
