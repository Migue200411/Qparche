import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Palette, MessageCircle, Heart, Zap, Pen, GraduationCap, Package } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section - Vibrant & Alive */}
      <div className="relative bg-gradient-to-br from-white via-orange-50/40 to-rose-50/30 pt-24 pb-20 border-b border-orange-100/50 overflow-hidden">
        {/* Warm Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
            Camisetas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Personalizadas</span><br />
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
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-xl shadow-green-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
            <Link
              to="/deportiva"
              className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-orange-400 hover:text-orange-600 hover:shadow-lg hover:shadow-orange-100 transition-all flex items-center justify-center"
            >
              Ver diseños
            </Link>
          </div>

          {/* Micro-benefits */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-orange-100/50 shadow-sm">
              <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 shrink-0">
                <Pen className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">Personaliza nombre y número</p>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-green-100/50 shadow-sm">
              <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">Entrega en tu universidad sin costo</p>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-rose-100/50 shadow-sm">
              <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500 shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">Pedidos bajo encargo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Amor & Amistad Card */}
          <Link to="/amor-amistad" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-rose-200/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-300/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl translate-y-1/3"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-900/20">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-white/25 backdrop-blur rounded-lg text-white font-bold text-xs mb-3 border border-white/30 shadow-sm">
                  Nueva Colección
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2 drop-shadow-md">Amor & Amistad</h2>
                <p className="text-pink-100 text-lg font-medium mb-1">El regalo perfecto para quien siempre está.</p>
                <p className="text-pink-200/70 text-sm font-semibold">Packs en pareja desde $70.000</p>
              </div>
            </div>
            <img src="/images/uploaded_media_0_1770222971295.png" className="absolute bottom-0 right-0 w-64 h-64 object-contain translate-x-1/4 translate-y-1/4 opacity-90 group-hover:scale-110 transition-transform duration-500 rotate-12 drop-shadow-2xl" alt="Decor" />
          </Link>

          {/* F1 Card */}
          <Link to="/f1" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-red-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-300/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-red-500/20 backdrop-blur rounded-2xl flex items-center justify-center text-red-400 shadow-lg shadow-red-900/20">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-red-500/30 backdrop-blur rounded-lg text-red-300 font-bold text-xs mb-3 border border-red-500/30">
                  9 Escuderías
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2">Fórmula <span className="text-red-500">1</span></h2>
                <p className="text-slate-300 text-lg font-medium mb-1">Velocidad, adrenalina y estilo.</p>
                <p className="text-slate-500 text-sm font-semibold">Ferrari, McLaren, Red Bull y más</p>
              </div>
            </div>
            <img src="/images/f1_ferrari_new.png" className="absolute top-1/2 right-0 w-72 h-72 object-contain -translate-y-1/2 translate-x-12 rotate-[-12deg] group-hover:rotate-[-6deg] transition-transform duration-500 drop-shadow-2xl" alt="Decor" />
          </Link>

          {/* Deportiva Card */}
          <Link to="/deportiva" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-orange-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-300/30 transition-all duration-300 bg-white border border-orange-100/50">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-amber-50/40 rounded-full blur-2xl translate-y-1/3"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-2">Deportiva</h2>
                <p className="text-slate-500 text-lg font-medium mb-1">Fútbol, Voley y todo lo que te mueve.</p>
                <p className="text-slate-400 text-sm font-semibold">Uniformes con tu nombre y número</p>
              </div>
              <div className="self-start px-6 py-3 bg-orange-50 text-orange-700 font-bold rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-200 transition-all">
                Ver Catálogo
              </div>
            </div>
          </Link>

          {/* Custom Design Card */}
          <Link to="/crear" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-800">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Palette className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-white mb-2">Crea tu Diseño</h2>
                <p className="text-slate-400 text-lg font-medium mb-1">Sube tu idea y la hacemos realidad.</p>
                <p className="text-slate-500 text-sm font-semibold">Sublimación premium, colores que no se borran</p>
              </div>
              <div className="self-start px-6 py-3 bg-white text-slate-900 font-bold rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-900/20 transition-all">
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
