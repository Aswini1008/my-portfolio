import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeScene = () => {
  return (
    <Canvas style={{ height: '100vh', position: 'absolute', zIndex: 0 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
