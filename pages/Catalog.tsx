import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Filter, Expand } from 'lucide-react';
import { Product, ShirtSize, Category } from '../types';
import SizeSelector from '../components/SizeSelector';
import ImageViewer from '../components/ImageViewer';

interface CatalogProps {
  category: Category;
  subset?: 'f1' | 'all';
}

// F1 Team color definitions
const teamColors: Record<string, { name: string; primary: string; secondary: string; bgFrom: string; bgTo: string; glowColor: string }> = {
  f1: { name: 'Haas', primary: '#B6BABD', secondary: '#dc2626', bgFrom: '#111827', bgTo: '#1f2937', glowColor: 'rgba(182,186,189,0.15)' },
  f2: { name: 'Alpine', primary: '#0090FF', secondary: '#FF69B4', bgFrom: '#0c1e3a', bgTo: '#1e3a5f', glowColor: 'rgba(0,144,255,0.15)' },
  f3: { name: 'Aston Martin', primary: '#006F62', secondary: '#c8ff00', bgFrom: '#021a16', bgTo: '#0a3d34', glowColor: 'rgba(0,111,98,0.15)' },
  f4: { name: 'Ferrari', primary: '#dc2626', secondary: '#000000', bgFrom: '#1c0505', bgTo: '#450a0a', glowColor: 'rgba(220,38,38,0.15)' },
  f5: { name: 'McLaren', primary: '#FF8000', secondary: '#000000', bgFrom: '#1a0f00', bgTo: '#431407', glowColor: 'rgba(255,128,0,0.15)' },
  f6: { name: 'Mercedes', primary: '#00D2BE', secondary: '#6B7280', bgFrom: '#021a17', bgTo: '#0f2d28', glowColor: 'rgba(0,210,190,0.15)' },
  f7: { name: 'Red Bull', primary: '#1E3A8A', secondary: '#dc2626', bgFrom: '#0a1628', bgTo: '#1e3a5f', glowColor: 'rgba(30,58,138,0.15)' },
  f8: { name: 'Stake', primary: '#52E252', secondary: '#000000', bgFrom: '#021a05', bgTo: '#0a3d12', glowColor: 'rgba(82,226,82,0.15)' },
  f9: { name: 'Williams', primary: '#005AFF', secondary: '#00A0DE', bgFrom: '#000d26', bgTo: '#0a2d5f', glowColor: 'rgba(0,90,255,0.15)' },
  f10: { name: 'Audi', primary: '#8C8C8C', secondary: '#e10600', bgFrom: '#0a0a0a', bgTo: '#1a1a1a', glowColor: 'rgba(140,140,140,0.15)' },
};

const mockProducts: Product[] = [
  // Deportes (NO F1)
  { id: 'd1', category: 'deportiva', name: 'Voley White #4', price: 40000, image: '/images/sport_haikyuu_white.jpg', description: 'Estilo anime deportivo, número 4.' },
  { id: 'd2', category: 'deportiva', name: 'Voley Black #10', price: 40000, image: '/images/sport_haikyuu_black.jpg', description: 'El del pequeño gigante, número 10.' },
  { id: 'd3', category: 'deportiva', name: 'Bastard Munchen', price: 40000, image: '/images/sport_bastard_munchen.png', description: 'Rojo y negro, estilo europeo moderno.' },
  { id: 'd4', category: 'deportiva', name: 'Blue Lock #11', price: 40000, image: '/images/sport_bluelock_11.jpg', description: 'Azul profundo, el ego del delantero.' },
  { id: 'd5', category: 'deportiva', name: 'Junior Tu Papá', price: 40000, image: '/images/carnaval_junior.jpg', description: 'Pasión rojiblanca. Personalízala con tu nombre.' },

  // F1 Collection
  { id: 'f1', category: 'deportiva', name: 'F1 Haas', price: 55000, image: '/images/f1_haas_new.png', description: 'Camiseta estilo Haas F1 Team.' },
  { id: 'f2', category: 'deportiva', name: 'F1 Alpine', price: 55000, image: '/images/Alpine.jpeg', description: 'Camiseta estilo Alpine F1 Team.' },
  { id: 'f3', category: 'deportiva', name: 'F1 Aston Martin', price: 55000, image: '/images/Aston Martin.jpeg', description: 'Camiseta estilo Aston Martin F1.' },
  { id: 'f4', category: 'deportiva', name: 'F1 Ferrari', price: 55000, image: '/images/f1_ferrari_new.png', description: 'Camiseta estilo Scuderia Ferrari.' },
  { id: 'f5', category: 'deportiva', name: 'F1 McLaren', price: 55000, image: '/images/f1_mclaren_new.png', description: 'Camiseta estilo McLaren Racing.' },
  { id: 'f6', category: 'deportiva', name: 'F1 Mercedes', price: 55000, image: '/images/Mercedes.jpeg', description: 'Camiseta estilo Mercedes-AMG Petronas.' },
  { id: 'f7', category: 'deportiva', name: 'F1 Red Bull', price: 55000, image: '/images/Red Bull.jpeg', description: 'Camiseta estilo Red Bull Racing.' },
  { id: 'f8', category: 'deportiva', name: 'F1 Stake', price: 55000, image: '/images/Stake.jpeg', description: 'Camiseta estilo Stake F1 Team.' },
  { id: 'f9', category: 'deportiva', name: 'F1 Williams', price: 55000, image: '/images/Williams.jpeg', description: 'Camiseta estilo Williams Racing.' },
  { id: 'f10', category: 'deportiva', name: 'F1 Audi', price: 55000, image: '/images/Audi.jpeg', description: 'Camiseta estilo Audi F1 Team.' },
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
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
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
          className="py-24 px-4 relative z-10 transition-all duration-700 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${activeTeam?.bgFrom || '#0f172a'}, ${activeTeam?.bgTo || '#450a0a'})` }}
        >
          {/* Decorative glow behind header */}
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 opacity-30"
            style={{ backgroundColor: accentColor }}
          ></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/80 font-bold tracking-widest uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 border border-white/15">
              Colección 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4 text-white leading-tight">
              Fórmula <span className="transition-colors duration-500" style={{ color: accentColor }}>1</span>
            </h1>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-2">
              {selectedTeam
                ? `Camiseta estilo ${activeTeam?.name}. Elige tu talla y pide por WhatsApp.`
                : 'Velocidad, adrenalina y los colores de tu escudería favorita.'
              }
            </p>
            {!selectedTeam && (
              <div className="mt-4 flex justify-center gap-3 flex-wrap">
                <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-300 text-sm font-bold">10 Escuderías</span>
                <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-300 text-sm font-bold">$55.000 c/u</span>
                <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-300 text-sm font-bold">Personaliza nombre y número</span>
              </div>
            )}

            {/* Team Selector */}
            <div className="mt-10 max-w-5xl mx-auto">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Selecciona tu escudería</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                <button
                  onClick={() => setSelectedTeam(null)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    !selectedTeam
                      ? 'bg-white text-slate-900 border-white shadow-lg shadow-white/20'
                      : 'bg-white/8 text-white/60 border-white/15 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  Todas
                </button>
                {Object.entries(teamColors).map(([id, team]) => (
                  <button
                    key={id}
                    onClick={() => setSelectedTeam(id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${
                      selectedTeam === id
                        ? 'text-white shadow-lg scale-105'
                        : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/12 hover:text-white hover:scale-105'
                    }`}
                    style={selectedTeam === id ? {
                      backgroundColor: team.primary,
                      borderColor: team.primary,
                      boxShadow: `0 4px 24px ${team.primary}50`,
                    } : undefined}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 ring-1 ring-white/20"
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
        <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-500 py-24 px-4 relative z-10 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-800/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase tracking-wider text-white drop-shadow-md">
              Zona <span className="text-yellow-200">Deportiva</span>
            </h1>
            <p className="text-orange-100 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Uniformes pa' tu equipo, pa' jugar el domingo o pa' alentar al Tiburón.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-sm font-bold backdrop-blur-sm">Anime & Fútbol</span>
              <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-sm font-bold backdrop-blur-sm">Desde $40.000</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* FILTERS & CONTROLS (Only for General Sports) */}
        {!isF1 && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-orange-200/60 shadow-md shadow-orange-100/30">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Diseños Disponibles</h2>
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
              {['Todas', 'S', 'M', 'L', 'XL'].map(f => (
                <button key={f} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-orange-500 hover:text-orange-600 transition-colors shadow-sm">
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

const ProductCard: React.FC<{ product: Product; category: Category; isF1: boolean; teamColor?: string }> = ({ product, category, isF1, teamColor }) => {
  const [selectedSize, setSelectedSize] = useState<ShirtSize>(ShirtSize.M);
  const [viewerOpen, setViewerOpen] = useState(false);
  const waNumber = "573004945790";

  const handleOrder = () => {
    const collectionName = isF1 ? 'Fórmula 1' : category.charAt(0).toUpperCase() + category.slice(1);
    const message = `Hola Q'Parche, quiero hacer un pedido:

Producto: ${product.name}
Colección: ${collectionName}
Talla: ${selectedSize}
Precio: $${product.price.toLocaleString()}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Dynamic button color for F1, orange for deportiva
  const buttonStyle = isF1 && teamColor
    ? { backgroundColor: teamColor }
    : undefined;

  const buttonClasses = isF1
    ? teamColor
      ? 'hover:brightness-110 hover:shadow-lg'
      : 'bg-red-600 hover:bg-red-700 shadow-red-100 hover:shadow-lg hover:shadow-red-200'
    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-200 hover:shadow-lg hover:shadow-orange-300';

  const priceTagStyle = isF1 && teamColor
    ? { backgroundColor: teamColor }
    : undefined;

  const priceTagClasses = isF1
    ? teamColor
      ? 'text-white'
      : 'bg-red-600 text-white'
    : 'bg-white/95 backdrop-blur text-slate-900 border border-slate-100';

  const borderClasses = isF1
    ? 'border-slate-200/50 hover:shadow-lg'
    : 'border-orange-200/40 hover:shadow-orange-200/50';

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col h-full group hover:-translate-y-1.5 ${borderClasses}`}>
      {/* Image */}
      <div className="aspect-[4/5] w-full overflow-hidden bg-slate-50 relative cursor-pointer" onClick={() => setViewerOpen(true)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Expand overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-all shadow-lg group-hover:scale-100 scale-90">
            <Expand className="w-5 h-5" />
          </div>
        </div>
        {/* Price Tag */}
        <div
          className={`absolute top-3 right-3 font-black px-3 py-1.5 rounded-lg text-sm shadow-md transition-colors duration-300 ${priceTagClasses}`}
          style={priceTagStyle}
        >
          ${product.price.toLocaleString()}
        </div>
        {/* Team color accent bar */}
        {isF1 && teamColor && (
          <div
            className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500"
            style={{ backgroundColor: teamColor }}
          ></div>
        )}
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        src={product.image}
        alt={product.name}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-black text-slate-900 mb-0.5 leading-tight">{product.name}</h3>
        <p className="text-slate-400 text-xs mb-4 line-clamp-2">{product.description}</p>

        <div className="mt-auto space-y-3">
          {/* Info Tags */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
              Envío gratis BQ
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
              Precio final
            </span>
          </div>

          {/* Size Selector */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Talla</label>
            <SizeSelector
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              compact
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={handleOrder}
            className={`w-full text-white font-bold h-11 rounded-xl flex items-center justify-center gap-2 transition-all text-sm hover:-translate-y-0.5 shadow-md ${buttonClasses}`}
            style={buttonStyle}
          >
            <MessageCircle className="w-4 h-4" />
            Pedir ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
