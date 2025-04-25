
import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const responsibilities = [
    "Conducted vulnerability assessments and penetration testing on web applications",
    "Identified security flaws using industry-standard tools like Burp Suite and OWASP ZAP",
    "Documented findings and recommended security enhancements for client systems",
    "Assisted in developing secure coding practices for development teams",
    "Participated in security awareness training sessions for non-technical staff"
  ];

  const technologies = ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "OWASP ZAP"];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="cyber-card">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-cyber-blue mb-1">Ethical Hacking+ Internship</h3>
              <h4 className="text-xl text-gray-300">CyberForge Academy</h4>
            </div>
            <div className="flex items-center mt-2 md:mt-0 text-gray-400">
              <Calendar size={18} className="mr-2 text-cyber-blue" />
              <span>June 2024 - July 2024</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
            <ul className="space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-cyber-blue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded text-sm font-mono text-cyber-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Key Learnings</h4>
            <p className="text-gray-300">
              During this intensive internship, I gained hands-on experience in ethical hacking methodologies, vulnerability assessment, and security analysis. I learned to think like an attacker while maintaining ethical standards, a critical skill in cybersecurity. The experience strengthened my technical abilities and reinforced the importance of continuous learning in this rapidly evolving field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
