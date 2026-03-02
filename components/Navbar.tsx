import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shirt, ShoppingBag, Trophy } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "3004945790";
  const waMessage = "Hola Q Parche, quiero pedir una camiseta.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/98 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-red-50 p-2 rounded-full rotate-3 group-hover:-rotate-3 transition-transform border border-red-100">
                <Shirt className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-3xl font-display font-bold text-slate-900 tracking-tight italic">
                Q'<span className="text-red-600">Parche</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/f1" className="text-slate-900 hover:text-red-600 font-bold text-base transition-colors flex items-center gap-2 group italic">
                Fórmula 1 <Trophy className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/deportiva" className="text-slate-600 hover:text-red-600 font-bold text-base transition-colors uppercase text-sm tracking-widest">Deportiva</Link>
              <Link to="/crear" className="text-slate-600 hover:text-red-600 font-bold text-base transition-colors uppercase text-sm tracking-widest">Sube tu Diseño</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-xl font-black shadow-xl shadow-red-900/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 uppercase italic text-sm"
            >
              <ShoppingBag className="w-5 h-5" />
              Pedir
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-2 text-center">
            <Link to="/f1" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-black text-slate-900 hover:bg-red-50 hover:text-red-600 transition-colors italic uppercase tracking-tight">Fórmula 1 🏎️</Link>
            <Link to="/deportiva" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors uppercase tracking-widest text-sm">Deportiva ⚽️</Link>
            <Link to="/crear" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors uppercase tracking-widest text-sm">Sube tu Diseño 🎨</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;