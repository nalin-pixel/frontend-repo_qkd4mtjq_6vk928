import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s build your story
        </motion.h2>
        <motion.p
          className="mt-3 text-white/80 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I’m available for collaborations, freelance projects, and ambitious ideas. Send a note and I’ll reply within 24 hours.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 max-w-xl"
        >
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Mail className="w-4 h-4 text-white/60" />
              <input
                id="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full bg-transparent py-3 outline-none placeholder:text-white/40"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea
              id="message"
              required
              placeholder="Tell me about your project..."
              className="min-h-[140px] rounded-lg border border-white/10 bg-white/5 p-3 outline-none placeholder:text-white/40"
            />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 w-fit rounded-lg bg-white text-black px-5 py-3 font-medium hover:shadow transition">
            Send message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
