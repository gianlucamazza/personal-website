import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 font-mono ${
      isScrolled ? 'bg-[#0a0f1c]/95 backdrop-blur-sm border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl text-green-400 flex items-center gap-2">
            <Terminal size={20} />
            <span className="hidden sm:inline">~/gm</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#tech-stack" className="text-green-400 hover:text-green-300 transition-colors">/tech_stack</a>
            <a href="#projects" className="text-green-400 hover:text-green-300 transition-colors">/projects</a>
            <a href="#experience" className="text-green-400 hover:text-green-300 transition-colors">/experience</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gianlucamazza" 
               className="text-green-400 hover:text-green-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gianlucamazza" 
               className="text-green-400 hover:text-green-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/gmazza1989" 
               className="text-green-400 hover:text-green-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:gmazza1989@proton.me" 
               className="text-green-400 hover:text-green-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;