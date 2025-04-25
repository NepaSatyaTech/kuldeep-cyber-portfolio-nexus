
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="cyber-card">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 rounded-full bg-cyber-blue/20 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-cyber-blue" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300 text-center">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-darker border border-cyber-blue/30 rounded px-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-darker border border-cyber-blue/30 rounded px-4 py-2 text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-cyber-darker border border-cyber-blue/30 rounded px-4 py-2 text-white focus:outline-none focus:border-cyber-blue resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn-filled w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="cyber-card mb-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-cyber-blue/20 rounded-full p-3 mr-4">
                    <Mail size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <a href="mailto:kuldeeppathak8008@gmail.com" className="text-white hover:text-cyber-blue transition-colors">
                      kuldeeppathak8008@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-cyber-blue/20 rounded-full p-3 mr-4">
                    <Linkedin size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                    <a href="https://linkedin.com/in/kuldeep-pathak8008" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-blue transition-colors">
                      linkedin.com/in/kuldeep-pathak8008
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-cyber-blue/20 rounded-full p-3 mr-4">
                    <Github size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">GitHub</h4>
                    <a href="https://github.com/kuldeeppathak8008" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-blue transition-colors">
                      github.com/kuldeeppathak8008
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-cyber-blue/20 rounded-full p-3 mr-4">
                    <Phone size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Phone</h4>
                    <a href="tel:+917307833821" className="text-white hover:text-cyber-blue transition-colors">
                      +91-7307833821
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="cyber-card bg-gradient-to-br from-cyber-dark to-cyber-blue/5 border-cyber-blue/20">
              <h3 className="text-lg font-bold text-white mb-3">Security Notice</h3>
              <p className="text-gray-300 text-sm">
                This website implements security best practices including SSL/TLS encryption, secure headers, and data protection measures. Your information is safe and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
