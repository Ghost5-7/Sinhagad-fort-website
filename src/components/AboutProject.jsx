import React from 'react';
import { motion } from 'framer-motion';

const AboutProject = () => {
  const innovations = [
    {
      title: "Full-Stack AI Integration",
      icon: "🧠",
      desc: "Implemented a secure serverless backend using Vercel Functions to route queries to the Gemini API. Built a custom defensive sanitizer to strictly format chat history and avoid state-mismatch crashes."
    },
    {
      title: "Interactive Topography",
      icon: "🗺️",
      desc: "Embedded specialized satellite iframes with custom CSS-injected filters (grayscale and contrast adjustments) to match the historical aesthetic while providing interactive geographical context."
    },
    {
      title: "Cinematic Framer Motion UI",
      icon: "✨",
      desc: "Engineered a native-app feel using Framer Motion for scroll-linked animations, spatial layout transitions, and staggered DOM rendering based on viewport intersections."
    },
    {
      title: "Responsive Component Architecture",
      icon: "⚛️",
      desc: "Built a fully modular React architecture styled with Tailwind CSS v4, ensuring absolute responsiveness across mobile, tablet, and ultra-wide desktop displays."
    }
  ];

  return (
    <section className="py-24 px-6 bg-parchment min-h-screen text-basalt">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-heading text-basalt-dark mb-4">
            Behind the Project
          </h1>
          <p className="text-xl text-basalt-light max-w-2xl mx-auto border-b-2 border-regal pb-8">
            An overview of the software architecture and design systems powering the Sinhagad Heritage experience.
          </p>
        </motion.div>

        
        {/* --- Section 2: Design System & Theme --- */}
        <div>
          <h2 className="text-3xl font-heading text-bhagwa-dark mb-10 text-center">UI/UX Design System</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Colors */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-basalt text-parchment p-8 rounded-sm shadow-xl"
            >
              <h3 className="text-2xl font-heading text-regal mb-6 border-b border-basalt-light pb-4">The Color Palette</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF671F] border-2 border-parchment/20 shrink-0"></div>
                  <div>
                    <strong className="block text-bhagwa tracking-wider uppercase text-sm">Bhagwa (Maratha Saffron)</strong>
                    <span className="text-sm opacity-80">Represents the rich history, courage, and legacy of the Maratha empire. Used for primary calls-to-action and highlights.</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-parchment/20 shrink-0"></div>
                  <div>
                    <strong className="block text-white tracking-wider uppercase text-sm">Basalt Dark</strong>
                    <span className="text-sm opacity-80">Inspired by the dark, volcanic basalt rock that makes up the impregnable cliffs of the Sahyadri mountains.</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F4F1EA] border-2 border-basalt-light shrink-0"></div>
                  <div>
                    <strong className="block text-[#F4F1EA] tracking-wider uppercase text-sm">Parchment</strong>
                    <span className="text-sm opacity-80">Evokes ancient scrolls and historical documents. Provides a soft, highly readable background that reduces eye strain.</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-2 border-parchment/20 shrink-0"></div>
                  <div>
                    <strong className="block text-regal tracking-wider uppercase text-sm">Regal Gold</strong>
                    <span className="text-sm opacity-80">Used sparingly for borders and accents to add a subtle touch of royal heritage.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* The Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-basalt"
            >
              <h3 className="text-2xl font-heading text-basalt-dark mb-6 border-b border-gray-200 pb-4">Typography</h3>
              
              <div className="mb-8">
                <h4 className="text-4xl text-basalt-dark mb-2" style={{ fontFamily: '"Yatra One", system-ui' }}>Yatra One</h4>
                <p className="text-sm text-basalt-light uppercase tracking-wider font-bold mb-2">Display & Headings</p>
                <p className="text-basalt/80 leading-relaxed">
                  A Devanagari-inspired typeface. It brings an immediate sense of Indian heritage and ancient script to the English language, creating a distinct cultural identity for the project.
                </p>
              </div>

              <div>
                <h4 className="text-4xl text-basalt-dark mb-2" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600 }}>Inter</h4>
                <p className="text-sm text-basalt-light uppercase tracking-wider font-bold mb-2">Body & UI Elements</p>
                <p className="text-basalt/80 leading-relaxed">
                  A highly legible, modern sans-serif font engineered for computer screens. It creates a stark, beautiful contrast against the historical display font, ensuring modern usability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;