import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import { Group } from 'three'

interface HackerCameraProps {
  children: React.ReactNode;
  isMobile: boolean;
  isTablet?: boolean;
  isLaptop?: boolean;
  isDesktop?: boolean;
}

const HackerCamera = ({ children, isMobile }: HackerCameraProps) => {
    const groupRef = useRef<Group>(null)
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position , [0,5,15],0.25,delta)

        if(!isMobile && groupRef.current){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/3 , -state.pointer.x/5,0],0.25,delta);
        }
    })
  return (
    <group ref={groupRef} scale={1} >{children}</group>
  )
}

export default HackerCamera