import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  
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

  // Project card hover animation
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Project data
  const projects = [
    {
      title: "Enterprise Management System",
      category: "web",
      image: "https://via.placeholder.com/600x400/111827/0EA5E9?text=Enterprise+System",
      tech: ["C#", ".NET", "SQL Server", "React"],
      description: "A comprehensive enterprise resource planning system with advanced reporting features and user management.",
      link: "#"
    },
    {
      title: "E-commerce Mobile App",
      category: "mobile",
      image: "https://via.placeholder.com/600x400/111827/0369A1?text=E-commerce+App",
      tech: ["React Native", "Node.js", "MongoDB"],
      description: "Cross-platform mobile application for an e-commerce platform with real-time inventory and payment processing.",
      link: "#"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'iot', name: 'IoT' }
  ];

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
              My Portfolio
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore my recent projects showcasing my expertise in various technologies and domains. Each project reflects my commitment to quality and innovation.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue text-white'
                    : 'bg-grey-200/10 hover:bg-grey-200/20 text-grey-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover="hover"
                layoutId={project.title}
                className="rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs py-1 px-2 rounded-full bg-oceanBlue/20 text-skyBlue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-skyBlue font-medium transition-colors duration-300 hover:text-oceanBlue"
                  >
                    View Project <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 mb-4">Looking for a custom solution for your business?</p>
            <a 
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-deepBlue via-oceanBlue to-skyBlue rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Discuss Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}