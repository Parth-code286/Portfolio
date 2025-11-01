import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Clock } from "lucide-react";

export const itemVariants = (isLeft) => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
});

const TimelineCard = ({ company, role, duration, description, index }) => {
  const isLeft = index % 2 === 0;

  // Use a dedicated GraduationCap icon for Education context
  const icon = <GraduationCap className="w-5 h-5 text-neutral-400" />;

  return (
    <motion.div
      className={`mb-12 flex justify-between items-center w-full ${
        isLeft ? "flex-row-reverse" : "flex-row"
      }`}
      variants={itemVariants(isLeft)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Card */}
      <motion.div
        whileHover={{
          y: -8, // Slight lift effect
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)", // Deep shadow
          backgroundColor: "#181818", // Slightly lighter on hover
          transition: { type: "spring", stiffness: 180, damping: 16 },
        }}
        className={`w-full md:w-5/12 p-6 rounded-2xl transition-all duration-300 ease-in-out
        ${isLeft ? "md:mr-10" : "md:ml-10"}
        bg-neutral-950 border border-neutral-800 relative group overflow-hidden`}
      >
        {/* Subtle top border accent on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <h3 className="text-xl text-gray-100 font-bold mb-1 tracking-tight">{role}</h3>
        <p className="text-neutral-400 text-md mb-3 font-medium">{company}</p>
        
        <div className="flex items-center text-sm text-neutral-500 mb-4">
            <Clock className="w-4 h-4 mr-2" />
            <span className="font-mono text-neutral-600">{duration}</span>
        </div>
        
        {/* Description line separator */}
        <p className="text-neutral-300 mt-3 text-base leading-relaxed pl-2 border-l border-neutral-700">
            {description}
        </p>

      </motion.div>

      {/* Marker Circle - Premium Look */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 z-10 
                      ring-4 ring-neutral-800 shadow-xl shadow-black/60 transition-transform duration-300 
                      group-hover:scale-[1.15] group-hover:bg-neutral-800">
        <GraduationCap className="w-6 h-6 text-neutral-500" />
      </div>

      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default TimelineCard;
