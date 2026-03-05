'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import Typewriter from './Typewriter';

const Hero = () => {
  const roles = ['Web Developer', 'Cyber Security Enthusiast'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom px-4 text-center"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="heading-xl mb-6">
            Hi, I&apos;m <span className="gradient-text">Anas Nasuha</span>
          </h1>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div variants={itemVariants}>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-12">
            <Typewriter words={roles} speed={80} deleteSpeed={30} />
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants}>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting elegant, high-performance web applications with modern technologies.
            Passionate about solving complex problems and building seamless user experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View Projects <FiArrowRight />
          </motion.a> */}
          <motion.a
            href="https://github.com/anasnasuhaaa"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <FiGithub /> My Github
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
