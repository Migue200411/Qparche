import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shirt, ShoppingBag, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "3004945790";
  const waMessage = "Hola Q Parche, quiero pedir una camiseta.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-blue-50 p-2 rounded-full rotate-3 group-hover:-rotate-3 transition-transform border border-blue-100">
                <Shirt className="h-6 w-6 text-q-sport" />
              </div>
              <span className="text-3xl font-display font-bold text-q-dark tracking-tight">
                Q'<span className="text-q-sport">Parche</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/amor-amistad" className="text-slate-900 hover:text-orange-500 font-bold text-base transition-colors flex items-center gap-2 group">
                Amor & Amistad <Heart className="w-4 h-4 fill-current text-orange-500 group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/f1" className="text-slate-600 hover:text-orange-500 font-bold text-base transition-colors">F1</Link>
              <Link to="/deportiva" className="text-slate-600 hover:text-orange-500 font-bold text-base transition-colors">Deportiva</Link>
              <Link to="/crear" className="text-slate-600 hover:text-orange-500 font-bold text-base transition-colors">Sube tu Diseño</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-green-100 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Pedir
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-q-dark hover:text-q-sport focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2 text-center">
            <Link to="/amor-amistad" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-colors">Amor & Amistad ❤️</Link>
            <Link to="/f1" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">Fórmula 1 🏎️</Link>
            <Link to="/deportiva" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">Deportiva ⚽️</Link>
            <Link to="/crear" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">Sube tu Diseño 🎨</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;