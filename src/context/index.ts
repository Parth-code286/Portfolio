export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Internships", href: "#internships" },
  { id: 6, name: "Education", href: "#educations" },
  { id: 7, name: "Contact", href: "#contact" },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Expense Tracker - Financial Management Web App",
    desc: "Expense Tracker is a powerful web application designed to help users manage and visualize their personal finances efficiently. It allows users to track income and expenses, categorize transactions, and view insightful data through interactive charts.",
    subdesc:
      "Built with React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, and Recharts, it offers a secure and responsive financial management experience for everyday use.",
    href: "#",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/node.svg" },
      { id: 3, name: "Express.js", path: "/assets/express.svg" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/tailwind.svg" },
      { id: 6, name: "JWT", path: "/assets/jwt.svg" },
    ],
  },
  {
    title: "OurFarmer - Farmer Empowerment Portal",
    desc: "OurFarmer is a feature-rich frontend farming portal built to empower farmers with essential tools and insights. It provides weather forecasts, market price updates, AI chatbot assistance, agri-news, multilingual support, and crop health analysis — all integrated through APIs.",
    subdesc:
      "Developed entirely on the frontend using React.js, Tailwind CSS, and API integrations, it demonstrates strong UI engineering, data visualization, and API-handling proficiency while delivering real-time, user-centric information.",
    href: "#",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwind.svg" },
      { id: 3, name: "APIs", path: "/assets/api.svg" },
    ],
  },
  {
    title: "Scatch - Full-Stack E-Commerce Web App",
    desc: "Scatch is a complete full-stack e-commerce platform designed to deliver a seamless shopping experience. It includes product listings, advanced filtering, cart management, discount handling, and secure user authentication.",
    subdesc:
      "Developed using Node.js, Express.js, MongoDB, Mongoose, EJS, Tailwind CSS, and JWT, Scatch combines performance, design, and security for an optimal online store experience.",
    href: "#",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/node.svg" },
      { id: 2, name: "Express.js", path: "/assets/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 5, name: "EJS", path: "/assets/ejs.svg" },
      { id: 6, name: "TailwindCSS", path: "/assets/tailwind.svg" },
      { id: 7, name: "JWT", path: "/assets/jwt.svg" },
    ],
  },
  {
    title: "Todo App - Personal Productivity Tool",
    desc: "I am thrilled to share that I have just created my very own Todo App using React.js 🚀! This app allows users to add, complete, and delete tasks with real-time updates including live date and time display.",
    subdesc:
      "Built using React.js, useState, and useEffect hooks, this project features a responsive UI, task management, and a Clear All button for easy task handling. It's deployed online for accessibility and productivity on the go.",
    href: "#",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwind.svg" },
    ],
  },
];

export const calculateSizes = ({isSmall, isMobile, isTablet}:any) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Frontend Skills",
    pos: "User Interface Development",
    duration: "Client-Side Focus",
    title: "React.js, Next.js, HTML, CSS, JavaScript, Three.js",
    icon: "/assets/frontend.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Backend Skills",
    pos: "Server & API Architecture",
    duration: "Server-Side Focus",
    title: "Node.js, Express.js, NestJS, MongoDB",
    icon: "/assets/backend.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Programming Languages",
    pos: "Core Development Foundation",
    duration: "Core Proficiency",
    title: "JavaScript, TypeScript, Python",
    icon: "/assets/languages.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Tools & Expert Platforms",
    pos: "Development Workflow & Design",
    duration: "Daily Usage",
    title: "Git, GitHub, VS Code, Cursor, Warp, Postman, Figma, Canva",
    icon: "/assets/tools.svg",
    animation: "victory",
  },
];