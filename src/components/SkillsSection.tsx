
import React from 'react';
import { Database, Code, Shield, Terminal, Server, Laptop, User, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'C', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'MySQL', level: 90 },
  ];

  const securityTools = [
    { name: 'Kali Linux', level: 90 },
    { name: 'Metasploit', level: 85 },
    { name: 'Burp Suite', level: 80 },
    { name: 'Nmap', level: 90 },
    { name: 'Wireshark', level: 85 },
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: <Terminal size={20} className="text-cyber-blue" /> },
    { name: 'Team Collaboration', icon: <User size={20} className="text-cyber-blue" /> },
    { name: 'Project Management', icon: <Briefcase size={20} className="text-cyber-blue" /> },
    { name: 'Adaptability', icon: <Code size={20} className="text-cyber-blue" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-dark/60">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <Code size={24} className="text-cyber-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-gray-300">{skill.name}</span>
                    <span className="text-xs text-cyber-blue">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress animate-pulse-glow" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cybersecurity Tools */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <Shield size={24} className="text-cyber-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Cybersecurity Tools</h3>
            </div>
            <div className="space-y-6">
              {securityTools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-gray-300">{tool.name}</span>
                    <span className="text-xs text-cyber-blue">{tool.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress animate-pulse-glow" 
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-10">
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-cyber-darker p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-mono text-gray-300">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
