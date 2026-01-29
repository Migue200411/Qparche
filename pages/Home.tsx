import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy, CheckCircle, Palette, Truck, Sun } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Clean & Readable but Alive */}
      <div className="relative bg-white pt-24 pb-24 border-b border-slate-100 overflow-hidden">
        {/* Subtle Corner Splashes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

          {/* Badge - Clean */}
          <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-orange-50/80 backdrop-blur-sm text-q-carnaval font-black text-sm mb-8 tracking-widest uppercase border border-orange-100/50">
            <Sun className="w-4 h-4 text-q-carnaval" />
            Barranquilla Style
          </span>

          {/* Main Title - High Contrast */}
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight mb-6 text-slate-900 leading-[0.95]">
            Q'<span className="text-q-carnaval">Parche</span><br />
            <span className="text-4xl md:text-5xl font-bold text-slate-500 block mt-4">
              camisetas pa' tu parche
            </span>
          </h1>

          {/* Subtitle - Readable */}
          <p className="mt-4 max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
            Carnaval, rumba y deportiva. Sin enredos, pídela y te la llevamos.
          </p>

          {/* CTA Buttons - Clear Hierarchy */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <Link
              to="/deportiva#f1"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-100 transition-transform hover:-translate-y-1"
            >
              F1 🏎️
            </Link>
            <Link
              to="/carnaval"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-q-carnaval hover:bg-orange-600 shadow-lg shadow-orange-100 transition-transform hover:-translate-y-1"
            >
              Ver Carnaval 🎉
            </Link>
            <Link
              to="/deportiva"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-q-sport hover:bg-blue-600 shadow-lg shadow-blue-100 transition-transform hover:-translate-y-1"
            >
              Ver Deportiva ⚽️
            </Link>
            <Link
              to="/crear"
              className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border border-slate-200 hover:border-q-carnaval hover:text-q-carnaval transition-all"
            >
              Subir diseño 🎨
            </Link>
          </div>
        </div>
      </div>

      {/* Collections Block - Reduced Size & Better Overlay */}
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Subtle background variation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card F1 */}
            <Link to="/deportiva#f1" className="group relative overflow-hidden rounded-[2rem] h-[380px] shadow-xl shadow-slate-200 cursor-pointer bg-white transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity"></div>
              <img
                src="/images/Ferrari.jpeg"
                alt="F1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">
                    <span className="text-2xl">🏎️</span>
                  </div>
                  <span className="text-red-200 font-bold tracking-wider text-sm uppercase">Colección</span>
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-2 leading-none">F1</h3>
                <p className="text-slate-200 text-lg font-medium">Estilo Fórmula 1, velocidad y diseño.</p>
              </div>
            </Link>

            {/* Card Carnaval - Reduced Height */}
            <Link to="/carnaval" className="group relative overflow-hidden rounded-[2rem] h-[380px] shadow-xl shadow-slate-200 cursor-pointer bg-white transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity"></div>
              <img
                src="/images/carnaval_baila_asi.jpg"
                alt="Carnaval"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-100"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">
                    <Sparkles className="text-white w-6 h-6" />
                  </div>
                  <span className="text-orange-200 font-bold tracking-wider text-sm uppercase">Colección</span>
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-2 leading-none">Carnaval</h3>
                <p className="text-slate-200 text-lg font-medium">Frases, marimondas y pura alegría.</p>
              </div>
            </Link>

            {/* Card Deportiva - Reduced Height */}
            <Link to="/deportiva" className="group relative overflow-hidden rounded-[2rem] h-[380px] shadow-xl shadow-slate-200 cursor-pointer bg-white transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity"></div>
              <img
                src="/images/sport_haikyuu_black.jpg"
                alt="Deportiva"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">
                    <Trophy className="text-white w-6 h-6" />
                  </div>
                  <span className="text-blue-200 font-bold tracking-wider text-sm uppercase">Zona</span>
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-2 leading-none">Deportiva</h3>
                <p className="text-slate-200 text-lg font-medium">Equipos, parches de fútbol y uniformes.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Steps Section - Warm Background */}
      <div className="bg-white py-24 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle corner touches */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-50/40 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black text-slate-900">¿Cómo armar tu parche?</h2>
            <p className="mt-4 text-slate-500 text-xl font-medium">Facilito, en tres pasos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-q-carnaval group-hover:scale-110 transition-transform shadow-sm">
                <Palette className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Elige o Sube</h3>
              <p className="text-slate-500 px-4">Escoge del catálogo o sube tu propio diseño.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-q-sport group-hover:scale-110 transition-transform shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Confirma y Paga</h3>
              <p className="text-slate-500 px-4">Todo por WhatsApp. Anticipo del 50% para arrancar.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-q-mint group-hover:scale-110 transition-transform shadow-sm">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Recibe en casa</h3>
              <p className="text-slate-500 px-4">Envío incluido en Barranquilla y Soledad. En unos días la tienes lista.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;