import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shirt, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const waNumber = "573004945790";
  const waMessage = "Hola Q Parche, quiero pedir una camiseta.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-orange-50 p-2 rounded-full rotate-3 group-hover:-rotate-3 transition-transform border border-orange-100">
                <Shirt className="h-6 w-6 text-q-carnaval" />
              </div>
              <span className="text-3xl font-display font-bold text-q-dark tracking-tight">
                Q'<span className="text-q-carnaval">Parche</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/carnaval" className="text-q-dark hover:text-q-carnaval font-bold text-base transition-colors">Carnaval</Link>
              <Link to="/deportiva" className="text-q-dark hover:text-q-sport font-bold text-base transition-colors">Deportiva</Link>
              <Link to="/crear" className="text-q-dark hover:text-q-mint font-bold text-base transition-colors">Sube tu diseño</Link>
              <Link to="/info" className="text-gray-500 hover:text-q-dark font-semibold text-base transition-colors">Envíos y Info</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-q-carnaval hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-100 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Pedir
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-q-dark hover:text-q-carnaval focus:outline-none"
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
            <Link to="/carnaval" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-q-dark hover:bg-orange-50 hover:text-q-carnaval transition-colors">Carnaval 🎉</Link>
            <Link to="/deportiva" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-q-dark hover:bg-blue-50 hover:text-q-sport transition-colors">Deportiva ⚽️</Link>
            <Link to="/crear" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-lg font-bold text-q-dark hover:bg-green-50 hover:text-q-mint transition-colors">Sube tu diseño 🎨</Link>
            <Link to="/info" onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-xl text-base font-semibold text-gray-500 hover:text-q-dark transition-colors">Políticas y Envíos</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;