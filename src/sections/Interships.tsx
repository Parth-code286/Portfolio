import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, Wallet } from "lucide-react";

// --- DATA ---
const internshipsData = [
  {
    company: "INCOIS",
    role: "Software Developer Intern",
    duration: "August 2025 - Present",
    type: "Paid Internship",
    description:
      "Engineered API integrations, developed high-performance dashboards, and optimized real-time data visualization pipelines for core services.",
  },
  {
    company: "Adarsh Playschool",
    role: "Google Business Creator",
    duration: "April 2025 - July 2025",
    type: "Paid Internship",
    description:
      "Mastered React.js and modern state management. Focused on modular architecture and utility-first styling with Tailwind CSS.",
  },
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

// --- CARD COMPONENT ---
const PremiumTechCard = ({ company, role, duration, type, description }:any) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
        backgroundColor: "#1C1C1C",
        transition: { type: "spring", stiffness: 180, damping: 16 },
      }}
      className="w-full max-w-3xl mx-auto p-8 bg-neutral-950 border border-neutral-800 rounded-2xl 
                 overflow-hidden cursor-pointer transition-all duration-300 relative group flex flex-col justify-between"
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neutral-700 transition-colors duration-300 pointer-events-none"></div>

      <div>
        <div className="flex items-start space-x-4 mb-4">
          <BriefcaseBusiness className="text-neutral-500 w-7 h-7 flex-shrink-0 mt-1" />
          <h3 className="text-2xl font-bold text-gray-100 tracking-tight leading-tight">
            {company}
          </h3>
        </div>

        <p className="text-lg font-semibold text-neutral-400 mb-3 ml-11 -mt-1">
          {role}
        </p>

        <div className="flex items-center text-sm text-neutral-500 mb-3 ml-11">
          <CalendarDays className="w-5 h-5 mr-2" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center text-sm text-neutral-500 mb-5 ml-11">
          <Wallet className="w-5 h-5 mr-2" />
          <span className={`${type.includes("Paid") ? "text-green-500" : "text-red-500"}`}>
            {type}
          </span>
        </div>

        <p className="text-neutral-300 leading-relaxed text-base pl-2 border-l border-neutral-700 ml-11">
          {description}
        </p>
      </div>

      {/* Glow accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-neutral-800 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Internships = () => {
  return (
    <section
      id="internships"
      className="min-h-screen py-28 max-w-[1400px] mx-auto px-6 bg-black"
    >
      <motion.h2
        className="text-6xl font-extrabold text-center mb-20 text-gray-50 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
      <motion.h3>
        <h3 className="head-text">Internships</h3>
    </motion.h3>
      </motion.h2>

      <motion.div
        className="flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {internshipsData.map((intern, i) => (
          <PremiumTechCard key={i} {...intern} />
        ))}
      </motion.div>
    </section>
  );
};

export default Internships;