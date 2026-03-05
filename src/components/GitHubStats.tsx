'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiCode } from 'react-icons/fi';

const GitHubStats = () => {
  const stats = [
    {
      label: 'Public Repositories',
      value: '42',
      icon: FiCode,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Total Stars',
      value: '1.2K',
      icon: FiStar,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Followers',
      value: '500+',
      icon: FiGithub,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const languages = [
    { language: 'TypeScript', percentage: 45, color: 'bg-blue-500' },
    { language: 'JavaScript', percentage: 25, color: 'bg-yellow-500' },
    { language: 'PHP', percentage: 15, color: 'bg-purple-500' },
    { language: 'Python', percentage: 10, color: 'bg-green-500' },
    { language: 'Other', percentage: 5, color: 'bg-slate-500' },
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">GitHub Activity</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-8 text-white shadow-lg card-hover`}
              >
                <Icon className="w-8 h-8 mb-4 opacity-80" />
                <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-8">Most Used Languages</h3>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {lang.percentage}%
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full ${lang.color} rounded-full`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex items-center gap-2"
          >
            <FiGithub />
            Visit My GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
