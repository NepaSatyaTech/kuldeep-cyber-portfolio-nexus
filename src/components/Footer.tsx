
import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-cyber-darker border-t border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <Shield size={24} className="text-cyber-blue mr-2" />
            <span className="text-xl font-bold text-white">Kuldeep Pathak</span>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/kuldeeppathak8008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyber-dark p-3 rounded-full hover:bg-cyber-blue/20 transition-colors"
            >
              <Github size={20} className="text-cyber-blue" />
            </a>
            <a 
              href="https://linkedin.com/in/kuldeep-pathak8008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyber-dark p-3 rounded-full hover:bg-cyber-blue/20 transition-colors"
            >
              <Linkedin size={20} className="text-cyber-blue" />
            </a>
            <a 
              href="mailto:kuldeeppathak8008@gmail.com"
              className="bg-cyber-dark p-3 rounded-full hover:bg-cyber-blue/20 transition-colors"
            >
              <Mail size={20} className="text-cyber-blue" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Kuldeep Pathak. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              <span className="font-mono">Securing the digital world, one line of code at a time.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
