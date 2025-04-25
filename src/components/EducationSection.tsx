
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const educationHistory = [
    {
      id: 1,
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science",
      year: "2022 - Present",
      location: "Phagwara, Punjab",
      description: "Specializing in cybersecurity and software development with focus on ethical hacking techniques and secure application development."
    },
    {
      id: 2,
      institution: "SJS Public School",
      degree: "Intermediate Education (10+2)",
      year: "2020 - 2022",
      location: "Delhi",
      description: "Science stream with focus on Physics, Chemistry, Mathematics and Computer Science."
    },
    {
      id: 3,
      institution: "Sapien Secondary School",
      degree: "Matriculation",
      year: "2020",
      location: "Delhi",
      description: "Completed secondary education with focus on science and mathematics."
    }
  ];

  return (
    <section id="education" className="py-20 bg-cyber-dark/60">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-cyber-blue/30"></div>
          
          {/* Education items */}
          {educationHistory.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`relative flex flex-col md:flex-row md:items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-cyber-dark border-4 border-cyber-blue rounded-full flex items-center justify-center z-10 animate-pulse-glow">
                <GraduationCap size={20} className="text-cyber-blue" />
              </div>
              
              {/* Content card - alternating sides for desktop */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="cyber-card h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-cyber-blue">{edu.institution}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg text-white mb-1">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
