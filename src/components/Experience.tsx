'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiBriefcase, FiBook } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Ristek Programming Division',
      company: 'Ormawa Eksekutif PKU IPB 2025/2026.',
      period: '2025 - Present',
      type: 'experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis laoreet sapien. Phasellus laoreet vel ligula et eleifend.',
      skills: ['Next.js', 'Laravel'],
    },
    {
      title: 'Undergraduate Computer Science',
      company: 'IPB University.',
      period: '2025 - Present',
      type: 'education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis laoreet sapien. Phasellus laoreet vel ligula et eleifend.',
      skills: ['Computational Thinking', 'Basic Progamming', 'Calculus'],
    },
    {
      title: 'Web Developer Intern',
      company: 'PT. Sanbersy',
      period: '2024',
      type: 'experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis laoreet sapien. Phasellus laoreet vel ligula et eleifend.',
      skills: ['Laravel', 'MySQL', 'Bootstrap', 'JQuery'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.type === 'experience' ? FiBriefcase : FiBook;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-2 top-10 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-purple-600" />
                )}

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-2 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-950 shadow-lg"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg dark:hover:shadow-purple-500/20 transition-shadow card-hover"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                    <FiCalendar size={14} />
                    {exp.period}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
