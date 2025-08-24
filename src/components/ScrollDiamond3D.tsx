import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

const RotatingScrollDiamond = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotacija bazirana na scroll poziciji
      meshRef.current.rotation.y = scrollY * 0.01; // Horizontalna rotacija
      meshRef.current.rotation.x = scrollY * 0.005; // Blaga vertikalna rotacija
      meshRef.current.rotation.z = Math.sin(scrollY * 0.003) * 0.1; // Blago ljuljanje
      
      // Blago floating pomeranje nezavisno od scroll-a
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      {/* Octahedron geometrija za dijamant oblik */}
      <octahedronGeometry args={[2, 1]} />
      <meshPhysicalMaterial 
        color="#ffffff"
        transparent
        opacity={0.15}
        transmission={0.9}
        thickness={0.5}
        roughness={0.1}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1}
        ior={2.4} // Index of refraction za dijamant
      />
    </mesh>
  );
};

const ScrollDiamond3D = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed left-8 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 z-10 pointer-events-none"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: 0.5, 
        duration: 1.2, 
        ease: [0.68, -0.55, 0.265, 1.55] 
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambijentalno svetlo */}
        <ambientLight intensity={0.3} />
        
        {/* Glavno direkciono svetlo */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
        />
        
        {/* Bočno svetlo za refleksije */}
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={0.5} 
          color="#ffffff" 
        />
        
        {/* Svetlo odozdo za transparentnost */}
        <pointLight 
          position={[0, -5, 3]} 
          intensity={0.3} 
          color="#e0e7ff" 
        />
        
        {/* Rim light za konture */}
        <spotLight 
          position={[5, 0, 5]} 
          intensity={0.4} 
          angle={0.8} 
          penumbra={0.5}
          color="#ffffff"
        />
        
        <RotatingScrollDiamond scrollY={scrollY} />
      </Canvas>
      
      {/* Dodatni glow efekat iza dijamanta */}
      <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl scale-150 -z-10" />
    </motion.div>
  );
};

export default ScrollDiamond3D;
