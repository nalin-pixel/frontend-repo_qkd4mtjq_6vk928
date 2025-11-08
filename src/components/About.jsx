import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  const items = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Full‑stack JavaScript',
      text: 'Building with React, Node.js, and modern tooling. Clean architecture, type‑safe APIs, and DX focused.'
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Performance & Scale',
      text: 'Crafting fast UIs and resilient backends. From micro‑interactions to robust cloud deployments.'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Story‑Driven UX',
      text: 'Designing flows that tell a story. Motion as meaning, not decoration — smooth, purposeful animations.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Rusdy
        </motion.h2>
        <motion.p
          className="mt-4 max-w-3xl text-white/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m a JavaScript developer who treats products like narratives — every screen, component, and endpoint
          plays a role. I combine technical depth with creative direction to deliver experiences that people feel.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2">
                  {item.icon}
                </span>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
