import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 items-center gap-4">
      <h2 className="sm:text-4xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Parth <span className="waving-hand">👋</span>
        </h2>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 sm:text-6xl text-4xl font-extrabold tracking-tight">
          Building Products & Brands
        </h1>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;