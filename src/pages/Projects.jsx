import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectGrid from '../components/projects/ProjectGrid';

export default function Projects() {
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

  return (
    <PageTransition>
      <div className="pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue text-transparent bg-clip-text inline-block">Projects</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">I will add projects here soon.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectGrid projects={[]} />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
