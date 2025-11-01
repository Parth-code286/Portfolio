import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Share2,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full px-6 py-12 bg-black text-gray-400 border-t border-neutral-800"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section - Name and Bio */}
        <div className="md:w-1/3">
          <h2 className="text-white text-3xl font-bold mb-3 tracking-tight">
            Parth Nandwalkar
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
            Building creative digital experiences that make a difference. Always learning, always growing, always building.
          </p>
        </div>

        {/* Center Section - Contact Info */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="text-gray-300 font-semibold text-lg mb-4 uppercase tracking-wider">
            Connect
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-sm hover:text-white transition-colors duration-200">
              <Mail className="w-5 h-5 mr-3 text-neutral-600 flex-shrink-0" />
              <a href="mailto:nandwalkarparth1234@gmail.com">
                nandwalkarparth1234@gmail.com
              </a>
            </li>
            <li className="flex items-center text-sm hover:text-white transition-colors duration-200">
              <Phone className="w-5 h-5 mr-3 text-neutral-600 flex-shrink-0" />
              <a href="tel:+918356047367">+91 8356047367</a>
            </li>
            <li className="flex items-center text-sm">
              <MapPin className="w-5 h-5 mr-3 text-neutral-600 flex-shrink-0" />
              <span>Mumbai, Maharashtra</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Icons & Quick Links */}
        <div className="md:w-1/3 flex flex-col items-start md:items-end">
          <div className="flex gap-5 items-center mb-8">
            <a
              href="mailto:nandwalkarparth1234@gmail.com"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linktr.ee/parthNandwalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/parthnandwalkar2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Parth-code286"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.threads.net/@parthnandwalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nandwalkarparth?igsh=bXppMnQxb2VmOXc5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-neutral-700 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex space-x-6 text-sm text-neutral-500 font-medium">
            <a href="#home" className="hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#work" className="hover:text-white transition-colors duration-200">
              Work
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-neutral-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-600">
        <p>© {new Date().getFullYear()} Parth Nandwalkar. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Crafted with <span className="text-red-500">🖤</span> and code 💻
        </p>
      </div>
    </motion.footer>
  );
};

const Footers = () => (
  <div className="bg-black text-white font-sans antialiased">
    <Footer />
  </div>
);

export default Footers;