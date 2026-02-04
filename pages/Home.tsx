import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy, CheckCircle, Palette, Truck, Sun, MessageCircle, Shirt, Heart, Zap, Flame, Star, Tag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section - Neutral & Clean */}
      <div className="relative bg-white pt-24 pb-20 border-b border-slate-100 overflow-hidden">
        {/* Subtle Blobs - No Pink */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
            Camisetas <span className="text-q-sport">Personalizadas</span><br />
            para todos.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
            F1, deportes, amor & amistad y diseños de la comunidad.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <a
              href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-xl shadow-green-100 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
            <Link
              to="/deportiva"
              className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border border-slate-200 hover:border-q-sport hover:text-q-sport transition-all flex items-center justify-center"
            >
              Ver diseños
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Amor & Amistad Card */}
          <Link to="/amor-amistad" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-lg text-white font-bold text-xs mb-3 border border-white/20">
                  Nueva Colección
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2">Amor & Amistad</h2>
                <p className="text-indigo-100 text-lg font-medium">Diseños únicos para compartir.</p>
              </div>
            </div>
            {/* Decoration Image - Rotated */}
            <img src="/images/uploaded_media_0_1770222971295.png" className="absolute bottom-0 right-0 w-64 h-64 object-contain translate-x-1/4 translate-y-1/4 opacity-90 group-hover:scale-110 transition-transform duration-500 rotate-12" alt="Decor" />
          </Link>

          {/* F1 Card */}
          <Link to="/f1" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="relative z-20">
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2">Fórmula 1</h2>
                <p className="text-slate-400 text-lg font-medium">Ferrari, McLaren, Red Bull y más.</p>
              </div>
            </div>
            <img src="/images/f1_ferrari_new.png" className="absolute top-1/2 right-0 w-72 h-72 object-contain -translate-y-1/2 translate-x-12 rotate-[-12deg] group-hover:rotate-[-6deg] transition-transform duration-500 drop-shadow-2xl" alt="Decor" />
          </Link>

          {/* Deportiva Card */}
          <Link to="/deportiva" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 transition-all duration-300 bg-white border border-slate-100">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-q-sport mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-2">Deportiva</h2>
                <p className="text-slate-500 text-lg font-medium">Fútbol, Voley y todo lo que te mueve.</p>
              </div>
              <div className="self-start px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl group-hover:bg-q-sport group-hover:text-white transition-colors">
                Ver Catálogo
              </div>
            </div>
          </Link>

          {/* Custom Design Card */}
          <Link to="/crear" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 transition-all duration-300 bg-slate-900 border border-slate-800">
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Palette className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-white mb-2">Crea tu Diseño</h2>
                <p className="text-slate-400 text-lg font-medium">¿Tienes una idea? Nosotros la hacemos realidad.</p>
              </div>
              <div className="self-start px-6 py-3 bg-white text-slate-900 font-bold rounded-xl group-hover:bg-white/90 transition-colors">
                Subir Idea
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Home;