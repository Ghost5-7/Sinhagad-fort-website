import React from 'react';

const History = () => {
  return (
    <section className="py-24 px-6 bg-parchment text-basalt relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-heading text-bhagwa-dark mb-8">
            The Epic History
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Originally known as <strong>Kondhana</strong>, the fort's history stretches back over two millennia, with the Kaundinya Muni caves pointing to ancient origins. But its most defining moment came in the dead of night in 1670.
          </p>
          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Commanded by Chhatrapati Shivaji Maharaj to recapture the formidable fortress from the Mughals, the legendary Maratha commander <strong>Tanaji Malusare</strong> led a daring assault. He scaled the steep, seemingly impregnable western cliffs to breach the defenses.
          </p>
          
          {/* The Famous Quote */}
          <blockquote className="border-l-4 border-regal pl-6 my-10 bg-basalt/5 py-4 pr-4 rounded-r-lg shadow-sm">
            <p className="italic text-3xl font-heading text-basalt-dark mb-2">
              "Gad aala, pan sinha gela"
            </p>
            <span className="text-base font-sans text-basalt-light uppercase tracking-wider font-bold">
              (The fort is captured, but the lion is lost)
            </span>
          </blockquote>
          
          <p className="text-lg md:text-xl leading-relaxed">
            These immortal words were spoken by Shivaji Maharaj upon hearing of Tanaji's ultimate sacrifice during the victorious battle. In his honor, Kondhana was renamed Sinhagad (The Lion's Fort).
          </p>
        </div>

        {/* Image Container with Arched Design */}
        <div className="rounded-t-full border-8 border-basalt/10 overflow-hidden shadow-2xl h-[500px] lg:h-[700px] relative">
          <div className="absolute inset-0 bg-bhagwa mix-blend-multiply opacity-20 hover:opacity-0 transition-opacity duration-500 z-10"></div>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tanaji_Malusare_Memorial%2C_Sinhagad.jpg/800px-Tanaji_Malusare_Memorial%2C_Sinhagad.jpg" 
            alt="Tanaji Malusare Memorial" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default History;