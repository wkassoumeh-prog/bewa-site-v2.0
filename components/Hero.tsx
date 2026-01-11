import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Try the local assets folder first
  const [imgSrc, setImgSrc] = useState('assets/deer.jpg');
  
  // High quality fallback if local path fails in this environment
  const fallbackImg = "https://cdn.pixabay.com/photo/2015/10/12/15/18/deer-984573_1280.jpg";

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-forest-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgSrc}
          onError={() => setImgSrc(fallbackImg)}
          alt="Wild Deer in Forest" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for general readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay to ensure white text pops against any background */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/20 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-gold-500/50 rounded-full text-gold-500 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in-up backdrop-blur-md bg-forest-950/40">
          Hessen & Umgebung
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
          Ihr Spezialist für <br/>
          <span className="text-gold-500">Wildabholung</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-lg">
          Professioneller Wildankauf und zuverlässige Logistik. Frisches Wildbret direkt aus den Kühlkammern der Jäger.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#wildmeldung" 
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-forest-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            Wild jetzt melden
          </a>
          <a 
            href="#ablauf" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-forest-900 transition-all backdrop-blur-sm bg-white/5"
          >
            So funktioniert es
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        {/* <a href="#wildmeldung" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-10 h-10" />
        </a> */}
      </div>
    </section>
  );
};

export default Hero;