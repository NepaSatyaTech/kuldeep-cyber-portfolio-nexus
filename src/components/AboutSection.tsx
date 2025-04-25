
import React from 'react';
import { User, Shield, BookOpen, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Professional Summary</h3>
              
              <p className="text-gray-300 mb-4">
                I'm Kuldeep Pathak, a dedicated cybersecurity enthusiast and B.Tech student at Lovely Professional University. My passion lies in ethical hacking, system security, and vulnerability assessment.
              </p>
              
              <p className="text-gray-300 mb-4">
                With a strong foundation in programming and cybersecurity tools, I'm committed to building secure digital infrastructures and protecting organizations from evolving cyber threats. I continually expand my knowledge through hands-on projects and industry-recognized certifications.
              </p>
              
              <p className="text-gray-300 mb-6">
                My career goal is to become a proficient Security Analyst or Penetration Tester, contributing to creating more secure systems and educating others about cybersecurity best practices.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-cyber-green">
                  <Shield size={20} className="text-cyber-blue" />
                  <span>Security Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2 text-cyber-green">
                  <Code size={20} className="text-cyber-blue" />
                  <span>Programmer</span>
                </div>
                <div className="flex items-center space-x-2 text-cyber-green">
                  <BookOpen size={20} className="text-cyber-blue" />
                  <span>Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Personal Details</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <User size={20} className="text-cyber-blue mt-1" />
                  <div>
                    <span className="block text-gray-400 text-sm">Full Name</span>
                    <span className="block text-gray-200">Kuldeep Pathak</span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <BookOpen size={20} className="text-cyber-blue mt-1" />
                  <div>
                    <span className="block text-gray-400 text-sm">Education</span>
                    <span className="block text-gray-200">B.Tech in Computer Science</span>
                    <span className="block text-gray-400 text-sm">Lovely Professional University</span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Shield size={20} className="text-cyber-blue mt-1" />
                  <div>
                    <span className="block text-gray-400 text-sm">Specialization</span>
                    <span className="block text-gray-200">Ethical Hacking & Cybersecurity</span>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Code size={20} className="text-cyber-blue mt-1" />
                  <div>
                    <span className="block text-gray-400 text-sm">Programming</span>
                    <span className="block text-gray-200">C, C++, Java, HTML, CSS, MySQL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
