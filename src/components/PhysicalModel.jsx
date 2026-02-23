import React from 'react';
import { motion } from 'framer-motion';

const PhysicalModel = () => {
  // 1. Hardware Innovations Data
  const hardwareFeatures = [
    {
      title: "Automated Proximity Gate",
      image: "/innovation1.jpeg",
      desc: "To simulate advanced access control on the historical fort, we engineered a smart entry system. Utilizing an HC-SR04 ultrasonic sensor paired with micro-servos, the main gates automatically detect approaching visitors and open dynamically."
    },
    {
      title: "Renewable Solar Illumination",
      image: "/innovation2.jpeg",
      desc: "We integrated a sustainable energy array using miniature solar panels mounted on the terrain. These panels harness real-world ambient light to power the LED illumination across the model, demonstrating practical renewable energy applications in heritage sites."
    },
    {
      title: "Virtual Vaidya & Local Flora",
      image: "/virtualvidya.png",
      desc: "The physical terrain features scale representations of the local medicinal herbs found on the Sahyadris. This physical flora directly ties into our software ecosystem, acting as the real-world counterpart to our Gemini AI Virtual Vaidya."
    }
  ];

  // 2. Model Decorations Gallery Data
  // Note: Update these 'src' paths with the actual names of the close-up pictures in your public folder!
  const modelGallery = [
        { src: "/gallery1.jpeg"},
        { src: "/gallery2.jpeg"},
        { src: "/gallery3.jpeg"},
        { src: "/gallery4.jpeg"},
        { src: "/model.jpeg"},
        
  ];

  return (
    <section className="py-24 px-6 bg-parchment min-h-screen text-basalt overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading text-basalt-dark mb-4">
            The Physical Model
          </h1>
          <p className="text-xl text-basalt-light max-w-2xl mx-auto border-b-2 border-regal pb-8">
            Bridging historical preservation with hardware engineering and physical craftsmanship.
          </p>
        </motion.div>

        {/* Full Width Hero Image of the Model - Uncropped Fix Applied */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full rounded-sm overflow-hidden shadow-2xl border-4 border-basalt/10 mb-24 relative group bg-basalt-dark"
        >
          <img 
            src="/model.jpeg" 
            alt="Full Top-Down View of Sinhagad 3D Model" 
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-parchment">
            <h3 className="text-2xl font-heading text-bhagwa tracking-wide drop-shadow-md">Handcrafted Terrain</h3>
            <p className="font-sans text-sm opacity-90 drop-shadow-md">A fully scaled topographic recreation of Sinhagad Fort.</p>
          </div>
        </motion.div>

        {/* Hardware Innovations Layout */}
        <div className="space-y-24 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-bhagwa-dark mb-4">Hardware Integrations</h2>
            <p className="text-lg text-basalt/80 max-w-2xl mx-auto">
              We elevated a traditional diorama into an interactive engineering project by embedding sensors, microcontrollers, and renewable energy sources directly into the topography.
            </p>
          </div>

          {hardwareFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 h-[350px] rounded-sm overflow-hidden shadow-xl border border-basalt/10 bg-basalt-dark">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="w-12 h-1 bg-bhagwa mb-6"></div>
                <h3 className="text-3xl font-heading text-basalt-dark mb-4">{feature.title}</h3>
                <p className="text-lg text-basalt/80 leading-relaxed font-sans">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Model Decorations Gallery */}
        <div className="pt-20 border-t-2 border-regal/30">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-bhagwa-dark mb-4">Crafting the Details</h2>
            <p className="text-lg text-basalt/80 max-w-2xl mx-auto">
              A closer look at the handcrafted decorations, fort structures, and miniature figurines that bring the history of Sinhagad to life on our model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modelGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-sm overflow-hidden shadow-lg border-2 border-basalt/10 bg-white flex flex-col"
              >
                <div className="h-48 md:h-64 overflow-hidden bg-basalt-dark">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-basalt text-parchment text-center flex-grow flex flex-col justify-center border-t-2 border-regal">
                  <h4 className="font-heading text-lg text-bhagwa mb-1">{item.title}</h4>
                  <p className="font-sans text-xs opacity-80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhysicalModel;