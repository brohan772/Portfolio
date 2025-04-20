import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social links
  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/' },
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
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
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
                <a href="mailto:contact@yourdomain.com" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">contact@yourdomain.com</a>
              </li>
              <li className="flex items-center text-slate-600 dark:text-slate-300">
                <i className="fas fa-map-marker-alt mr-2 text-indigo-500"></i>
                <span>Manchester, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/30 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {currentYear} Your Name. All Rights Reserved.</p>
          <p className="mt-1">
            Built with <span className="text-pink-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;