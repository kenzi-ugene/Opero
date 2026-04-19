import { Link } from "react-router";
import { motion } from "motion/react";
import { staggerContainer, staggerItemSoft, VIEWPORT_DEFAULT } from "../motion/siteMotion";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={staggerContainer}
        >
            {/* Company Info */}
            <motion.div className="md:col-span-5" variants={staggerItemSoft}>
              <div className="mb-6">
                <span className="text-2xl font-light tracking-wider">OPERO</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                IT solutions partner for website and system development, apps, web design, consulting, and more.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="md:col-span-2" variants={staggerItemSoft}>
              <h3 className="text-sm tracking-wider mb-6 text-gray-400">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/services", label: "Services" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-white hover:text-gray-300 transition-colors duration-300 inline-block"
                    >
                      <motion.span className="inline-block" whileHover={{ x: 4 }}>
                        {item.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="md:col-span-2" variants={staggerItemSoft}>
              <h3 className="text-sm tracking-wider mb-6 text-gray-400">Services</h3>
              <ul className="space-y-3 text-sm text-white">
                <li>Website Development</li>
                <li>System Development</li>
                <li>App Development</li>
                <li>Web Design</li>
                <li>IT Consulting</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="md:col-span-3" variants={staggerItemSoft}>
              <h3 className="text-sm tracking-wider mb-6 text-gray-400">Contact</h3>
              <ul className="space-y-3 text-sm text-white">
                <li>operomykl@gmail.com</li>
                <li>+6011 6490 6195</li>
                <li className="text-gray-400">
                  A-26-05, Petalz residences @ EXSIM<br />
                  Jalan Kampung Pasir<br />
                  Kuala Lumpur, Malaysia 58000
                </li>
              </ul>
            </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={staggerItemSoft}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>&copy; 2026 Opero. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <motion.a href="#" className="hover:text-white transition-colors duration-300" whileHover={{ y: -2 }}>
              Privacy
            </motion.a>
            <motion.a href="#" className="hover:text-white transition-colors duration-300" whileHover={{ y: -2 }}>
              Terms
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
