import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: "/Kalyan_Darwaja.png", alt: "Kalyan Darwaja view" },
    { src: "/Pune_Darwaja.png", alt: "Pune Darwaja view" },
    { src: "/Devtake.png", alt: "Dev Taki water tanks" },
    { src: "/Chhatrapati_Rajaram_maharaj_memorial.png", alt: "Chhatrapati Rajaram maharaj memorial" },
    { src: "/memorial.png", alt: "Surveer Tanaji Malusare Samadhi" },
    { src: "/kondhaneshwar.png", alt: "Kondhaneshwar" },
    { src: "/image(7).png", alt: "Stone walls of Sinhagad" },
    { src: "/doordarshan_towers.png", alt: "Doordarshan towers" },
  ];

  return (
    <section className="py-24 px-6 bg-parchment min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-heading text-basalt-dark mb-4 text-center"
        >
          The Lion's Gallery
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-basalt-light mb-12 text-center max-w-2xl mx-auto border-b-2 border-regal pb-8"
        >
          Explore the rugged terrain and architectural marvels of the fortress.
        </motion.p>
        
        {/* Animated Google Earth Map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-sm overflow-hidden border-4 border-basalt/10 shadow-2xl w-full h-[400px] md:h-[500px] relative group"
        >
          <div className="absolute top-4 left-4 bg-basalt text-bhagwa font-sans font-bold px-4 py-2 rounded-sm shadow-md z-10 text-sm uppercase tracking-wider pointer-events-none">
            Satellite Terrain View
          </div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15144.172757271813!2d73.74411130638127!3d18.365313360662664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc293c65c364177%3A0x6b4ff02517861962!2sSinhagad%20Fort!5e1!3m2!1sen!2sin!4v1708800000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 grayscale-[20%] contrast-125" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sinhagad Fort Google Earth View"
          ></iframe>
        </motion.div>

        {/* Animated Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              // 1. Start invisible and slightly pushed down
              initial={{ opacity: 0, y: 50 }}
              
              // 2. Animate to full visibility and original position
              whileInView={{ opacity: 1, y: 0 }}
              
              // 3. 'once: true' means it only animates the first time you scroll to it
              viewport={{ once: true, margin: "-50px" }}
              
              // 4. Multiply the delay by the index (0.1s, 0.2s, 0.3s) for the stagger effect!
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className="overflow-hidden rounded-sm border-4 border-basalt/10 shadow-lg group flex flex-col"
            >
              <div className="overflow-hidden h-64">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-basalt text-parchment text-center py-3 font-sans text-sm tracking-wide uppercase font-semibold border-t-2 border-regal">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;