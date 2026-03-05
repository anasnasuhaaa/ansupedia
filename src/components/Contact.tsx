'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      icon: FiInstagram,
      label: 'Instagram',
      href: 'https://instagram.com/anass.nsh',
      color: 'bg-gradient-to-r from-pink-500 to-red-500 hover:shadow-pink-500/50',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/anasnasuhaaa',
      color: 'bg-slate-700 hover:bg-slate-600 hover:shadow-slate-700/50',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anas-nasuha-026186327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BceS7GeqoTC2PXx47Z9WYOA%3D%3D',
      color: 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/50',
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
    hidden: { opacity: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Connect with me on social media. Let&apos;s collaborate and build something amazing together!
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 flex-wrap"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-24 h-24 rounded-full ${link.color} flex items-center justify-center text-white shadow-lg transition-all duration-300`}
              >
                <Icon size={40} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
