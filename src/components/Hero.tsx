import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import Lottie from 'lottie-react';
import devAnimation from '@/assets/dev-animation.json'; // Use your Lottie JSON file

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
          setTimeout(() => setIsTyping(false), 1500);
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

    const timer = setTimeout(typeEffect, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-[#0a0a12] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full py-20">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hey, I'm <span className="text-purple-400">Aswini</span>
          </h1>

          <div className="text-xl md:text-3xl text-purple-300 h-16 mb-6">
            <span className="mr-2">I'm a</span>
            <span className="text-purple-400 font-semibold">
              {currentText}<span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-purple-500 max-w-lg mb-6 text-base md:text-lg leading-relaxed">
            I build scalable, responsive web apps using Java and modern frontend tech. Passionate about clean code and elegant UI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Aswini_Resume.pdf"
              download
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg rounded-full shadow-md"
            >
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-800 px-6 py-3 text-lg rounded-full flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> About Me
            </button>
          </div>
        </motion.div>

        {/* Right Side: Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <Lottie animationData={devAnimation} loop autoplay />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <span className="text-sm mb-1">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
