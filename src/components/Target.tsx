import { Float, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Group } from 'three';

interface TargetProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

const Target: React.FC<TargetProps> = (props) => {
  const targetRef = useRef<Group>(null);
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  ) as { scene: Group };

  useGSAP(() => {
    if (!targetRef.current) return;
    
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <Float floatIntensity={2} speed={2}>
    <group {...props} ref={targetRef}>
      <primitive object={scene} />
    </group>
    </Float>
  );
};

export default Target;