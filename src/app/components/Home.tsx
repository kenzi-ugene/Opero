import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BrandSectionImage } from "./BrandSectionImage";
import { SITE_IMAGES } from "../content/siteImages";
import { AnimatedSection } from "./AnimatedSection";
import { EASE, heroContainer, heroItem, VIEWPORT_DEFAULT } from "../motion/siteMotion";
import React from "react";

export function Home() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Modern sites and web applications tailored to your brand, performance, and growth goals.",
    },
    {
      number: "02",
      title: "System Development",
      description:
        "Custom systems and business software engineered for reliability, scale, and maintainability.",
    },
    {
      number: "03",
      title: "App Development",
      description:
        "Native and cross-platform mobile and web apps with polished UX and solid architecture.",
    },
    {
      number: "04",
      title: "Web Design",
      description:
        "Visual design, UX, and design systems that make complex products feel simple and engaging.",
    },
    {
      number: "05",
      title: "IT Consulting",
      description:
        "Strategy, architecture, and technology choices aligned with your roadmap—not generic advice.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects" },
    { number: "200+", label: "Clients" },
    { number: "10+", label: "Years" },
    { number: "50+", label: "Experts" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-32">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={heroContainer}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8 leading-[1.1]"
              variants={heroItem}
            >
              IT Solutions<br />
              <span className="text-gray-400">Built Around You</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
              variants={heroItem}
            >
              Opero specializes in website development, system development, apps, web design, consulting, and more—so your technology works as hard as your team does.
            </motion.p>
            <motion.div variants={heroItem}>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300 group active:scale-[0.98]"
              >
                START A PROJECT
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                }}
              >
                <div className="text-5xl font-light text-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Editorial photography — global technology / scale */}
      <AnimatedSection className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <BrandSectionImage
            {...SITE_IMAGES.homeTechnology}
            className="h-[min(70vh,600px)] w-full"
          />
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Our Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              From first sketch to production systems
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                }}
              >
                <motion.div
                  className="flex items-start space-x-8 pb-8 border-b border-gray-800 transition-colors duration-300 group-hover:border-white"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <span className="text-6xl font-light text-gray-800 transition-colors duration-300 group-hover:text-white">
                    {service.number}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20">
            <Link
              to="/services"
              className="inline-flex items-center text-sm tracking-wider border-b-2 border-white pb-1 hover:border-gray-400 transition-colors duration-300 group active:scale-[0.98]"
            >
              VIEW ALL SERVICES
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Philosophy Section */}
      <AnimatedSection className="py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <BrandSectionImage {...SITE_IMAGES.homePrecision} className="h-[500px] w-full" />
            <div>
              <h2 className="text-5xl font-light tracking-tight text-black mb-8">
                Precision Meets Innovation
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Every project is an opportunity to push boundaries and redefine what's possible in digital craftsmanship.
                </p>
                <p>
                  Our approach combines technical excellence with strategic thinking, ensuring that every solution we deliver is not just functional, but transformative.
                </p>
                <p>
                  We believe in the power of simplicity—stripping away the unnecessary to reveal pure, elegant solutions that drive real business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black mb-8">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Begin your journey towards digital excellence
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