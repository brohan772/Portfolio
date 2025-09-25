import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const textRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  // Button hover animation
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  useEffect(() => {
    // Typewriter effect initialization would go here if needed
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-24">
        <div className="absolute inset-0 z-0">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-grey-300/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-grey-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-oceanBlue/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="text-grey-600 dark:text-grey-400 text-lg md:text-xl mb-4 font-medium tracking-wider"
          >
            Hello, I'm Rohan Bhalla
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block mt-2 gradient-text">Backend .NET Developer</span>
            <span className="block mt-2 gradient-text">Building scalable APIs on Azure</span>
            </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-grey-600 dark:text-grey-400 text-lg md:text-xl max-w-3xl mx-auto mb-8"
          >
            I design and build secure, high-performance services with C#, .NET, SQL, and Azure, guided by SOLID and TDD.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-8 py-3 bg-gradient-to-r from-deepBlue to-oceanBlue rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-8 py-3 bg-transparent border-2 border-grey-300/20 dark:border-white/20 rounded-lg text-grey-700 dark:text-white font-semibold hover:border-grey-400/40 dark:hover:border-white/40 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 border-2 border-grey-300/20 dark:border-white/20 rounded-full flex justify-center pt-2"
            >
              <motion.div 
                animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-grey-500 dark:bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
