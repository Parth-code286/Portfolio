import { useGLTF } from "@react-three/drei";

const HackerRoom = (props: any) => {
  const { scene } = useGLTF("/models/hacker-room.glb");
  
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;