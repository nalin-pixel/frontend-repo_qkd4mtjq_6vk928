import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative container mx-auto h-full px-6 flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs tracking-wide uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Rusdy Ilham • JavaScript Full‑stack Developer
          </motion.span>

          <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">
            Innovative storytelling through code and delightful experiences
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            I craft interactive, performant web apps where narrative meets technology — from
            immersive frontends to scalable backends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium shadow hover:shadow-lg transition">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
