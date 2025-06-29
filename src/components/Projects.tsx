import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Church Website – Live Web Application",
      description:
        "Built a responsive church website with gallery, announcements, and admin panel. Integrated Cloudinary for media handling and MongoDB for data storage.",
      technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      image: "/images/church-screenshot.jpg",
      demoUrl: "https://cosmic-squirrel-a9efa8.netlify.app/",
      codeUrl: "https://github.com/aravinthbalu15/panchu",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack solution with authentication, product management, cart, and Stripe integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-ecommerce-demo.netlify.app",
      codeUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Task Management System",
      description:
        "Project management tool with real-time updates, drag-and-drop tasks, and team analytics.",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://your-task-manager.vercel.app",
      codeUrl: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather forecast dashboard using D3, Flask, and location APIs.",
      technologies: ["React", "D3.js", "Python", "Flask", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://weather-insights.netlify.app",
      codeUrl: "https://github.com/yourusername/weather-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/90">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-violet-400">Featured Projects</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A curated list of my top projects showcasing skills in full-stack development,
            APIs, and UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden group border border-slate-700 hover:border-violet-500 transition-all duration-300 bg-slate-800/50 backdrop-blur-md shadow-md hover:shadow-violet-500/30"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-violet-400/40 bg-violet-900/20 text-violet-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="bg-violet-600 hover:bg-violet-700 text-white flex-1 text-sm font-semibold"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-slate-900 border border-slate-300 hover:bg-violet-50 transition-colors flex items-center gap-1"
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
