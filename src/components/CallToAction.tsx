'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 container-custom text-center text-white max-w-2xl mx-auto"
      >
        <h2 className="heading-lg mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-xl mb-8 text-white/90 leading-relaxed">
          Let&apos;s build something amazing together. Whether you have a project in mind or just want to chat about web development, I&apos;m always happy to connect.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-xl"
        >
          Let&apos;s Connect
          <FiArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
