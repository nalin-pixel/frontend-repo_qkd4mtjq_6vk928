import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-black font-[Inter]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 text-white/60">
        <div className="container mx-auto px-6 py-6 text-sm">
          © {new Date().getFullYear()} Rusdy Ilham — Built with love, JavaScript, and good stories.
        </div>
      </footer>
    </div>
  );
};

export default App;
