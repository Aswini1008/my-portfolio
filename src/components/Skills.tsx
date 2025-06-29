import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python " , "C", "JavaScript"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React JS", "Tawilwind CSS "],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js","My SQL"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Netlify", "Cloudinary", "VS Code" ,"Figma"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="section-container px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-violet-400">Skills</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build responsive and efficient web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.015 }}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 backdrop-blur-md transition-all hover:shadow-md hover:shadow-violet-500/30"
            >
              <h3 className="text-xl font-semibold mb-6 text-violet-300">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700/50 hover:bg-violet-900/40 p-3 rounded-lg text-center border border-slate-600 hover:border-violet-400 transition-all"
                  >
                    <span className="text-slate-200 text-sm font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
