import React from 'react';
import { MessageCircle, Trophy, MapPin, ShieldCheck, Sparkles, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const waNumber = "3004945790";

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-100 mt-auto relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-5 border border-slate-100 transition-colors hover:bg-slate-100/50">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shrink-0 border border-slate-200">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Barranquilla y Soledad</p>
              <p className="text-slate-500 text-xs">Envío incluido sin costo adicional</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-5 border border-slate-100 transition-colors hover:bg-slate-100/50">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shrink-0 border border-slate-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Precio final garantizado</p>
              <p className="text-slate-500 text-xs">Sin cargos ocultos ni sorpresas</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-5 border border-slate-100 transition-colors hover:bg-slate-100/50">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shrink-0 border border-slate-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Calidad premium</p>
              <p className="text-slate-500 text-xs">Sublimación de alta durabilidad</p>
            </div>
          </div>
        </div>

        {/* Brand + social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight mb-1">Q'<span className="text-red-700">Parche</span></h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Especialistas en F1</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/qparche_baq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors font-bold text-sm"
              >
                <Instagram className="w-4 h-4" />
                @qparche_baq
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <p className="text-slate-900 font-bold text-sm flex items-center gap-2">
              Hecho en Barranquilla para fans reales
              <Trophy className="w-4 h-4 text-red-600" />
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Q'Parche. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
