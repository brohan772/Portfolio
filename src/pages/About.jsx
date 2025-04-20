import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function About() {
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

  // Skills data
  const skills = [
    { name: ".NET", level: 90 },
    { name: "C#", level: 95 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "SQL", level: 80 },
    { name: "Azure", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ];

  // Experience timeline data
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Software Developer",
      company: "Tech Innovations",
      description: "Leading a team of developers to create scalable web applications using .NET Core and React. Implementing CI/CD pipelines and cloud-based solutions."
    },
    {
      period: "2019 - 2022",
      role: "Full Stack Developer",
      company: "Digital Solutions Inc.",
      description: "Developed and maintained multiple client-facing applications. Worked with C#, ASP.NET, SQL, and modern JavaScript frameworks."
    },
    {
      period: "2017 - 2019",
      role: "Junior Developer",
      company: "CodeCraft",
      description: "Started my professional journey building internal tools and contributing to existing products. Primarily focused on back-end development with .NET."
    }
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left column - Bio */}
          <div>
            <motion.div variants={itemVariants} className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
                About Me
              </h1>
              <div className="space-y-4 text-grey-600 dark:text-grey-300">
                <p>
                  I'm a passionate software developer specializing in building robust, user-friendly applications. With over 5 years of experience in the industry, I've developed a strong foundation in .NET development while constantly expanding my skill set to include modern frameworks and technologies.
                </p>
                <p>
                  My approach to development focuses on creating clean, maintainable code that delivers exceptional user experiences. I enjoy solving complex problems and turning ideas into functional, elegant solutions.
                </p>
                <p>
                  Outside of coding, I'm an avid learner who enjoys staying up-to-date with the latest industry trends and technologies. I'm also passionate about open source and contributing to the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-white">Experience</h2>
              <div className="space-y-10 relative">
                <div className="absolute top-0 bottom-0 left-[21px] w-0.5 bg-gradient-to-b from-slateBlue via-grey-500 to-grey-700/30"></div>
                
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="absolute top-0 left-0 w-[43px] h-[43px] bg-grey-100 dark:bg-grey-800 z-10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-slateBlue to-grey-600"></div>
                    </div>
                    <div className="ml-12">
                      <span className="text-sm text-slateBlue font-medium">{exp.period}</span>
                      <h3 className="text-xl font-semibold text-grey-900 dark:text-white mt-1">{exp.role}</h3>
                      <p className="text-grey-600 dark:text-grey-300">{exp.company}</p>
                      <p className="mt-2 text-grey-500 dark:text-grey-400">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills and education */}
          <div>
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-white">Professional Skills</h2>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-grey-900 dark:text-white">{skill.name}</span>
                      <span className="text-grey-500 dark:text-grey-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-grey-200 dark:bg-grey-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-grey-600 to-slateBlue rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-white">Education</h2>
              <div className="rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 dark:bg-grey-800/5 border border-grey-200 dark:border-grey-700/10">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-white">Computer Science, BSc</h3>
                  <p className="text-slateBlue">University of Technology</p>
                  <p className="text-grey-500 dark:text-grey-400 mt-2">2013 - 2017</p>
                  <p className="mt-4 text-grey-600 dark:text-grey-300">
                    Majored in Software Engineering with a focus on modern application development. Graduated with honors and completed a capstone project building a scalable web application.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 dark:bg-grey-800/5 border border-grey-200 dark:border-grey-700/10">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-grey-900 dark:text-white">Certifications</h3>
                  <ul className="mt-4 space-y-2 text-grey-600 dark:text-grey-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slateBlue"></span>
                      Microsoft Certified: Azure Developer Associate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-grey-500"></span>
                      AWS Certified Developer
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-grey-600"></span>
                      Certified Scrum Master
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}