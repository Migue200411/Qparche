import React from 'react';
import { MessageCircle, Trophy, MapPin, ShieldCheck, Sparkles, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const waNumber = "573004945790";

  return (
    <footer className="bg-[#0e0e12] text-white border-t border-slate-900 mt-auto relative overflow-hidden">
      {/* Premium Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4 bg-black/40 rounded-xl px-6 py-5 border border-slate-900 transition-colors hover:bg-black/60">
            <div className="w-10 h-10 bg-[#E10600]/10 rounded-lg flex items-center justify-center text-[#E10600] shrink-0 border border-[#E10600]/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Barranquilla y Soledad</p>
              <p className="text-slate-400 text-xs font-medium">Envío incluido sin costo adicional</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-black/40 rounded-xl px-6 py-5 border border-slate-900 transition-colors hover:bg-black/60">
            <div className="w-10 h-10 bg-[#E10600]/10 rounded-lg flex items-center justify-center text-[#E10600] shrink-0 border border-[#E10600]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Precio final garantizado</p>
              <p className="text-slate-400 text-xs font-medium">Sin cargos ocultos ni sorpresas</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-black/40 rounded-xl px-6 py-5 border border-slate-900 transition-colors hover:bg-black/60">
            <div className="w-10 h-10 bg-[#E10600]/10 rounded-lg flex items-center justify-center text-[#E10600] shrink-0 border border-[#E10600]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">Síguenos</span>
              <span className="text-slate-400 text-xs font-medium">@qparche.f1</span>
            </div>
          </div>
        </div>

        {/* Brand + social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-black text-white tracking-tight mb-1 italic">Q'<span className="text-[#E10600]">Parche</span></h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Especialistas en F1</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/qparche.f1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#E10600] transition-colors font-bold text-sm"
              >
                <Instagram className="w-4 h-4" />
                @qparche.f1
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <p className="text-white font-bold text-sm flex items-center gap-2 italic uppercase tracking-tighter">
              Hecho en Barranquilla para fans reales
              <Trophy className="w-4 h-4 text-[#E10600]" />
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Q'Parche F1 Motorsports. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
