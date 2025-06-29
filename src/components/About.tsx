import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Laptop2,
  Code2,
  Sparkles,
} from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-br from-[#1a0033] via-[#27004d] to-[#1a0033] text-white"
    >
      <div className="max-w-6xl mx-auto sm:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I’m a passionate full-stack developer who loves building modern web apps that solve real-world problems. My stack is centered around React and Java with a focus on performance, scalability, and aesthetics.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              I’ve completed real-time internships and crafted multiple projects that reflect my love for clean UI and structured backend logic. Always curious, always coding.
            </p>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {[
                { value: '4+', label: 'Projects' },
                { value: '3+', label: 'Internships' },
                { value: 'Java', label: 'Backend Focus' },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-xl bg-[#1f0a3a] border border-pink-400/30 text-center p-4 shadow-md hover:shadow-pink-500/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-pink-400">{card.value}</div>
                  <p className="text-sm text-slate-400">{card.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1f0a3a] border border-pink-400/10 p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-5">
              Quick Highlights
            </h3>
            <ul className="space-y-4 text-slate-300 text-base">
              <li className="flex items-center gap-3 hover:text-pink-300 transition-colors duration-200">
                <GraduationCap className="w-5 h-5 text-pink-400" />
                B.E in ECE – Panimalar Engineering College
              </li>
              <li className="flex items-center gap-3 hover:text-pink-300 transition-colors duration-200">
                <Briefcase className="w-5 h-5 text-pink-400" />
                3+ Internships in Full-Stack & Software Dev
              </li>
              <li className="flex items-center gap-3 hover:text-pink-300 transition-colors duration-200">
                <Laptop2 className="w-5 h-5 text-pink-400" />
                Skilled in React, Tailwind CSS, Java, GitHub
              </li>
              <li className="flex items-center gap-3 hover:text-pink-300 transition-colors duration-200">
                <Code2 className="w-5 h-5 text-pink-400" />
                Backend Projects, API Handling, Deployment
              </li>
              <li className="flex items-center gap-3 hover:text-pink-300 transition-colors duration-200">
                <Sparkles className="w-5 h-5 text-pink-400" />
                Passionate about learning & innovation
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
