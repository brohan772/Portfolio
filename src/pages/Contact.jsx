import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import cvPdf from '../docs/RB-CV.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/brohan772' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-bhalla-75aaa0200/' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;
    setFormStatus('submitting');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New message from portfolio');
      formDataToSend.append('_captcha', 'true');
      formDataToSend.append('_template', 'table');
      const res = await fetch('https://formsubmit.co/rohan.bhalla48@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formDataToSend
      });
      if (!res.ok) throw new Error('Request failed');
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setFormStatus('error');
    } finally {
      setTimeout(() => setFormStatus('idle'), 2000);
    }
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
                      <a href="mailto:rohan.bhalla48@gmail.com" className="text-gray-400 hover:text-skyBlue transition-colors">
                        rohan.bhalla48@gmail.com
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
                      <p className="text-gray-400">Huddersfield, United Kingdom</p>
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
                      {link.name === 'GitHub' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.523 2 12.048c0 4.447 2.865 8.222 6.839 9.555.5.093.681-.217.681-.482 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.345-3.369-1.345-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.071 1.53 1.033 1.53 1.033.892 1.53 2.341 1.09 2.911.835.091-.647.35-1.088.636-1.338-2.223-.254-4.555-1.114-4.555-4.96 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026a9.57 9.57 0 012.504-.338c.85.004 1.705.116 2.504.338 1.909-1.296 2.749-1.026 2.749-1.026.545 1.376.202 2.393.099 2.646.64.7 1.028 1.594 1.028 2.688 0 3.854-2.336 4.704-4.566 4.958.36.31.679.92.679 1.853 0 1.338-.012 2.418-.012 2.746 0 .268.18.58.688.481A10.06 10.06 0 0022 12.048C22 6.523 17.523 2 12 2z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M20.451 20.451H17.23v-5.569c0-1.329-.025-3.04-1.853-3.04-1.854 0-2.137 1.448-2.137 2.944v5.665H9.02V9h3.094v1.561h.043c.43-.814 1.482-1.67 3.051-1.67 3.262 0 3.867 2.147 3.867 4.94v6.62zM5.337 7.433a1.794 1.794 0 110-3.588 1.794 1.794 0 010 3.588zM6.999 20.451H3.67V9h3.33v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center"
              >
                <a 
                  href={cvPdf} 
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

            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white" placeholder="Project discussion, job opportunity, etc." />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-skyBlue focus:outline-none focus:ring-1 focus:ring-skyBlue rounded-lg text-white resize-none" placeholder="Tell me about your project, questions, or job opportunity..."></textarea>
                  </div>
                  <div>
                    <button type="submit" disabled={formStatus==='submitting'} className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${formStatus==='submitting' ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue hover:shadow-lg'}`}>{formStatus==='submitting' ? 'Sending…' : formStatus==='success' ? 'Sent!' : formStatus==='error' ? 'Retry' : 'Send Message'}</button>
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
