import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { heroContainer, heroItem, staggerContainer, staggerItemSoft, VIEWPORT_DEFAULT } from "../motion/siteMotion";
import React from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("Thank you for reaching out. We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const inputClass =
    "w-full bg-transparent border-b border-gray-300 pb-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-300";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={heroContainer}>
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8 leading-[1.1]"
              variants={heroItem}
            >
              Let's Talk
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed" variants={heroItem}>
              Tell us about your website, system, app, design, or consulting needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-5 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_DEFAULT}
              variants={staggerContainer}
            >
              <motion.div variants={staggerItemSoft} whileHover={{ x: 4 }}>
                <h3 className="text-sm tracking-wider text-gray-400 mb-4">Email</h3>
                <a
                  href="mailto:operomykl@gmail.com"
                  className="text-2xl text-black hover:text-gray-600 transition-colors duration-300"
                >
                  operomykl@gmail.com
                </a>
              </motion.div>
              <motion.div variants={staggerItemSoft} whileHover={{ x: 4 }}>
                <h3 className="text-sm tracking-wider text-gray-400 mb-4">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-2xl text-black hover:text-gray-600 transition-colors duration-300"
                >
                  +6011 6490 6195
                </a>
              </motion.div>
              <motion.div variants={staggerItemSoft} whileHover={{ x: 4 }}>
                <h3 className="text-sm tracking-wider text-gray-400 mb-4">Office</h3>
                <p className="text-gray-600 leading-relaxed">
                  a-26-05, Petalz residences @ EXSIM<br />
                  Jalan Kampung Pasir<br />
                  Kuala Lumpur, Malaysia 58000
                </p>
              </motion.div>
              <motion.div variants={staggerItemSoft} className="pt-8 border-t border-gray-200" whileHover={{ x: 4 }}>
                <h3 className="text-sm tracking-wider text-gray-400 mb-4">Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Monday – Friday: 9:00 – 18:00</p>
                  <p>Saturday: 10:00 – 16:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULT}
                variants={staggerContainer}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={staggerItemSoft}>
                    <label htmlFor="name" className="block text-sm tracking-wider text-gray-400 mb-3">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                  <motion.div variants={staggerItemSoft}>
                    <label htmlFor="email" className="block text-sm tracking-wider text-gray-400 mb-3">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div variants={staggerItemSoft}>
                    <label htmlFor="company" className="block text-sm tracking-wider text-gray-400 mb-3">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your company"
                    />
                  </motion.div>
                  <motion.div variants={staggerItemSoft}>
                    <label htmlFor="service" className="block text-sm tracking-wider text-gray-400 mb-3">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="system">System Development</option>
                      <option value="app">App Development</option>
                      <option value="design">Web Design</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="integration">System Integration</option>
                      <option value="cloud">Cloud &amp; Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={staggerItemSoft}>
                  <label htmlFor="message" className="block text-sm tracking-wider text-gray-400 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project..."
                    required
                  />
                </motion.div>

                <motion.div variants={staggerItemSoft} className="pt-8">
                  <motion.button
                    type="submit"
                    className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300 group"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    SEND MESSAGE
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Info */}
      <AnimatedSection className="py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light tracking-tight text-black mb-8">What to Expect</h2>
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_DEFAULT}
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItemSoft}
                className="border-l-2 border-black pl-6"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <h3 className="text-xl mb-2">Initial Response</h3>
                <p className="text-gray-600">We'll acknowledge your inquiry within 24 hours</p>
              </motion.div>
              <motion.div
                variants={staggerItemSoft}
                className="border-l-2 border-gray-300 pl-6"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <h3 className="text-xl mb-2">Discovery Call</h3>
                <p className="text-gray-600">Schedule a consultation to discuss your needs in detail</p>
              </motion.div>
              <motion.div
                variants={staggerItemSoft}
                className="border-l-2 border-gray-300 pl-6"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <h3 className="text-xl mb-2">Proposal</h3>
                <p className="text-gray-600">Receive a tailored solution and project roadmap</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
