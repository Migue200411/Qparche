import React from 'react';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const waNumber = "573004945790";

  return (
    <footer className="bg-q-dark text-white border-t border-slate-800 mt-auto relative overflow-hidden">
      {/* Subtle accent glow in footer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-q-carnaval/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-black text-white tracking-wider mb-2">Q'PARCHE</h2>
            <p className="text-slate-400 text-sm font-medium">Barranquilla, Colombia</p>
          </div>
          
          <div className="text-center md:text-right">
             <p className="text-white font-bold text-lg mb-6 flex items-center justify-center md:justify-end gap-2">
               Hecho en Barranquilla pa’ parches reales.
               <Heart className="w-5 h-5 text-q-carnaval fill-q-carnaval" />
             </p>
             <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-q-carnaval transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-q-sport transition-all duration-300">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-green-500 transition-all duration-300">
                  <span className="sr-only">WhatsApp</span>
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
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