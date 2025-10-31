import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { useMediaQuery } from "@react-hook/media-query";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Board from "../components/board";

const Hero = () => {
  // ✅ Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isLaptop = useMediaQuery("(min-width: 1025px) and (max-width: 1440px)");
  const isDesktop = useMediaQuery("(min-width: 1441px)");

  // ✅ HackerRoom scaling and positioning (you already had this)
  const scale = isMobile ? 0.05 : isTablet ? 0.07 : isLaptop ? 0.07 : 0.07;
  const position: [number, number, number] = isMobile
    ? [0.5, -1.8, 0]
    : isTablet
    ? [0.8, -1.7, 0]
    : isLaptop
    ? [1.0, -1.6, 0]
    : [1.0, -1.6, 0];

//   // ✅ Responsive Target positioning (balanced for each screen)
//   // ✅ Responsive Target positioning (balanced for each screen)
// const targetPosition: [number, number, number] = isMobile
// ? [-0.6, -2.3, 0] // mobile
// : isTablet
// ? [-0.8, -2.0, 0] // tablet
// : isLaptop
// ? [-1.2, -1.8, 0] // laptop
// : [-10, -1.7, 0]; // 💥 desktop → extreme left
//   // ✅ Optional responsive Target scale (for proportion)
//   const targetScale = isMobile ? 0.5 : isTablet ? 0.7 : isLaptop ? 0.8 : 1.0;

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto flex flex-col sm:pt-36 pt-20 items-center gap-4">
        <h2 className="sm:text-4xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Parth <span className="waving-hand">👋</span>
        </h2>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 sm:text-6xl text-4xl font-extrabold tracking-tight px-4 text-center">
          Building Products & Brands
        </h1>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas
          shadows
          className="w-full h-full"
          camera={{ position: [0, 5, 15], fov: 50 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 5, 15]} />

            <HackerRoom
              scale={[scale, scale, scale]}
              position={position}
              rotation={[0.3, 3.1, 0.0]}
            />

<group>
  {/* 🟣 Target: bottom-left */}
  <Target
    position={[-9, -1.5, 0]}
    scale={1.2}
    rotation={[0, Math.PI / 4, 0]}
  />

  {/* 🟡 Ring: top-left */}
  <Ring
    position={[-9, 8, 0]}
    scale={[0.75, 0.75, 0.75]}
  />

  <ReactLogo
    position={[9, 8, 0]}
    rotation={[2.6, 0.8, -1.8]}
    scale={[0.41, 0.41, 0.41]}
  />
  <Cube
    position={[9, -0.7, 0]}
    rotation={[2.6, 0.8, -1.8]}
    scale={0.74}
  />
</group>

<ambientLight intensity={1.2} />
<directionalLight position={[10, 10, 5]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;