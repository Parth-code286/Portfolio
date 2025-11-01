import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GraduationCap, Clock } from "lucide-react";

// --- Data ---
const educationData = [
  {
    company: "Datta Meghe College of Engineering",
    role: "B.E. Computer Engineering",
    duration: "2023 – 2027",
    description:
      "Pursuing a Bachelor's degree with a strong emphasis on Blockchain, Full-Stack Web Development, and emerging technologies. Developed major academic projects such as SmartKisan and ApnaVyapar, showcasing innovation and practical implementation.",
    grade: "8.78 CGPA",
  },
  {
    company: "Champions Academy",
    role: "HSC Science",
    duration: "2020 – 2022",
    description:
      "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics. Built a solid analytical foundation and problem-solving mindset through rigorous coursework and project-based learning.",
    grade: "73.5%",
  },
  {
    company: "New Horizon Public School",
    role: "CBSE",
    duration: "2011 – 2021",
    description:
      "Completed primary and secondary education under the CBSE curriculum with distinction. Excelled in academics and extracurriculars while building early interest in computers, logic, and mathematics.",
    grade: "92.4%",
  },
];

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      type: "spring" as const, 
      stiffness: 100 
    },
  },
});

// --- Timeline Card Component ---
const TimelineCard = ({
  company,
  role,
  duration,
  description,
  index,
  grade,
}: {
  company: string;
  role: string;
  duration: string;
  description: string;
  index: number;
  grade?: string;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="mb-12 flex justify-center items-center w-full relative"
      variants={itemVariants(isLeft)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Card container */}
      <div
        className={`flex items-center w-full md:w-1/2 
        ${isLeft ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"} 
        ${isLeft ? "order-1" : "order-2"}`}
      >
        <motion.div
          whileHover={{
            y: -8,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6)",
            backgroundColor: "#181818",
            transition: { type: "spring", stiffness: 180, damping: 16 },
          }}
          className="w-full p-6 rounded-2xl bg-neutral-950 border border-neutral-800 
          relative group overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <h3 className="text-xl text-gray-100 font-bold mb-1 tracking-tight">{role}</h3>
          <p className="text-neutral-400 text-md mb-3 font-medium">{company}</p>

          <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-mono text-neutral-600">{duration}</span>
            </div>

            {grade && (
              <p className="text-sm font-semibold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full shadow-inner border border-emerald-800">
                {grade}
              </p>
            )}
          </div>

          <p className="text-neutral-300 mt-3 text-base leading-relaxed pl-2 border-l border-neutral-700">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Timeline marker */}
      <div className="hidden md:flex w-[80px] h-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 
          ring-4 ring-neutral-800 shadow-xl shadow-black/60 transition-transform duration-300 
          group-hover:scale-[1.15] group-hover:bg-neutral-800"
        >
          <GraduationCap className="w-6 h-6 text-neutral-500" />
        </div>
      </div>

      {/* Mobile marker */}
      <div className="md:hidden absolute left-6 top-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 z-10 
            ring-4 ring-neutral-800 shadow-lg shadow-black/60">
          <GraduationCap className="w-5 h-5 text-neutral-500" />
        </div>
      </div>

      {/* Alignment spacer */}
      <div className={`hidden md:block w-1/2 ${isLeft ? "order-2" : "order-1"}`}></div>
    </motion.div>
  );
};

// --- Main Education Component ---
const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-28 max-w-[1400px] mx-auto px-6 bg-black"
    >
      <motion.h3
        className="head-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Academic Journey
      </motion.h3>

      <motion.div
        className="relative wrap overflow-hidden p-10 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="absolute border-l-4 border-neutral-900 left-1/2 transform -translate-x-1/2 h-full hidden md:block" />
        <div className="absolute border-l-4 border-neutral-900 left-6 h-full md:hidden" />

        {educationData.map((edu, i) => (
          <TimelineCard key={i} {...edu} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

const EducationSection = () => (
  <section id="educations"> 
  <div className="min-h-screen bg-black text-white font-sans antialiased">
    <Education />
  </div>
  </section>
);

export default EducationSection;