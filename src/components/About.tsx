'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiShield, FiTarget } from 'react-icons/fi';

const About = () => {
  const interests = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Building responsive and interactive web applications with modern frameworks.',
    },
    {
      icon: FiServer,
      title: 'Backend Engineering',
      description: 'Designing scalable and efficient backend systems and APIs.',
    },
    {
      icon: FiShield,
      title: 'Security & CTF',
      description: 'Exploring cybersecurity concepts and participating in CTF competitions.',
    },
    {
      icon: FiTarget,
      title: 'Problem Solving',
      description: 'Breaking down complex problems and finding elegant solutions.',
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
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
                  <img src="/img/anas.png" className='w-full h-auto' alt="" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-20" />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences
              that solve real-world problems.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              I also interest in Cyber Security and playing Capture the Flag Challenges.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Let&apos;s work together →
            </motion.a>
          </motion.div>
        </div>

        {/* Interests Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-purple-500/20 transition-shadow card-hover"
              >
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />

                <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
