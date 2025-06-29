import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode className="text-3xl text-fuchsia-400" />,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript'],
    },
    {
      icon: <FaLaptopCode className="text-3xl text-cyan-400" />,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'React JS', 'Tailwind CSS'],
    },
    {
      icon: <FaDatabase className="text-3xl text-pink-400" />,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MySQL'],
    },
    {
      icon: <FaTools className="text-3xl text-green-400" />,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Netlify', 'Cloudinary', 'VS Code', 'Figma'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-tr from-[#1a0033] via-[#27004d] to-[#1a0033] text-white overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: 'bounce' },
            },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 z-10 relative"
      >
        <h2 className="text-5xl font-bold mb-4 text-fuchsia-400 drop-shadow-lg">
          Skills
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable, and beautiful applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 px-6 md:px-20 z-10 relative"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.035, rotateX: 2, rotateY: 2 }}
            className="bg-[#1c052f] border border-fuchsia-800 p-8 rounded-2xl shadow-md hover:shadow-fuchsia-500/40 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-5">{category.icon}</div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-fuchsia-300 drop-shadow-md">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#3a0b5a]/40 hover:bg-fuchsia-700/40 text-center py-2 rounded-md text-sm font-medium border border-fuchsia-800 hover:border-fuchsia-400 transition-all"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
