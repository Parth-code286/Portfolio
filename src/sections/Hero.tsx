import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { useMediaQuery } from "@react-hook/media-query";
import HackerCamera from "../components/HackerCamera";
import Button from "../components/Button";
import { calculateSizes } from "../context";

const Hero = () => {
  // ✅ Responsive breakpoints
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isLaptop = useMediaQuery("(min-width: 1025px) and (max-width: 1440px)");
  const isDesktop = useMediaQuery("(min-width: 1441px)");

  // ✅ HackerRoom scaling and positioning (shifted left)
  const scale = isMobile ? 0.05 : isTablet ? 0.07 : isLaptop ? 0.09 : 0.09;
  const sizes = calculateSizes(isLaptop, isMobile, isTablet);
  const position: [number, number, number] = isMobile
    ? [0.5, 3, 0]  // shifted further left
    : isTablet
    ? [0, -0.8, 0]     // shifted further left
    : isLaptop
    ? [-1.5, -0.7, 0]  // shifted further left
    : [-3, 1, 0];      // shifted further left for desktop

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black" id="home">
      {/* ✅ Heading Section */}
      <div className="relative z-10 w-full mx-auto flex flex-col sm:pt-36 pt-20 items-center gap-4">
        <h2 className="sm:text-4xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Parth <span className="waving-hand">👋</span>
        </h2>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 sm:text-6xl text-4xl font-extrabold tracking-tight px-4 text-center">
          Building Products & Brands
        </h1>
      </div>

      {/* ✅ Canvas Section */}
      <div className="relative w-screen h-screen z-0 overflow-visible">
        <Canvas
          shadows
          className="w-full h-full"
          camera={{ position: [0, 4, 18], fov: 60, near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 4, 18]}
              fov={60}
              near={0.1}
              far={1000}
            />

            <HackerCamera
              isMobile={isMobile}
              isTablet={isTablet}
              isLaptop={isLaptop}
              isDesktop={isDesktop}
            >
              <HackerRoom
                scale={[scale, scale, scale]}
                position={position}
                rotation={[0.3, 3.1, 0.0]}
              />
            </HackerCamera>


            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 flex justify-center py-12">
        <a href="#about">
          <Button
            name="Let's work together"
            containerClass="sm:w-auto w-[250px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;