import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Narrative Commerce',
    tagline: 'Story‑led product pages with real‑time inventory',
    tech: ['React', 'Node', 'WebSockets'],
    link: '#',
    repo: '#',
    gradient: 'from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30'
  },
  {
    title: 'Spatial Journal',
    tagline: '3D memories on the web, powered by WebGL',
    tech: ['Three.js', 'Vite', 'Cloud Functions'],
    link: '#',
    repo: '#',
    gradient: 'from-emerald-500/30 via-teal-500/30 to-blue-500/30'
  },
  {
    title: 'Realtime Canvas',
    tagline: 'Collaborative drawing with CRDT sync',
    tech: ['React', 'Yjs', 'Express'],
    link: '#',
    repo: '#',
    gradient: 'from-amber-500/30 via-rose-500/30 to-violet-500/30'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.gradient} p-6`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white text-black text-sm font-medium hover:shadow">
                  Live <ExternalLink className="w-4 h-4" />
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/30 text-sm font-medium hover:bg-white/10">
                  Code <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
