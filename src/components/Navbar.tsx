import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1a0033] via-[#27004d] to-[#1a0033] shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white font-medium">
          <div className="text-3xl font-bold text-purple-300">Aswini</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
          <ul className={`md:flex gap-10 text-lg ${isOpen ? 'block mt-4' : 'hidden'} md:mt-0 md:block`}> 
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`block py-2 md:py-0 transition-colors duration-300 hover:text-purple-300 ${
                    activeSection === sec ? 'text-fuchsia-400 font-bold' : 'text-white'
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Indicator */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`w-4 h-4 rounded-full ${
              activeSection === sec ? 'bg-fuchsia-400 scale-125' : 'bg-slate-500'
            } transition-all`}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;
