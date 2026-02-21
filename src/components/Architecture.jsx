import React from 'react';

const Architecture = () => {
  // A simple array of highlights to map through for clean code
  const features = [
    {
      title: "Kalyan & Pune Darwaja",
      desc: "The two main entrances. Built at sharp angles to prevent charging elephants from breaking the doors, these heavily fortified gates are marvels of defensive architecture."
    },
    {
      title: "Dev Taki (Sacred Tanks)",
      desc: "Natural rock-cut cisterns that hold sweet, cold spring water year-round. It is said that Mahatma Gandhi requested water from Dev Taki whenever he stayed in Pune."
    },
    {
      title: "Kade Lote",
      desc: "A sheer cliff face historically used as an execution point, offering dizzying, panoramic views of the surrounding valleys."
    }
  ];

  return (
    <section className="py-24 px-6 bg-basalt text-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading text-regal mb-4">Fortified Brilliance</h2>
          <p className="text-xl text-parchment/80 max-w-2xl mx-auto">
            Sinhagad did not rely heavily on man-made walls; instead, it utilized the steep, natural volcanic rock slopes of the Sahyadris as its primary defense.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-basalt-light p-8 rounded-sm border border-basalt-light hover:border-regal transition-colors duration-300 shadow-xl group">
              <h3 className="text-2xl font-heading text-bhagwa group-hover:text-regal transition-colors duration-300 mb-4">
                {feature.title}
              </h3>
              <p className="text-parchment/90 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;