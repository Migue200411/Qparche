import React from 'react';
import { MessageCircle, Heart, MapPin, ShieldCheck, Sparkles, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const waNumber = "3004945790";

  return (
    <footer className="bg-q-dark text-white border-t border-slate-800 mt-auto relative overflow-hidden">
      {/* Warm accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="flex items-center gap-3 bg-slate-800/60 rounded-2xl px-6 py-4 border border-slate-700/50">
            <div className="w-10 h-10 bg-orange-500/15 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Pedidos en Barranquilla</p>
              <p className="text-slate-400 text-xs">Envío incluido en BQ y Soledad</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/60 rounded-2xl px-6 py-4 border border-slate-700/50">
            <div className="w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center text-green-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Precio claro, sin sorpresas</p>
              <p className="text-slate-400 text-xs">Lo que ves es lo que pagas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/60 rounded-2xl px-6 py-4 border border-slate-700/50">
            <div className="w-10 h-10 bg-rose-500/15 rounded-xl flex items-center justify-center text-rose-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Diseños bajo pedido</p>
              <p className="text-slate-400 text-xs">Cada camiseta es única</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-12 text-center border-b border-slate-800 pb-12">
          <div className="inline-block bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">Atención directa por WhatsApp</h3>
            <p className="text-orange-400 font-black text-3xl mb-1 tracking-wider">300 494 5790</p>
            <p className="text-green-400 font-bold text-sm uppercase tracking-widest mb-6">Respuesta rápida</p>

            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-green-900/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat con Asesor
            </a>
          </div>
        </div>

        {/* Brand + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-black text-white tracking-wider mb-2">Q'PARCHE</h2>
            <p className="text-slate-400 text-sm font-medium">Barranquilla, Colombia</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://instagram.com/qparche_baq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors font-bold text-sm"
            >
              <Instagram className="w-5 h-5" />
              @qparche_baq
            </a>
            <p className="text-white font-bold text-lg flex items-center gap-2">
              Hecho en Barranquilla pa' parches reales.
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Q'Parche. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
