import React, { Suspense, useState } from "react";
import { myProjects } from "../context";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "../components/DemoComputer";

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;
  const project = myProjects[selectedProjectIndex];

  const handleNavigation = (direction: "previous" | "next") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space mt-4 mb-8" id="projects">
      <p className="head-text mb-2">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full items-start">
        {/* 🔹 Left Section — Project Card */}
        <div className="relative group overflow-hidden pt-19 rounded-2xl shadow-2xl shadow-black/30 hover:shadow-primary/20 transition-all duration-300">
          <div className="relative p-6 bg-gradient-to-b pt-7 from-black/80 to-black">
            <div className="flex items-center gap-4 mb-3">
              <div
                className="p-3 backdrop-blur-2xl rounded-xl border border-white/10 shadow-lg"
                style={project.logoStyle}
              ></div>
              {/* ⬇️ Shifted title slightly left */}
              <h3 className="text-2xl font-bold text-white ml-[-20px]">{project.title}</h3>
            </div>

            <p className="text-gray-300 mb-4">{project.desc}</p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              {project.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                className="text-white/80 hover:text-white text-2xl px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                onClick={() => handleNavigation("previous")}
              >
                ←
              </button>
              <button
                className="text-white/80 hover:text-white text-2xl px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                onClick={() => handleNavigation("next")}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Right Section — Canvas */}
        <div className="border border-black-300 rounded-lg h-[400px] md:h-[480px] flex items-center justify-center">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} intensity={7} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={10} position={[-0.6, 1, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer />
                </group>
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;