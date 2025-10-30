import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const Target = (props:any) => {
  const targetRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );


  // ✅ Floating animation
  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 1,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  });

  return (
    <mesh ref={targetRef} {...props} rotate={[0,Math.PI/2,0]} >
      <primitive object={scene} />
      </mesh>
  );
};

export default Target;