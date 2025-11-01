import React, { useRef } from "react";
import { Sphere, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SkillSphere = () => {
  const sphereRef = useRef<any>();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={sphereRef}>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 1.5, Math.cos(i) * 1.5, 0]}>
          <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial color="#61dafb" />
          </Sphere>
        </mesh>
      ))}
    </group>
  );
};

export default SkillSphere;