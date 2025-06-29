import React from 'react';
import { motion } from 'framer-motion';

const educationList = [
  {
    title: 'B.E - Electronics and Communication Engineering',
    institution: 'Panimalar Engineering College, Chennai',
    year: '2025',
    gradeLabel: 'CGPA',
    grade: '7.5 / 10',
    description:
      'Focused on core electronics, embedded systems, and software development. Built real-world projects, IEEE volunteer, internship experience at ICF, BSNL, and Test Yatra.',
    tags: ['Java', 'React', 'MATLAB', 'IoT', 'Project Development'],
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Holy Infant Jesus Matriculation & Hr. Sec School',
    year: '2021',
    gradeLabel: 'Percentage',
    grade: '92%',
    description:
      'Computer Science stream. Strong academic foundation in Math, Physics, and Programming. Actively involved in tech events and school leadership.',
    tags: ['Computer Science', 'Math', 'Science Exhibitions'],
  },
];

const Education = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-tr from-[#1a0033] via-[#27004d] to-[#1a0033] text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-pink-400">Education</h2>
        </motion.div>

        <div className="space-y-16">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}

              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.015 }}
              className="bg-[#1c052f] border border-pink-600/30 p-8 rounded-2xl shadow-md hover:shadow-pink-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 flex items-center justify-center text-2xl bg-pink-500 text-white rounded-xl">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">{edu.title}</h3>
                  <p className="text-pink-300 mb-3">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-slate-400 mb-4">
                    <span>Year: {edu.year}</span>
                    <span>
                      {edu.gradeLabel}: <span className="text-pink-400">{edu.grade}</span>
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4 text-justify">{edu.description}</p>
                  <motion.div
                    variants={tagContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {edu.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        variants={tagItem}
                        className="text-xs bg-pink-900/40 text-pink-300 px-3 py-1 rounded-full border border-pink-600/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
