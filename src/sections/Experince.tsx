import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../context";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

// Component to render individual skill tags (maintaining the dark/grey color scheme)
const SkillTag = ({ skillName }: { skillName: string }) => (
  <div
    className="px-3 py-1 text-xs font-medium text-gray-400 bg-zinc-900 border border-zinc-700 rounded-full transition-all duration-200 
               hover:bg-zinc-700 hover:text-white cursor-default"
  >
    {skillName.trim()}
  </div>
);

const Experience = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
    <h3 className="head-text">My Skills</h3>
    <section
      id="skills"
      // Increased gap and added vertical padding for larger layout
      className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center gap-10 md:gap-14 px-4 md:px-12 py-10"
    >
      {/* 3D Model Section - Increased height */}
      <div className="w-full md:w-1/2 h-[450px] md:h-[650px] bg-transparent">
        <Canvas>
          <ambientLight intensity={20} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls enableZoom={false} enablePan={true} enableRotate maxPolarAngle={Math.PI/2} />
          <Suspense fallback={<CanvasLoader/>}>
          <Developer position={[0, -3, 0]} scale={2.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-8"> {/* Increased gap between cards */}
        {workExperiences.map(({ id, name, pos, duration, title, icon }) => {
            // Determine if the entry is a Skill Category (IDs 1-3 from your previous data structure)
            const isSkillCategory = id <= 4;
            const skillTags = isSkillCategory ? title.split(',').map(s => s.trim()) : [];
            
            return (
                <div
                    key={id}
                    onClick={() => setSelected(selected === id ? null : id)}
                    // Increased size: p-6 padding, rounded-3xl, and slightly higher scale/shadow on hover/select
                    className={`group cursor-pointer p-6 rounded-3xl transition-all duration-300 border border-zinc-800 bg-[#111111] hover:bg-[#1c1c1c] hover:border-zinc-700 hover:shadow-xl ${
                    selected === id ? "scale-[1.03] shadow-2xl border-zinc-600 bg-[#1c1c1c]" : ""
                    }`}
                >
                    <div className="flex items-center gap-5"> {/* Increased gap */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#222]"> {/* Larger icon background */}
                        <img src={icon} alt={name} className="w-8 h-8 object-contain" /> {/* Larger icon */}
                    </div>
                    <div>
                        <p className="text-white font-semibold text-xl">{name}</p> {/* Larger text */}
                        <p className="text-gray-400 text-base"> {/* Larger text */}
                        {pos} | <span className="text-gray-500">{duration}</span>
                        </p>
                    </div>
                    </div>
                    
                    {isSkillCategory ? (
                    // Display individual skill tags for the skill categories
                    <div className="flex flex-wrap gap-2 mt-4">
                        {skillTags.map((skill, index) => (
                        <SkillTag key={index} skillName={skill} />
                        ))}
                    </div>
                    ) : (
                    // Display the original title for work experience entries
                    <p className="text-gray-300 mt-4 text-base leading-relaxed"> {/* Larger text and margin */}
                        {title}
                    </p>
                    )}
                </div>
            );
        })}
      </div>
    </section>
    </>
  );
};

export default Experience;