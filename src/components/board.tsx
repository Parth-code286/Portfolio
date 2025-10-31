import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface GLTFCustom extends THREE.Group {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

function Board(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/board.glb') as unknown as GLTFCustom;
  if (!nodes || !materials) {
    throw new Error('Failed to load GLTF');
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.162}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-3.475, 5.48, 27.298]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_Mat2_0.geometry}
              material={materials['Mat.2']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_Mat3_0.geometry}
              material={materials['Mat.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_Mat1_0.geometry}
              material={materials['Mat.1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_Mat_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/board.glb');

export default Board
