import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shirt, ShoppingBag, Trophy } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "573004945790";
  const waMessage = "Hola Q Parche, quiero pedir una camiseta.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <nav
      className="sticky top-0 z-50 transition-all"
      style={{
        backgroundColor: 'rgba(14,17,23,0.97)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="p-2 rounded-full rotate-3 group-hover:-rotate-3 transition-transform" style={{ backgroundColor: 'rgba(225,6,0,0.08)', border: '1px solid rgba(225,6,0,0.15)' }}>
              <Shirt className="h-6 w-6 text-[#E10600]" />
            </div>
            <span className="text-3xl font-display font-bold text-white tracking-tight italic">
              Q'<span className="text-[#E10600]">Parche</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-baseline space-x-8">
            <Link to="/f1" className="text-slate-200 hover:text-[#E10600] font-bold text-base transition-colors flex items-center gap-2 group italic">
              Fórmula 1 <Trophy className="w-4 h-4 text-[#E10600] group-hover:scale-110 transition-transform" />
            </Link>
            <Link to="/deportiva" className="hover:text-[#E10600] font-bold text-sm transition-colors uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Deportiva
            </Link>
            <Link to="/crear" className="hover:text-[#E10600] font-bold text-sm transition-colors uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Sube tu Diseño
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E10600] hover:brightness-110 text-white px-8 py-2.5 rounded-xl font-black transition-all hover:-translate-y-0.5 flex items-center gap-2 uppercase italic text-sm shadow-[0_4px_16px_rgba(225,6,0,0.28)] hover:shadow-[0_6px_20px_rgba(225,6,0,0.4)]"
            >
              <ShoppingBag className="w-5 h-5" />
              Pedir
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#E10600] focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#0b0f14', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="px-4 pt-4 pb-8 space-y-2 text-center">
            <Link to="/f1" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-black text-white hover:bg-[#E10600]/10 hover:text-[#E10600] transition-colors italic uppercase tracking-tight">
              Fórmula 1 🏎️
            </Link>
            <Link to="/deportiva" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-bold hover:bg-white/5 hover:text-white transition-colors uppercase tracking-widest text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Deportiva ⚽️
            </Link>
            <Link to="/crear" onClick={() => setIsOpen(false)} className="block px-3 py-5 rounded-xl text-lg font-bold hover:bg-white/5 hover:text-white transition-colors uppercase tracking-widest text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Sube tu Diseño 🎨
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
