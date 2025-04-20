import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // Fixed loading time of 1.5 seconds max
    const totalDuration = 1500; // 1.5 seconds in milliseconds
    const steps = 10; // Number of steps to reach 100%
    const interval = totalDuration / steps;
    
    const timer = setInterval(() => {
      setCounter(prev => {
        const newValue = prev + 100/steps;
        if (newValue >= 100) {
          clearInterval(timer);
          finishLoading();
          return 100;
        }
        return newValue;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [finishLoading]);
  
  // Logo variants for animation
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3, // Reduced from 0.4
        ease: "easeIn"
      }
    }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="text-center">
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mb-8"
        >
          <h1 className="text-5xl font-bold gradient-text">RB<span className="text-slate-900 dark:text-white">.</span></h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Developer</p>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div 
          className="h-1 w-48 md:w-56 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue"
            initial={{ width: 0 }}
            animate={{ width: `${counter}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.p 
          className="text-sm text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          Loading... {counter}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;