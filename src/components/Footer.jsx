import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/brohan772' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-bhalla-75aaa0200/' }
  ];

  return (
    <footer className="w-full py-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border-t border-slate-200 dark:border-slate-700/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
              RB<span className="text-slate-900 dark:text-white">.</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-md">
              Crafting elegant digital experiences with a focus on performance, user experience, and clean code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
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

          {/* Quick links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <i className="far fa-envelope mr-2 text-indigo-500"></i>
                <a href="mailto:rohan.bhalla48@gmail.com" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">rohan.bhalla48@gmail.com</a>
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <i className="fas fa-map-marker-alt mr-2 text-indigo-500"></i>
                <span>Huddersfield, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/30 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {currentYear} Rohan Bhalla. All Rights Reserved.</p>
          <p className="mt-1">
            Built with <span className="text-pink-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;