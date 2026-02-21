import React from 'react';

const FloraFauna = () => {
  return (
    <section className="py-24 px-6 bg-parchment text-basalt border-t-4 border-bhagwa/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading text-bhagwa-dark mb-4">
            The Living Sahyadris
          </h2>
          <p className="text-xl text-basalt-light max-w-2xl mx-auto">
            Beyond its stone walls, Sinhagad is a sanctuary for the rich biodiversity of the Western Ghats. The landscape transforms dramatically from golden-brown in the summer to a vibrant, cascading green during the monsoons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flora Section */}
          <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-regal">
            <h3 className="text-3xl font-heading text-basalt-dark mb-4 flex items-center gap-3">
              <span className="text-bhagwa">✿</span> Flora
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              The slopes are covered in dry deciduous forests mixed with patches of semi-evergreen vegetation. 
            </p>
            <ul className="list-disc list-inside space-y-2 text-basalt-light">
              <li>Rich in medicinal plants utilized by local villagers.</li>
              <li>Home to the rare <strong>Karvi flower</strong>, which famously blooms only once every seven years, painting the hillsides in vibrant purple.</li>
              <li>Dense canopies that provide natural shading along the trekking routes.</li>
            </ul>
          </div>

          {/* Fauna Section */}
          <div className="bg-basalt p-8 rounded-sm shadow-md border-t-4 border-bhagwa text-parchment">
            <h3 className="text-3xl font-heading text-regal mb-4 flex items-center gap-3">
              <span className="text-bhagwa">🐾</span> Fauna
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-parchment/90">
              The fort's isolation makes it a haven for various species, especially for birdwatchers and nature enthusiasts.
            </p>
            <ul className="list-disc list-inside space-y-2 text-parchment/80">
              <li>Troops of <strong>Bonnet Macaques</strong> are the most common residents, often seen patrolling the ancient walls.</li>
              <li>A paradise for birdwatchers: spot Crested Buntings, Sunbirds, and even birds of prey riding the thermal currents.</li>
              <li>During the post-monsoon season, the area is teeming with diverse butterfly species.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloraFauna;