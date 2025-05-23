import React from 'react';
import { Award, FileImage, Star } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "Ethical Hacking+",
      issuer: "CyberForge Academy",
      date: "July 2024",
      description: "45 Days (60 Hrs) comprehensive course covering ethical hacking methodologies, penetration testing techniques, and security assessments.",
      credentialId: "EH-25478",
      image: "/lovable-uploads/ea014b89-9858-4264-b7f5-88d9baaa6e11.png"
    },
    {
      id: 2,
      name: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "November 2023",
      description: "In-depth C++ programming course covering object-oriented programming, data structures, and algorithm implementation.",
      credentialId: "CPP-875634",
      image: "/lovable-uploads/88737039-c3a5-4660-9947-72d6b0097218.png"
    },
    {
      id: 3,
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Google via Coursera",
      date: "November 2023",
      description: "Comprehensive networking course covering fundamental concepts of computer networks and protocols.",
      credentialId: "NET-982764",
      image: "/lovable-uploads/283b6b2e-b1ff-4ea3-aff6-e1eaf2d4f6c3.png"
    },
    {
      id: 4,
      name: "Introduction to Cybersecurity Essentials",
      issuer: "IBM via Coursera",
      date: "April 2024",
      description: "Essential cybersecurity concepts, threats, and defense mechanisms in modern digital environments.",
      credentialId: "CYBER-875634",
      image: "/lovable-uploads/ca79afee-db6a-4e1f-814a-722f1b1c4392.png"
    }
  ];

  const achievements = [
    {
      title: "HackerRank 1-Star in Java",
      description: "Achieved 1-star rating by solving algorithm challenges and data structure problems in Java."
    },
    {
      title: "HackerRank 3-Stars in SQL",
      description: "Earned 3-star rating through advanced SQL query challenges and database manipulation tasks."
    },
    {
      title: "CTF Participant: CyberTitans 2023",
      description: "Participated in the CyberTitans Capture The Flag competition, solving cybersecurity challenges across multiple domains."
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileImage size={24} className="text-cyber-blue mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="cyber-card">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-cyber-blue">{cert.name}</h4>
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-1">Issued by: <span className="text-white">{cert.issuer}</span></p>
                    <p className="text-gray-300 text-sm">Credential ID: <span className="font-mono text-cyber-blue text-xs">{cert.credentialId}</span></p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{cert.description}</p>
                  
                  <div className="h-32 overflow-hidden rounded-md">
                    <img 
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award size={24} className="text-cyber-blue mr-3" />
              Achievements
            </h3>
            
            <div className="cyber-card h-full">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-b border-cyber-blue/20 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="bg-cyber-blue/10 rounded-full p-2 mr-3 mt-1">
                        <Star size={18} className="text-cyber-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
