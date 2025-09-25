import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function About() {
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

  const profile = `I am a highly motivated software developer with a strong foundation in backend development with expertise in C# and the .NET ecosystem, and a growing proficiency in Azure. I build scalable and secure systems, follow SOLID and TDD, and enjoy Agile environments. I aim to contribute to technically challenging projects that make a real difference.`;

  const keySkills = [
    'Backend Development: C#, .NET Core/Framework, API performance and scalability',
    'Cloud & DevOps: Azure (Key Vaults, Function Apps, Service Bus, Application Insights), Azure DevOps CI/CD (YAML)',
    'Database Design: SQL, sharding for large-scale systems',
    'Testing & Best Practices: TDD, unit testing, SOLID principles',
    'Agile Workflow: sprint planning, daily standups, retrospectives, Jira/Confluence',
    'Full Stack Collaboration: React, TypeScript, JavaScript, CSS, HTML',
    'Communication & Teamwork: clear communication with cross-functional teams',
    'Adaptability & Learning: quick to pick up new technologies'
  ];

  const experiences = [
    {
      period: 'Apr 2024 – Present',
      role: 'Backend Developer (promoted to Mid-Level)',
      company: 'Bright HR, Manchester',
      description: 'Designed and implemented complex API functions in C#/.NET with a focus on performance and maintainability. Led EF Core query optimization reducing SQL DTU from 100% peaks to ~40%, enabling a two-tier DB scale-down and saving £15k+/month. Built a standalone timesheet microservice with clear domain boundaries. Managed Azure resources (Key Vaults, Service Bus, Function Apps, Application Insights). Contributed to database sharding for scalability. Applied SOLID and TDD, collaborated across UX/QA/BA/Frontend, and deployed via Azure DevOps.'
    },
    {
      period: 'Jul 2021 – Jul 2022',
      role: 'Junior Software Developer',
      company: 'Boston Limited, St Albans',
      description: 'Developed and integrated C# APIs. Consumed APIs from React (TypeScript/JavaScript). Helped bridge backend and frontend, improving user experiences and reliability across web apps.'
    }
  ];

  const education = [
    {
      title: 'Computer Science with Industrial Placement, BSc (Hons) – First Class',
      place: 'Newcastle University',
      period: 'Sep 2019 – Jun 2023'
    },
    {
      title: 'A-Levels: Mathematics (B), Computer Science (C), Physics (C)',
      place: 'Greenhead College',
      period: 'Sep 2017 – Jun 2019'
    },
    {
      title: '9 GCSEs A*–B including Maths and English',
      place: 'The Crossley Heath School',
      period: 'Sep 2012 – Jun 2017'
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
          <div>
            <motion.div variants={itemVariants} className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">About Me</h1>
              <div className="space-y-4 text-grey-600 dark:text-grey-300">
                <p>{profile}</p>
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

          <div>
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-white">Key Skills</h2>
              <ul className="space-y-3 text-grey-600 dark:text-grey-300">
                {keySkills.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slateBlue mt-2"></span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-6 text-grey-900 dark:text-white">Education</h2>
              <div className="space-y-6">
                {education.map((e) => (
                  <div key={e.title} className="rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 dark:bg-grey-800/5 border border-grey-200 dark:border-grey-700/10">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-grey-900 dark:text-white">{e.title}</h3>
                      <p className="text-slateBlue">{e.place}</p>
                      <p className="text-grey-500 dark:text-grey-400 mt-1">{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
