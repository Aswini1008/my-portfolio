import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Laptop2,
  Code2,
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f0f1a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-400">
            About Me
          </h2>

          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm an enthusiastic full-stack development intern with a strong interest in building
                modern, user-friendly web applications. I love experimenting with code and turning ideas
                into interactive digital experiences.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I'm currently gaining hands-on experience through internships and real-world projects,
                especially using React for frontend and Java for backend development. My focus is on writing
                clean, scalable code and always learning something new every day.
              </p>

              {/* Stats Card */}
              <div className="bg-white/5 border border-violet-500/20 backdrop-blur-md p-4 rounded-lg text-center shadow-[0_0_25px_#8b5cf680] hover:shadow-violet-700/30 transition-all">
                <div className="text-2xl font-bold text-violet-400">4+</div>
                <div className="text-slate-400">Projects Built</div>
              </div>
            </motion.div>

            {/* RIGHT FACTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 border border-violet-500/20 backdrop-blur-md p-6 rounded-xl shadow-[0_0_25px_#8b5cf680] hover:shadow-violet-700/30 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Quick Facts</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3 hover:text-violet-300 transition-colors">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                    Pursuing B.E in CSE – Panimalar Engineering College
                  </li>
                  <li className="flex items-center gap-3 hover:text-violet-300 transition-colors">
                    <Briefcase className="w-5 h-5 text-violet-400" />
                    Interning in full stack & software development roles
                  </li>
                  <li className="flex items-center gap-3 hover:text-violet-300 transition-colors">
                    <Laptop2 className="w-5 h-5 text-violet-400" />
                    Skilled in React JS, Java, GitHub workflows
                  </li>
                  <li className="flex items-center gap-3 hover:text-violet-300 transition-colors">
                    <Code2 className="w-5 h-5 text-violet-400" />
                    Passionate about real-world impactful projects
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
