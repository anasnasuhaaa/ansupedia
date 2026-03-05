'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/anasnasuhaaa', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:ifoanaspedia@gmail.com', label: 'Email' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/anas-nasuha-026186327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BceS7GeqoTC2PXx47Z9WYOA%3D%3D', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="py-8">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            {/* Copyright */}
            <p className="text-sm text-slate-400">
              Anas Nasuha © 2026
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="text-slate-400 hover:text-blue-500 transition-colors"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
