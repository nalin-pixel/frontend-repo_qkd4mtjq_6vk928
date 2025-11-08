import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between text-white">
        <motion.a
          href="#home"
          className="font-semibold tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Rusdy Ilham
        </motion.a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white/70 transition">About</a>
          <a href="#projects" className="hover:text-white/70 transition">Projects</a>
          <a href="#contact" className="hover:text-white/70 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
