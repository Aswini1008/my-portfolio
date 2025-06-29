import React from 'react';
import { motion } from 'framer-motion';

const tagContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const tagItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="section-container px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-violet-400 mb-6">Education</h2>
        </motion.div>

        <div className="space-y-16">
          {/* College Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-400/20 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-slate-800/70 border border-slate-600/40 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:shadow-violet-700/30 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-1">
                Bachelor of Engineering in Electronics and Communication
              </h3>
              <p className="text-violet-400 mb-2">
                Panimalar Engineering College, Chennai
              </p>
              <div className="text-slate-400 text-sm flex justify-between mb-4">
                <span>Graduation Year: 2025</span>
                <span>CGPA: <span className="text-violet-300 font-semibold">7.5 / 10</span></span>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed text-justify">
                Focused on ECE fundamentals and strengthened software skills through internships and project-based learning.
                Built full-stack applications and actively contributed to IEEE events, hackathons, and peer mentorship.
              </p>
              <motion.div
                variants={tagContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {[
                  'Java', 'React', 'HTML/CSS', 'GitHub', 'Node.js',
                  'Microcontrollers', 'DBMS', 'Digital Circuits', 'Hackathons', 'IEEE',
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={tagItem}
                    className="text-xs bg-slate-700 text-violet-300 px-3 py-1 rounded-full border border-violet-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 12th Grade Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-pink-300/20 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-slate-800/70 border border-slate-600/40 rounded-3xl p-8 shadow-xl backdrop-blur-xl hover:shadow-pink-500/30 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-1">
                Higher Secondary Education (12th Grade)
              </h3>
              <p className="text-pink-300 mb-2">
                Holy Infant Jesus Matriculation & Higher Secondary School, Chennai
              </p>
              <div className="text-slate-400 text-sm flex justify-between mb-4">
                <span>Graduation Year: 2021</span>
                <span>Score: <span className="text-pink-400 font-semibold">87%</span></span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                Strong academic foundation in Mathematics, Physics, and Computer Science. 
                Developed early interest in electronics and logical thinking through science projects and programming activities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
