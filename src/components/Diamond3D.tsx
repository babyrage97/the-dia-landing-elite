import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

const RotatingDiamond = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation with time-based animation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshPhongMaterial 
        color="#FFD700" 
        shininess={100}
        transparent
        opacity={0.85}
        emissive="#FFD700"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const Diamond3D = () => {
  return (
    <motion.div 
      className="w-24 h-24 md:w-32 md:h-32"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 0.2, 
        duration: 1, 
        ease: [0.68, -0.55, 0.265, 1.55],
        scale: { type: "spring", damping: 15 }
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#FFD700" />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.5} 
          angle={0.6} 
          penumbra={0.1}
          color="#FFFFFF"
        />
        <RotatingDiamond />
      </Canvas>
    </motion.div>
  );
};

export default Diamond3D;