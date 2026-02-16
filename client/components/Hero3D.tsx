import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Logo3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          font="https://fonts.gstatic.com/s/notoseriftelugu/v25/XLY3jzu-K_Y5A1o9h6J_m7S_XLY3jzu-K_Y5A1o9h6J_m7S.woff"
          fontSize={1.5}
          color="#2C3E50"
          position={[0, 0, 0]}
          maxWidth={10}
          textAlign="center"
        >
          స-kala
        </Text>
      </Float>

      <Sphere args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#D7BDE2"
          speed={3}
          distort={0.4}
          radius={1}
          opacity={0.15}
          transparent
        />
      </Sphere>

      <Sphere args={[1, 64, 64]} scale={3.5} position={[2, -1, -2]}>
        <MeshDistortMaterial
          color="#AED6F1"
          speed={2}
          distort={0.3}
          radius={1}
          opacity={0.1}
          transparent
        />
      </Sphere>
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#D7BDE2" />
        <Logo3D />
      </Canvas>
    </div>
  );
};
