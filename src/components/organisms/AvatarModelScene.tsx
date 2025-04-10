import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function AvatarModel() {
  const { scene } = useGLTF('../floating_island.glb');
  return <primitive object={scene} scale={0.02} position={[0, -0.5, 0]} />;
}

export const AvatarModelScene = () => {
  return (
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
  );
};
