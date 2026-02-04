import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Filter, Flame } from 'lucide-react';
import { Product, ShirtSize, ShirtColor, Category } from '../types';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';

interface CatalogProps {
  category: Category;
  subset?: 'f1' | 'all';
}

const mockProducts: Product[] = [

  // Deportes
  { id: 'd1', category: 'deportiva', name: 'Voley White #4', price: 40000, image: '/images/sport_haikyuu_white.jpg', description: 'Estilo anime deportivo, número 4.' },
  { id: 'd2', category: 'deportiva', name: 'Voley Black #10', price: 40000, image: '/images/sport_haikyuu_black.jpg', description: 'El del pequeño gigante, número 10.' },
  { id: 'd3', category: 'deportiva', name: 'Bastard Munchen', price: 40000, image: '/images/sport_bastard_munchen.png', description: 'Rojo y negro, estilo europeo moderno.' },
  { id: 'd4', category: 'deportiva', name: 'Blue Lock #11', price: 40000, image: '/images/sport_bluelock_11.jpg', description: 'Azul profundo, el ego del delantero.' },
  { id: 'd5', category: 'deportiva', name: 'Junior Tu Papá', price: 40000, image: '/images/carnaval_junior.jpg', description: 'Pasión rojiblanca. Personalízala con tu nombre.' },

  // F1 Collection
  { id: 'f1', category: 'deportiva', name: 'F1 Haas', price: 50000, image: '/images/f1_haas_new.png', description: 'Camiseta estilo Haas F1 Team.' },
  { id: 'f2', category: 'deportiva', name: 'F1 Alpine', price: 50000, image: '/images/Alpine.jpeg', description: 'Camiseta estilo Alpine F1 Team.' },
  { id: 'f3', category: 'deportiva', name: 'F1 Aston Martin', price: 50000, image: '/images/Aston Martin.jpeg', description: 'Camiseta estilo Aston Martin F1.' },
  { id: 'f4', category: 'deportiva', name: 'F1 Ferrari', price: 50000, image: '/images/f1_ferrari_new.png', description: 'Camiseta estilo Scuderia Ferrari.' },
  { id: 'f5', category: 'deportiva', name: 'F1 McLaren', price: 50000, image: '/images/f1_mclaren_new.png', description: 'Camiseta estilo McLaren Racing.' },
  { id: 'f6', category: 'deportiva', name: 'F1 Mercedes', price: 50000, image: '/images/Mercedes.jpeg', description: 'Camiseta estilo Mercedes-AMG Petronas.' },
  { id: 'f7', category: 'deportiva', name: 'F1 Red Bull', price: 50000, image: '/images/Red Bull.jpeg', description: 'Camiseta estilo Red Bull Racing.' },
  { id: 'f8', category: 'deportiva', name: 'F1 Stake', price: 50000, image: '/images/Stake.jpeg', description: 'Camiseta estilo Stake F1 Team.' },
  { id: 'f9', category: 'deportiva', name: 'F1 Williams', price: 50000, image: '/images/Williams.jpeg', description: 'Camiseta estilo Williams Racing.' },
];

const Catalog: React.FC<CatalogProps> = ({ category, subset }) => {
  // Strict Filtering Logic
  const displayProducts = mockProducts.filter(p => {
    if (p.category !== category) return false;
    if (subset === 'f1') {
      return p.id.startsWith('f'); // ONLY F1
    } else {
      return !p.id.startsWith('f'); // ONLY Standard Sports (No F1)
    }
  });

  // Clean headers (Vibrant but Professional)
  // Orange accent for Sports, Red for F1
  const isF1 = subset === 'f1';
  const headerBg = isF1
    ? 'bg-gradient-to-r from-red-50 via-white to-red-50 border-b border-red-100'
    : 'bg-gradient-to-r from-blue-50 via-orange-50/30 to-blue-50 border-b border-slate-100';

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Splashes */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none ${isF1 ? 'bg-red-100/40' : 'bg-blue-100/40'}`}></div>
      <div className={`absolute top-20 left-0 w-[400px] h-[400px] rounded-full blur-[80px] -translate-x-1/2 pointer-events-none ${isF1 ? 'bg-orange-100/30' : 'bg-orange-100/20'}`}></div>

      {/* Header Banner */}
      <div className={`${headerBg} py-20 px-4 relative z-10`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 uppercase tracking-wider drop-shadow-sm">
            {isF1 ? (
              <span>Colección <span className="text-red-600 drop-shadow-md">Fórmula 1</span> 🏎️</span>
            ) : (
              <span>Zona <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 drop-shadow-sm">Deportiva</span> ⚽️</span>
            )}
          </h1>
          <p className="text-slate-700 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            {isF1
              ? 'Velocidad, adrenalina y los colores de tu escudería favorita.'
              : 'Uniformes pa’ tu equipo, pa’ jugar el domingo o pa’ alentar al Tiburón.'
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* FILTERS & CONTROLS (Only for General Sports) */}
        {!isF1 && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100/50">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Diseños Disponibles</h2>
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
              {['Todas', 'S', 'M', 'L', 'XL'].map(f => (
                <button key={f} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm">
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* "Create Design" Card - Only shows on General Sports Page */}
          {!isF1 && (
            <Link to="/crear" className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-slate-200 hover:-translate-y-1 transition-transform border border-slate-700 min-h-[420px]">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-white">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white leading-tight mb-2">Tu Diseño <br />Aquí</h3>
                <p className="text-slate-400 font-medium text-sm">Sube tu imagen o idea personalizada.</p>
              </div>
              <div>
                <div className="text-white font-black text-2xl mb-4">$50.000</div>
                <div className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  Crear Ahora
                </div>
              </div>
            </Link>
          )}

          {/* Mapped Products */}
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
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

const ProductCard: React.FC<{ product: Product, category: Category }> = ({ product, category }) => {
  const [selectedSize, setSelectedSize] = useState<ShirtSize>(ShirtSize.M);
  const [selectedColor, setSelectedColor] = useState<ShirtColor>(ShirtColor.BLANCO);
  const waNumber = "573004945790";

  const handleOrder = () => {
    const message = `Hola Q Parche, quiero hacer un pedido:
    
Producto: ${product.name}
Coleccion: ${category.charAt(0).toUpperCase() + category.slice(1)}
Talla: ${selectedSize}
Color: ${selectedColor}
Precio: $${product.price.toLocaleString()}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
      <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Simple Price Tag */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur text-slate-900 font-bold px-3 py-1.5 rounded-lg text-sm shadow-sm border border-slate-100">
          ${product.price.toLocaleString()}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{product.name}</h3>
        <p className="text-slate-500 text-xs mb-4 line-clamp-2">{product.description}</p>

        <div className="mt-auto space-y-3">
          {/* Info Tags */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md self-start">
              Envío incluido en BQ y Soledad
            </span>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md self-start">
              Precio final, sin enredos
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Talla</label>
            <SizeSelector
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
              compact
            />
          </div>
          {category !== 'deportiva' && (
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Color</label>
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                compact
              />
            </div>
          )}

          <button
            onClick={handleOrder}
            className="w-full bg-q-sport hover:bg-blue-600 text-white font-bold h-10 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Pedir camiseta
          </button>
        </div>
      </div>
    </div>
  );
};



export default Catalog;