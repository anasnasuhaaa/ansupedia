'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Ansjob',
      description: 'Job Vacancy Web.',
      image: '/img/ansjob.png',
      category: 'Web Development',
      technologies: ['React.js', 'Tailwind CSS', 'Axios'],
      liveUrl: 'https://ansjob-react-liard.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'Smartchain',
      description: 'Monitoring & Tracking System PT. GSM.',
      image: '/img/smartchain.png',
      category: 'Web Development',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JQuery'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Write Up Ramadhan CTF 2026',
      description: 'Write Up Ramadhan CTF 2026.',
      image: '/img/wuramadhanctf.png',
      category: 'Cyber Security',
      technologies: ['Web', 'Cryptography', 'Misc', 'PWN'],
      liveUrl: 'https://docs.google.com/document/d/1U_5yP7IUMUvLAR3RDvt3JRtc9e5rrE0XW6yH7OF7wlc/edit?usp=sharing',
      githubUrl: '#',
    },
    {
      title: 'Movie Search',
      description: 'Fetch API from IMDB with Axios.',
      image: '/img/ansumovie.png',
      category: 'Web Development',
      technologies: ['React.js', 'Tailwind CSS', 'Axios'],
      liveUrl: 'https://ansu-movie.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'Anstore',
      description: 'Simple E-Commerce with MVC Architecture.',
      image: '/img/anstore.png',
      category: 'Web Development',
      technologies: ['Laravel', 'Breeze', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js',
      image: '/img/portfolioweb.png',
      category: 'Web Development',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'API Movie Review',
      description: 'Laravel Rest API with Json Web Token (JWT).',
      image: '/img/apiproject.png',
      category: 'Web Development',
      technologies: ['Laravel', 'MySQL', 'JWT'],
      liveUrl: 'https://documenter.getpostman.com/view/32020683/2sAYJ6CfTF',
      githubUrl: '#',
    },
  ];

  const filters = ['All', 'Web Development', 'Cyber Security'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-blue-600'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${project.category}`}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all card-hover"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                      >
                        <FiGithub size={16} />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/anasnasuhaaa"
            target='_blank'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary flex items-center justify-center gap-2"
          >
          <FiGithub size={24} />  View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
