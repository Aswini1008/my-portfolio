import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

import bsnlLogo from '/logos/bsnl.png';
import testYatraLogo from '/logos/testyatra.png';
import icfLogo from '/logos/icf.png';

const Experience = () => {
  const experiences = [
    {
      company: 'BSNL – Bharat Sanchar Nigam Limited',
      position: 'Telecom Intern – Network Switching',
      period: 'June 2024',
      description:
        'Explored telecom infrastructure including switching systems, fiber optic transmission, and PSTN operations. Studied practical applications of networking protocols.',
      logo: bsnlLogo,
      technologies: ['Switching', 'Fiber Optics', 'PSTN', 'Telecom Infra', 'Networking'],
    },
    {
      company: 'Test Yatra',
      position: 'Web Development Intern',
      period: 'Aug 2024',
      description:
        'Designed frontend components and helped build responsive UI using React. Improved UI consistency, collaborated on GitHub, and contributed to testing workflows.',
      logo: testYatraLogo,
      technologies: ['React', 'UI/UX', 'Tailwind CSS', 'GitHub', 'Testing'],
    },
    {
      company: 'ICF – Integral Coach Factory',
      position: 'Electrical Design Intern',
      period: 'May 2024',
      description:
        'Worked in the Electrical Department learning circuit design, train wiring systems, and inspection procedures. Understood safety protocols and component-level fault detection.',
      logo: icfLogo,
      technologies: ['Circuit Design', 'Train Wiring', 'Safety Testing', 'Hands-on Tools'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-tr from-[#1a0033] via-[#27004d] to-[#1a0033] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold text-pink-400 inline-flex items-center justify-center gap-3 drop-shadow-md">
          <Briefcase className="w-8 h-8" />
          Experience
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1f0933] border border-pink-500/20 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            {/* Header Row */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-10 h-10 rounded bg-white object-contain p-1"
              />
              <div>
                <h3 className="text-lg font-bold text-pink-300">{exp.company}</h3>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
            </div>

            <h4 className="text-md font-medium text-slate-100 mb-2">{exp.position}</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-pink-900/30 text-pink-300 px-3 py-1 rounded-full border border-pink-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
