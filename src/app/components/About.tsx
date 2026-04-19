import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BrandSectionImage } from "./BrandSectionImage";
import { SITE_IMAGES } from "../content/siteImages";
import { AnimatedSection } from "./AnimatedSection";
import { heroContainer, heroItem, staggerContainer, staggerItem, VIEWPORT_DEFAULT } from "../motion/siteMotion";
import React from "react";

export function About() {
  const principles = [
    {
      title: "Excellence",
      description: "We pursue perfection in every detail, never settling for good enough.",
    },
    {
      title: "Innovation",
      description: "We challenge conventions and embrace emerging technologies.",
    },
    {
      title: "Integrity",
      description: "We build lasting relationships through transparency and trust.",
    },
    {
      title: "Impact",
      description: "We create solutions that drive meaningful business transformation.",
    },
  ];

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
              About Us
            </motion.h1>
            <motion.p className="text-xl text-gray-600 leading-relaxed" variants={heroItem}>
              Opero—IT solutions spanning websites, systems, apps, design, and consulting
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <h2 className="text-4xl font-light tracking-tight text-black mb-8">Our Story</h2>
            </div>
            <motion.div
              className="space-y-8 text-gray-600 leading-relaxed text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_DEFAULT}
              variants={staggerContainer}
            >
              {[
                "Opero was founded to help organizations ship reliable IT solutions—whether that means a new website, a custom system, mobile apps, thoughtful web design, or hands-on consulting to get complex initiatives unstuck.",
                "Our teams blend engineering, design, and strategy so projects stay coherent from discovery through launch and beyond. We've delivered hundreds of engagements across industries, from greenfield builds to modernization and integration work.",
                "We believe great IT is clear, maintainable, and aligned with how people actually work. That means solid architecture, honest timelines, and design that earns trust—without unnecessary complexity.",
              ].map((paragraph, i) => (
                <motion.p key={i} variants={staggerItem}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Photography — collaboration and culture */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <BrandSectionImage {...SITE_IMAGES.aboutCollaboration} className="h-[min(70vh,600px)] w-full" />
        </div>
      </AnimatedSection>

      {/* Philosophy Section */}
      <AnimatedSection className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Our Philosophy</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Principles that guide our work and define our culture
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            variants={staggerContainer}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="border-t border-gray-800 pt-8"
                variants={staggerItem}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <h3 className="text-3xl font-light mb-4">{principle.title}</h3>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Expertise Section */}
      <AnimatedSection className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="origin-center"
            >
              <BrandSectionImage {...SITE_IMAGES.aboutDevelopment} className="h-[500px] w-full" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-light tracking-tight text-black mb-12">Our Expertise</h2>
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_DEFAULT}
                variants={staggerContainer}
              >
                {[
                  "React & Vue.js",
                  "Node.js & Python",
                  "Cloud Architecture",
                  "Mobile Development",
                  "DevOps & CI/CD",
                  "Database Design",
                  "API Development",
                  "UI/UX Design",
                  "Cybersecurity",
                  "System Architecture",
                  "Agile Methodology",
                  "Quality Assurance",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-sm text-gray-600 cursor-default"
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      {/* <AnimatedSection className="py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Trusted Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem}>
                <div className="text-5xl font-light text-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection> */}

      {/* CTA Section */}
      <AnimatedSection className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Discover how we can help achieve your vision
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300 group active:scale-[0.98]"
            >
              GET IN TOUCH
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
