
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Code, BookOpen, User, Home, Briefcase, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#hero" className="text-2xl font-bold text-cyber-blue flex items-center space-x-2 glow-text">
            <Shield size={24} className="text-cyber-blue" />
            <span>K.Pathak</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="nav-link flex items-center">
              <User size={18} className="mr-1" />
              <span>About</span>
            </a>
            <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="nav-link flex items-center">
              <Code size={18} className="mr-1" />
              <span>Skills</span>
            </a>
            <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className="nav-link flex items-center">
              <Briefcase size={18} className="mr-1" />
              <span>Experience</span>
            </a>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="nav-link flex items-center">
              <BookOpen size={18} className="mr-1" />
              <span>Projects</span>
            </a>
            <a href="#education" onClick={(e) => handleClick(e, 'education')} className="nav-link flex items-center">
              <Award size={18} className="mr-1" />
              <span>Education</span>
            </a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="nav-link flex items-center">
              <Mail size={18} className="mr-1" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="nav-link block py-2">
              <User size={18} className="inline-block mr-2" />
              About
            </a>
            <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="nav-link block py-2">
              <Code size={18} className="inline-block mr-2" />
              Skills
            </a>
            <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className="nav-link block py-2">
              <Briefcase size={18} className="inline-block mr-2" />
              Experience
            </a>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="nav-link block py-2">
              <BookOpen size={18} className="inline-block mr-2" />
              Projects
            </a>
            <a href="#education" onClick={(e) => handleClick(e, 'education')} className="nav-link block py-2">
              <Award size={18} className="inline-block mr-2" />
              Education
            </a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="nav-link block py-2">
              <Mail size={18} className="inline-block mr-2" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
