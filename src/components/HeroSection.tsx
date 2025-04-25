
import React from 'react';
import { Shield, ArrowDown, BookOpen, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-darker opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              <span className="block">Kuldeep Pathak</span>
              <span className="block mt-2 text-cyber-blue glow-text">Cybersecurity Student</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
              &lt; Ethical Hacking Enthusiast /&gt;
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg text-lg">
              Focused on securing digital landscapes through ethical hacking techniques
              and vulnerability assessment. Currently pursuing B.Tech in Computer Science.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="cyber-btn-filled">
                <span>View Projects</span>
                <BookOpen size={18} />
              </a>
              <a href="#contact" className="cyber-btn">
                <span>Contact Me</span>
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-cyber-blue p-2 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="/lovable-uploads/2fdc744e-eccd-48d1-ab58-bc7056b9593d.png"
                  alt="Kuldeep Pathak" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cyber-blue/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={scrollToAbout} 
          className="text-cyber-blue hover:text-white transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
