import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CubeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

// Define the type for the GLTF nodes
interface GLTFApi {
  nodes: {
    [key: string]: THREE.Mesh;
  };
}

const Cube: React.FC<CubeProps> = (props) => {
  const { nodes } = useGLTF('/models/cube.glb') as unknown as GLTFApi;
  const cubeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Try to load texture with fallback
  let texture: THREE.Texture | null = null;
  try {
    // Try with the correct path first
    texture = useTexture('/src/textures/cube.png');
    console.log('Texture loaded successfully');
  } catch (err) {
    console.error('Error loading texture, using fallback material');
    // Fallback to a basic material if texture fails to load
    return (
      <Float floatIntensity={2}>
        <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} {...props}>
          <mesh
            ref={cubeRef}
            castShadow
            receiveShadow
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </group>
      </Float>
    );
  }

  useGSAP(() => {
    if (!cubeRef.current) return;
    
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube?.geometry}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          {texture ? (
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          ) : (
            <meshStandardMaterial color="hotpink" />
          )}
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('/models/cube.glb');

export default Cube