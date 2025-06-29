import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Full Stack Developer', 'Java Enthusiast', 'Tech Explorer'];

  useEffect(() => {
    const typeEffect = () => {
      const fullText = texts[textIndex];
      if (isTyping) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };
    const timer = setTimeout(typeEffect, isTyping ? 100 : 40);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, textIndex]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-[#1a002d] via-[#11002a] to-[#0d001e] text-white relative flex items-center justify-center overflow-hidden px-4"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#0d001e' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#f472b6' },
            links: { color: '#f472b6', distance: 140, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 0.8, outModes: 'bounce' },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } }
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 text-center max-w-4xl w-full p-10 sm:p-14 bg-white/5 backdrop-blur-lg border border-fuchsia-600/20 rounded-3xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Hey, I'm <span className="text-pink-400 animate-glow">Aswini</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl text-pink-300 mb-4 h-10"
        >
          {currentText}
          <span className="animate-blink">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8"
        >
          I build elegant and scalable full-stack web apps with Java and modern frontend tools. Let's turn ideas into digital reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a
            href="/Aswini_Resume.pdf"
            download
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition hover:scale-105"
          >
            Download Resume
          </a>

          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border border-pink-400 text-pink-300 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-full flex items-center gap-2 transition hover:scale-105 shadow"
          >
            <Mail className="w-5 h-5" /> About Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-pink-300 hover:text-pink-200 transition"
          >
            <span className="text-sm mb-1">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
