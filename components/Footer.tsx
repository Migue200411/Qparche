import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const waNumber = "573004945790";

  return (
    <footer className="bg-q-dark text-white border-t border-slate-800 mt-auto relative overflow-hidden">
      {/* Subtle accent glow in footer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-q-carnaval/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Support Section - The ONLY call to action */}
        <div className="mb-12 text-center border-b border-slate-800 pb-12">
          <div className="inline-block bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">📲 Atención directa por WhatsApp</h3>
            <p className="text-q-carnaval font-black text-3xl mb-1 tracking-wider">300 494 5790</p>
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
            <p className="text-slate-400 text-sm mt-4 font-medium">Envío incluido en Barranquilla y Soledad 🛵</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-black text-white tracking-wider mb-2">Q'PARCHE</h2>
            <p className="text-slate-400 text-sm font-medium">Barranquilla, Colombia</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-bold text-lg flex items-center justify-center md:justify-end gap-2">
              Hecho en Barranquilla pa’ parches reales.
              <Heart className="w-5 h-5 text-q-carnaval fill-q-carnaval" />
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