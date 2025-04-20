import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    // For now we'll just simulate a submission
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue text-transparent bg-clip-text inline-block">
              Get In Touch
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-oceanBlue/20 text-skyBlue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:contact@yourname.com" className="text-gray-400 hover:text-skyBlue transition-colors">
                        contact@yourname.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-oceanBlue/20 text-skyBlue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Manchester, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Connect</h2>
                <div className="flex space-x-4">
                  {socialLinks.map(link => (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300"
                      aria-label={link.name}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Available For</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-skyBlue rounded-full mr-2"></span>
                    Freelance Projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-oceanBlue rounded-full mr-2"></span>
                    Full-time Positions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-deepBlue rounded-full mr-2"></span>
                    Consulting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slateBlue rounded-full mr-2"></span>
                    Technical Workshops
                  </li>
                </ul>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center"
              >
                <a 
                  href="/CV.pdf" 
                  download 
                  className="px-6 py-3 bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white"
                      placeholder="Project discussion, job opportunity, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white resize-none"
                      placeholder="Tell me about your project, questions, or job opportunity..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        formStatus === 'submitting'
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue hover:shadow-lg'
                      }`}
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formStatus === 'success' ? (
                        <span className="flex items-center justify-center">
                          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l-4-4z" clipRule="evenodd" />
                          </svg>
                          Message Sent!
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}