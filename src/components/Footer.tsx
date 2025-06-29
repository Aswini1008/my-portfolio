import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#0e0e1c] via-[#1a0033] to-[#0e0e1c] border-t border-violet-700/20 text-white">
      <div className="section-container py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-extrabold text-purple-400">Aswini SM</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Full Stack Developer passionate about building seamless web experiences using modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">Interested in collaborating or hiring?</p>
              <a
                href="#contact"
                className="inline-block text-purple-400 hover:text-purple-300 transition"
              >
                Send me a message →
              </a>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/Aswini1008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
                >
                  <Github className="w-5 h-5 text-slate-400 hover:text-purple-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aswini-sm-97292629a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-purple-400" />
                </a>
              </div>
              <p className="text-slate-500 text-xs pt-1">smaswini006@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-slate-500 text-xs mb-3 md:mb-0">
            © 2025 Aswini SM. Built with ❤️ using React.js
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-purple-600 text-purple-300 bg-purple-800/10 hover:bg-purple-800/20 transition"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
