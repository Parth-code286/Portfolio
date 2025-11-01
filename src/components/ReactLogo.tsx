import { Float, useGLTF } from '@react-three/drei'
import type { Object3D } from 'three'

interface GLTFResult {
  nodes: {
    [key: string]: Object3D & {
      geometry: any;
      material?: any;
    };
  };
  materials: {
    [key: string]: any;
  };
}

interface ReactLogoProps {
  [key: string]: any;
}

function ReactLogo(props: ReactLogoProps) {
  const { nodes, materials } = useGLTF('/models/react.glb') as unknown as GLTFResult
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1}>
    <group {...props} dispose={null}>
      <group scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo