import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Diamond = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (meshRef.current) {
        const scrollY = window.scrollY;
        meshRef.current.rotation.y = scrollY * 0.005;
        meshRef.current.rotation.x = scrollY * 0.002;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhongMaterial 
        color="#FFD700" 
        shininess={100}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const Diamond3D = () => {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Diamond />
      </Canvas>
    </div>
  );
};

export default Diamond3D;