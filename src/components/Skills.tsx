'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaLaravel,
  FaDatabase,
  FaPython,
  FaLinux,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiDocker, SiGit } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-700 dark:text-white' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
        { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'REST API', icon: FaDatabase, color: 'text-amber-500' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Linux', icon: FaLinux, color: 'text-gray-600 dark:text-gray-400' },
        { name: 'Framer Motion', icon: FaReact, color: 'text-pink-500' },
        { name: 'Responsive Design', icon: FaReact, color: 'text-purple-500' },
        { name: 'SEO & Performance', icon: FaReact, color: 'text-green-500' },
      ],
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-purple-500/20 transition-shadow card-hover"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-blue-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Full-Stack Web Development',
              'UI/UX Implementation',
              'RESTful API Design',
              'Database Architecture',
              'Performance Optimization',
              'Version Control & CI/CD',
            ].map((competency) => (
              <motion.div
                key={competency}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <span className="font-medium">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
