import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuIcon from "../../public/assets/menu.svg";
import closeIcon from "../../public/assets/close.svg";
import { navLinks } from "../context/index";

const NavItems = () => {
  return (
    <ul className="flex space-x-6 text-neutral-400 font-medium">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a
            href={href}
            className="hover:text-white transition-colors duration-200"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-6">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Parth
          </a>

          <nav className="hidden md:flex">
            <NavItems />
          </nav>

          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <img
                  src={isOpen ? closeIcon : menuIcon}
                  alt={isOpen ? "Close menu" : "Open menu"}
                  className="w-6 h-6 cursor-pointer transition-transform hover:scale-110"
                />
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 py-4 border-t border-neutral-800"
            >
              <ul className="flex flex-col items-center space-y-4 text-neutral-400 font-medium">
                {navLinks.map(({ id, href, name }) => (
                  <li key={id}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;