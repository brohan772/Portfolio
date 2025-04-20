import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-grey-900/80 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={itemVariants} className="z-50">
          <Link to="/" className="text-2xl font-bold gradient-text">
            RB<span className="text-grey-900 dark:text-white">.</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`relative text-sm tracking-wider uppercase font-medium transition-colors ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-grey-900 dark:text-white' 
                    : 'text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-white'
                }`}
              >
                {item}
                {location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) && (
                  <motion.span 
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slateBlue"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* Theme Toggle Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-200 hover:bg-grey-200 dark:hover:bg-grey-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            className="p-2 mr-4 rounded-full bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-grey-200 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>
          
          <motion.div variants={itemVariants}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-grey-900 dark:text-white focus:outline-none"
              aria-label="toggle menu"
            >
              <div className="w-6 flex items-center justify-center relative">
                <span
                  className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-current ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`transform transition-all duration-300 absolute h-0.5 bg-current ${
                    isOpen ? 'w-0' : 'w-6'
                  }`}
                />
                <span
                  className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-current ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'calc(100vh - 0px)', display: 'block' } : { opacity: 0, height: 0, transitionEnd: { display: 'none' } }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-white/95 dark:bg-grey-900/95 backdrop-blur-md flex items-center justify-center z-40"
      >
        <div className="flex flex-col space-y-8 items-center">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`text-2xl font-semibold ${
                location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                  ? 'text-grey-900 dark:text-white'
                  : 'text-grey-600 dark:text-grey-400 hover:text-grey-900 dark:hover:text-white'
              } transition-colors`}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}