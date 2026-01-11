import React from 'react';
import { Phone, Printer, Smartphone, MapPin, Clock, CheckCircle, Truck, FileCheck } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeAi from './components/RecipeAi';
import flotteImg from './flotte.jpg';
import { CONTACT_INFO, PROCESS_STEPS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />

      {/* Wildmeldung Section */}
      <section id="wildmeldung" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">Wildmeldung</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Melden Sie Ihr Wildbret einfach und schnell. Um eine reibungslose Abholung zu garantieren, benötigen wir Ort und Stückzahl.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-forest-50 p-8 rounded-2xl border border-forest-100 text-center hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-2">Per SMS</h3>
              <p className="text-gray-600 mb-4">Senden Sie Ort & Stückzahl an</p>
              <p className="text-2xl font-bold text-forest-700">{CONTACT_INFO.phone}</p>
            </div>

            <div className="bg-forest-50 p-8 rounded-2xl border border-forest-100 text-center hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-2">Per Anruf</h3>
              <p className="text-gray-600 mb-4">Rufen Sie uns direkt an</p>
              <p className="text-2xl font-bold text-forest-700">{CONTACT_INFO.phone}</p>
            </div>

            <div className="bg-forest-50 p-8 rounded-2xl border border-forest-100 text-center hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Printer className="w-8 h-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-2">Per Fax</h3>
              <p className="text-gray-600 mb-4">Senden Sie uns ein Fax an</p>
              <p className="text-2xl font-bold text-forest-700">{CONTACT_INFO.fax}</p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gold-500/10 p-6 rounded-xl inline-block w-full">
            <p className="text-forest-800 font-medium flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              Meldungen bis Sonntags 18:00 Uhr. In Absprache auch Montags bis 09:00 Uhr.
            </p>
          </div>
        </div>
      </section>

      {/* Drückjagd Section */}
      <section id="drueckjagd" className="py-24 bg-forest-900 text-white relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
               <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Wichtig für die Saison</span>
               <h2 className="text-4xl font-serif font-bold mb-6 mt-2">Drückjagdanmeldung</h2>
               <p className="text-forest-100 mb-6 leading-relaxed">
                 Bis zum 1. Oktober bitten wir um Mitteilung Ihrer geplanten Jagdstrecke, wenn Sie die Wildabholung in Anspruch nehmen möchten. 
                 Ab einer Menge von ca. 15 Tieren holen wir diese zum vereinbarten Termin direkt aus Ihrem Revier ab.
               </p>
               <ul className="space-y-4">
                 {[
                   "Datum & Uhrzeit",
                   "Kontaktdaten (Handynummer) des Verantwortlichen",
                   "Standort (Koordinaten bevorzugt)",
                   "Ungefähre Anzahl der Tiere"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                     <span className="text-forest-50">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="md:w-1/2 bg-forest-800 p-8 rounded-2xl shadow-2xl border border-forest-700">
                <h3 className="text-xl font-bold mb-6 text-gold-500 flex items-center">
                  <FileCheck className="mr-2" />
                  Daten bereithalten
                </h3>
                <div className="space-y-4 text-sm text-forest-200">
                  <p>Die Verladung erfolgt mühelos, schnell und tierschonend durch unser Fachpersonal.</p>
                  <div className="bg-forest-900/50 p-4 rounded-lg border border-forest-600">
                    <p className="font-bold text-white mb-1">Hinweis zur Planung:</p>
                    <p>Je genauer Ihre Angaben sind, desto effizienter können wir unsere Touren planen und eine pünktliche Abholung garantieren.</p>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">So funktioniert es</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-forest-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white border-4 border-forest-100 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 group-hover:border-gold-500">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-forest-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Info */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src={flotteImg} 
              alt="Wild in der Natur" 
              className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-full object-cover h-[400px] bg-forest-100"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
               <Truck className="w-6 h-6 text-gold-500" />
               <span className="text-forest-600 font-bold uppercase tracking-wide">Unsere Flotte</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-forest-900 mb-6">Modern & Gekühlt</h2>
            <p className="text-lg text-gray-600 mb-6">
              Die BEWA-FOOD kauft jede Woche frisches Wildbret direkt aus den Kühlkammern der Jäger oder vom Streckenplatz.
            </p>
            <p className="text-lg text-gray-600">
              Unsere Flotte ist modern ausgestattet! Wir nutzen spezialisierte Rohrbahnfahrzeuge, um eine hygienische und unterbrechungsfreie Kühlkette zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      {/* AI Recipe Section */}
      <RecipeAi />

      {/* Contact & Footer */}
      <footer id="kontakt" className="bg-forest-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span className="text-forest-200">
                    {CONTACT_INFO.owner}<br />
                    {CONTACT_INFO.address.map((line, i) => <span key={i} className="block">{line}</span>)}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-forest-200 hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Printer className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  <span className="text-forest-200">{CONTACT_INFO.fax}</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Links</h3>
              <ul className="space-y-2">
                <li><a href="#wildmeldung" className="text-forest-300 hover:text-gold-500 transition-colors">Wild melden</a></li>
                <li><a href="#drueckjagd" className="text-forest-300 hover:text-gold-500 transition-colors">Drückjagd</a></li>
                <li><a href="#ai-chef" className="text-forest-300 hover:text-gold-500 transition-colors">Rezept Generator</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Rechtliches</h3>
              <div className="text-forest-300 space-y-2 text-sm">
                <p>Steuer-Nr: {CONTACT_INFO.taxId}</p>
                <p>Inhaber: {CONTACT_INFO.owner}</p>
                <p className="mt-4 opacity-50">
                  © {new Date().getFullYear()} BEWA-FOOD.<br/>Alle Rechte vorbehalten.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-forest-900 pt-8 text-center text-forest-400 text-sm">
            <p>Designed with nature in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;