import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "BSNL – Bharat Sanchar Nigam Limited",
      position: "Telecom Intern – Network Switching",
      period: "June 2024",
      description:
        "Explored telecommunication infrastructure including switching systems, fiber optic transmission, and PSTN operations. Studied practical applications of networking protocols.",
      technologies: [
        "Switching", "Fiber Optics", "PSTN", "Telecom Infra", "Networking",
      ],
    },
    {
      company: "Test Yatra",
      position: "Web Development Intern",
      period: "Aug 2024",
      description:
        "Designed frontend components and helped build responsive UI using React. Improved UI consistency, collaborated on GitHub, and contributed to testing workflows.",
      technologies: [
        "React", "UI/UX", "Tailwind CSS", "GitHub", "Testing",
      ],
    },
    {
      company: "ICF – Integral Coach Factory",
      position: "Electrical Design Intern",
      period: "May 2024",
      description:
        "Worked in the Electrical Department learning circuit design, train wiring systems, and inspection procedures. Understood safety protocols and component-level fault detection.",
      technologies: [
        "Circuit Design", "Train Wiring", "Safety Testing", "Hands-on Tools",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0f0f1a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-flex items-center justify-center gap-3 text-violet-400">
          <Briefcase className="w-8 h-8" />
          Experience
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-violet-500/20 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_25px_#8b5cf680] hover:shadow-violet-700/30 transition-all"
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-violet-300">{exp.company}</h3>
              <span className="text-sm text-slate-400">{exp.period}</span>
            </div>

            <h4 className="text-lg font-medium text-slate-200 mb-2">{exp.position}</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-violet-800/30 text-violet-300 px-3 py-1 rounded-full border border-violet-500/30"
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
