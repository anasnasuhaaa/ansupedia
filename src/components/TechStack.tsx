'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaLaravel,
  FaDatabase,
  FaPython,
  FaLinux,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGit, SiJavascript, SiPhp, SiPostman, SiGo } from 'react-icons/si';

const TechStack = () => {
  const techGroups = [
    {
      title: 'Programming Languages',
      techs: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'PHP', icon: SiPhp, color: 'text-purple-500' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
           { name: 'Go', icon: SiGo, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Frameworks',
      techs: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
      ],
    },
    {
      title: 'Databases & Tools',
      techs: [
        { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Other',
      techs: [
        { name: 'Kali Linux', icon: FaLinux, color: 'text-red-600' },
        { name: 'Burp Suite', icon: FaReact, color: 'text-orange-500' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
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
          <h2 className="heading-lg mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="bg-slate-900 rounded-xl p-8 border border-slate-800"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400">{group.title}</h3>
              <div className="flex flex-wrap gap-6">
                {group.techs.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group"
                    >
                      <Icon className={`w-10 h-10 ${tech.color} group-hover:scale-125 transition-transform`} />
                      <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
