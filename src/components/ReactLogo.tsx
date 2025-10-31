import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

function ReactLogo(props:any) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1}>
    <group {...props} dispose={null}>
      <group scale={0.01}>
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