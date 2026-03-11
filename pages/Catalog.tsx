import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Filter, Expand } from 'lucide-react';
import { Product, GalleryImage, ShirtSize, Category } from '../types';
import SizeSelector from '../components/SizeSelector';
import ImageViewer from '../components/ImageViewer';
import ProductGallery from '../components/ProductGallery';

interface CatalogProps {
  category: Category;
  subset?: 'f1' | 'all';
}

import { teamColors, f1Products } from '../f1Data';
import ProductCard from '../components/ProductCard';

const mockProducts: Product[] = [
  ...f1Products,
];

const Catalog: React.FC<CatalogProps> = ({ category, subset }) => {
  const isF1 = subset === 'f1';
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  // Strict Filtering: F1 only shows F1, Deportiva never shows F1
  const displayProducts = mockProducts.filter(p => {
    if (p.category !== category) return false;
    if (isF1) {
      if (!p.id.startsWith('f')) return false;
      if (selectedTeam && p.id !== selectedTeam) return false;
      return true;
    } else {
      return !p.id.startsWith('f');
    }
  });

  // Dynamic colors based on selected team
  const activeTeam = selectedTeam ? teamColors[selectedTeam] : null;
  const accentColor = activeTeam?.primary || '#dc2626';

  return (
    <div className="min-h-screen text-slate-100 relative overflow-hidden" style={{ backgroundColor: '#0e1117' }}>
      {/* Background Splashes - dynamic for F1 */}
      {isF1 ? (
        <>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeTeam?.glowColor || 'rgba(220,38,38,0.12)' }}
          ></div>
          <div
            className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full blur-[80px] -translate-x-1/2 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: activeTeam?.glowColor || 'rgba(220,38,38,0.08)' }}
          ></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none bg-orange-200/50"></div>
          <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full blur-[80px] -translate-x-1/2 pointer-events-none bg-amber-200/40"></div>
          <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-yellow-100/30"></div>
        </>
      )}

      {/* Header Banner */}
      {isF1 ? (
        <div
          className="py-14 sm:py-24 px-6 sm:px-4 relative z-10 transition-all duration-700 overflow-hidden"
          style={{ background: activeTeam ? `linear-gradient(135deg, ${activeTeam.bgFrom} 0%, ${activeTeam.bgTo} 100%)` : 'linear-gradient(135deg, #12090e 0%, #2a0d14 50%, #4a0f1a 100%)' }}
        >
          {/* Decorative glow behind header */}
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 opacity-30"
            style={{ backgroundColor: accentColor }}
          ></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/80 font-bold tracking-widest uppercase text-[9px] sm:text-[10px] px-4 py-1.5 rounded-full mb-4 sm:mb-5 border border-white/15">
              Colección F1
            </span>
            <h1 className="text-[2.5rem] md:text-7xl font-display font-black mb-4 text-white leading-tight italic uppercase">
              Fórmula <span className="transition-colors duration-500" style={{ color: accentColor }}>1</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-2 opacity-80">
              {selectedTeam
                ? `Sublimación full color estilo ${activeTeam?.name}. Incluye personalización de nombre y número. Precio final: $55.000.`
                : 'Diseñada para fans que saben lo que quieren. Full color, personalizable, hecha a pedido en Barranquilla.'
              }
            </p>
            {!selectedTeam && (
              <div className="mt-4 flex justify-center gap-2 sm:gap-3 flex-wrap px-4">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-tight">11 Escuderías</span>
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-tight">$55.000 · Precio final</span>
                <span className="inline-block px-3 py-1 bg-[#E10600]/10 border border-[#E10600]/20 rounded-full text-[#E10600] text-[10px] sm:text-sm font-bold uppercase tracking-tight italic">Personalización Incluida</span>
              </div>
            )}

            {/* Team Selector */}
            <div className="mt-8 sm:mt-10 max-w-5xl mx-auto px-4">
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">Selecciona tu escudería</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                <button
                  onClick={() => setSelectedTeam(null)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 border ${!selectedTeam
                    ? 'bg-white text-slate-900 border-white shadow-lg shadow-white/20'
                    : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/12 hover:text-white'
                    }`}
                >
                  Todas
                </button>
                {Object.entries(teamColors).map(([id, team]) => (
                  <button
                    key={id}
                    onClick={() => setSelectedTeam(id)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${selectedTeam === id
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/12 hover:text-white hover:scale-105'
                      }`}
                    style={selectedTeam === id ? {
                      backgroundColor: team.primary,
                      borderColor: team.primary,
                      boxShadow: `0 4px 24px ${team.primary}50`,
                    } : undefined}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 ring-1 ring-white/20"
                      style={{ backgroundColor: team.primary }}
                    ></span>
                    {team.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-500 py-16 sm:py-24 px-4 relative z-10 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-800/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-black mb-3 uppercase tracking-wider text-white drop-shadow-md italic">
              Zona <span className="text-yellow-200">Deportiva</span>
            </h1>
            <p className="text-orange-100 text-sm sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Uniformes pa' tu equipo, pa' jugar el domingo o pa' alentar al Tiburón.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-xs sm:text-sm font-bold backdrop-blur-sm">Anime & Fútbol</span>
              <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-xs sm:text-sm font-bold backdrop-blur-sm">Desde $40.000</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* FILTERS & CONTROLS (Only for General Sports) */}
        {!isF1 && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-[#111722] backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase italic">Diseños Disponibles</h2>
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none">
              {['Todas', 'S', 'M', 'L', 'XL'].map(f => (
                <button key={f} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-white/50 hover:border-[#E10600] hover:text-white transition-all uppercase tracking-widest active:scale-95">
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* "Create Design" Card - Only on General Sports Page */}
          {!isF1 && (
            <Link to="/crear" className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-slate-200 hover:-translate-y-1 hover:shadow-2xl transition-all border border-slate-700 min-h-[420px]">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-white">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white leading-tight mb-2">Tu Diseño <br />Aquí</h3>
                <p className="text-slate-400 font-medium text-sm">Sube tu imagen o idea personalizada.</p>
              </div>
              <div>
                <div className="text-white font-black text-2xl mb-4">$50.000</div>
                <div className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-center group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all shadow-sm">
                  Crear Ahora
                </div>
              </div>
            </Link>
          )}

          {/* Mapped Products */}
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
              isF1={isF1}
              teamColor={isF1 ? (selectedTeam ? teamColors[selectedTeam]?.primary : teamColors[product.id]?.primary) : undefined}
            />
          ))}

          {displayProducts.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-400">
              <p className="text-xl">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
