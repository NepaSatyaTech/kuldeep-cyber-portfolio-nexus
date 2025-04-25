
import React, { useState } from 'react';
import { Folder, Code, ExternalLink, Database } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "University Management System",
      date: "January 2023",
      description: 
        "A comprehensive system designed to streamline university administrative tasks, including student registration, course management, and faculty assignment. The application features role-based access control and secure data handling.",
      technologies: ["C++", "File Handling", "Data Structures"],
      features: [
        "Student registration and record management",
        "Course enrollment and scheduling",
        "Faculty assignment and workload tracking",
        "Grade management and transcript generation",
        "Administrative reporting and analytics"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "Car Rental System",
      date: "February 2025",
      description: 
        "A secure application for managing car rentals, featuring user authentication, vehicle inventory management, and booking processing. Implements secure payment handling and includes administrative tools for fleet management.",
      technologies: ["Java", "MySQL", "JDBC", "Swing UI"],
      features: [
        "User registration and authentication",
        "Vehicle browsing and filtering",
        "Booking management with date validation",
        "Secure payment processing",
        "Admin dashboard for fleet management"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-dark/60">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`cyber-card relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                activeProject === project.id ? 'border-cyber-blue' : ''
              }`}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="absolute top-0 right-0 bg-cyber-blue/20 px-2 py-1 text-xs font-mono text-cyber-blue">
                {project.date}
              </div>
              
              <div className="h-48 mb-4 overflow-hidden rounded-md relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent"></div>
              </div>
              
              <div className="flex items-center mb-3">
                <Folder size={20} className="text-cyber-blue mr-2" />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-cyber-blue/10 rounded text-xs font-mono text-cyber-blue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {activeProject === project.id && (
                <div className="mt-4 animate-fade-in">
                  <h4 className="font-semibold text-cyber-blue mb-2 flex items-center">
                    <Code size={16} className="mr-2" />
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 pl-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-400 font-mono">
                  {activeProject === project.id ? 'Click to collapse' : 'Click to expand'}
                </span>
                <button className="text-cyber-blue hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
