import React, { useState, useEffect, useRef } from 'react';
import { Product, ShirtSize, ShirtColor, Category } from '../types';
import { ShoppingCart, Filter, Send } from 'lucide-react';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';

interface CatalogProps {
  category: Category;
}

const mockProducts: Product[] = [
  // Carnaval
  { id: 'c1', category: 'carnaval', name: 'Se Baila Así', price: 35000, image: '/images/carnaval_baila_asi.jpg', description: '¡En Barranquilla se baila así! Puro sabor.' },
  { id: 'c2', category: 'carnaval', name: 'Marimonda Color', price: 35000, image: '/images/carnaval_marimonda_colorful.jpg', description: 'La alegría del carnaval en colores vivos.' },
  { id: 'c3', category: 'carnaval', name: 'Marimonda Art', price: 35000, image: '/images/carnaval_marimonda_art.jpg', description: 'Estilo artístico para el desorden.' },
  { id: 'c4', category: 'carnaval', name: 'Oveja Ebria', price: 35000, image: '/images/carnaval_oveja.jpg', description: 'Soy la oveja ebria de la familia. Ideal para el desorden.' },
  { id: 'c5', category: 'carnaval', name: 'Carnaval Mask', price: 35000, image: '/images/carnaval_mask.jpg', description: 'Máscara, plumas y toda la tradición barranquillera.' },
  { id: 'c6', category: 'carnaval', name: 'Collage Currambero', price: 35000, image: '/images/carnaval_collage.jpg', description: 'Marimonda, tigre y sombrero vueltiao. Todo en uno.' },
  { id: 'c7', category: 'carnaval', name: 'Explosión Barranquilla', price: 35000, image: '/images/carnaval_barranquilla.jpg', description: 'Colores vibrantes y la alegría de Joselito.' },

  // Deportes
  { id: 'd1', category: 'deportiva', name: 'Voley White #4', price: 35000, image: '/images/sport_haikyuu_white.jpg', description: 'Estilo anime deportivo, número 4.' },
  { id: 'd2', category: 'deportiva', name: 'Voley Black #10', price: 35000, image: '/images/sport_haikyuu_black.jpg', description: 'El del pequeño gigante, número 10.' },
  { id: 'd3', category: 'deportiva', name: 'Bastard Munchen', price: 35000, image: '/images/sport_bastard_munchen.png', description: 'Rojo y negro, estilo europeo moderno.' },
  { id: 'd4', category: 'deportiva', name: 'Blue Lock #11', price: 35000, image: '/images/sport_bluelock_11.jpg', description: 'Azul profundo, el ego del delantero.' },
  { id: 'd5', category: 'deportiva', name: 'Junior Tu Papá', price: 35000, image: '/images/carnaval_junior.jpg', description: 'De aquí hasta el miércoles de ceniza. Pasión rojiblanca.' },

  // F1 Collection
  { id: 'f1', category: 'deportiva', name: 'F1 Haas', price: 45000, image: '/images/Haas.jpeg', description: 'Camiseta estilo Haas F1 Team.' },
  { id: 'f2', category: 'deportiva', name: 'F1 Alpine', price: 45000, image: '/images/Alpine.jpeg', description: 'Camiseta estilo Alpine F1 Team.' },
  { id: 'f3', category: 'deportiva', name: 'F1 Aston Martin', price: 45000, image: '/images/Aston Martin.jpeg', description: 'Camiseta estilo Aston Martin F1.' },
  { id: 'f4', category: 'deportiva', name: 'F1 Ferrari', price: 45000, image: '/images/Ferrari.jpeg', description: 'Camiseta estilo Scuderia Ferrari.' },
  { id: 'f5', category: 'deportiva', name: 'F1 McLaren', price: 45000, image: '/images/Mclaren.jpeg', description: 'Camiseta estilo McLaren Racing.' },
  { id: 'f6', category: 'deportiva', name: 'F1 Mercedes', price: 45000, image: '/images/Mercedes.jpeg', description: 'Camiseta estilo Mercedes-AMG Petronas.' },
  { id: 'f7', category: 'deportiva', name: 'F1 Red Bull', price: 45000, image: '/images/Red Bull.jpeg', description: 'Camiseta estilo Red Bull Racing.' },
  { id: 'f8', category: 'deportiva', name: 'F1 Stake', price: 45000, image: '/images/Stake.jpeg', description: 'Camiseta estilo Stake F1 Team.' },
  { id: 'f9', category: 'deportiva', name: 'F1 Williams', price: 45000, image: '/images/Williams.jpeg', description: 'Camiseta estilo Williams Racing.' },
];

const Catalog: React.FC<CatalogProps> = ({ category }) => {
  const products = mockProducts.filter(p => p.category === category);
  const f1Products = mockProducts.filter(p => p.id.startsWith('f'));
  const regularProducts = mockProducts.filter(p => p.category === category && !p.id.startsWith('f'));
  const f1SectionRef = useRef<HTMLDivElement>(null);

  // Scroll to F1 section if hash is present
  useEffect(() => {
    if (category === 'deportiva' && window.location.hash === '#f1') {
      setTimeout(() => {
        f1SectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [category]);

  // Clean headers (No pink, No busy gradients)
  const headerBg = category === 'carnaval'
    ? 'bg-orange-50 border-b border-orange-100'
    : 'bg-blue-50 border-b border-blue-100';

  const accentText = category === 'carnaval' ? 'text-q-carnaval' : 'text-q-sport';

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Splashes for Header Area */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      {/* Header Banner - Clean & Solid */}
      <div className={`${headerBg} py-20 px-4 relative z-10`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 uppercase tracking-wider">
            {category === 'carnaval' ? <span>Colección <span className="text-q-carnaval">Carnavalera</span> 🎉</span> : <span>Zona <span className="text-q-sport">Deportiva</span> ⚽️</span>}
          </h1>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            {category === 'carnaval'
              ? 'Ponte la máscara, tírate la maizena y elige tu pinta pa’l desorden.'
              : 'Uniformes pa’ tu equipo, pa’ jugar el domingo o pa’ alentar al Tiburón.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Sports Custom Form */}
        {category === 'deportiva' && (
          <div className="mb-16 bg-white rounded-3xl p-8 shadow-lg shadow-slate-200 border border-slate-100 relative overflow-hidden">
            {/* Subtle internal blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="md:absolute top-0 right-0 bg-q-sport text-white px-6 py-2 rounded-bl-xl font-bold text-sm uppercase tracking-wide mb-4 md:mb-0 inline-block relative z-10">Personaliza</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">¿Diseño único?</h3>
                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                  Hacemos la camiseta de tu equipo de barrio, con tu apellido, número o esa frase que los representa.
                  Escribe qué quieres y cuadramos.
                </p>
                <ul className="space-y-3 text-sm text-slate-500 font-semibold">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-q-sport rounded-full"></div> Nombre y Número opcional</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-q-sport rounded-full"></div> Logos de tu empresa o parche</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-q-sport rounded-full"></div> Tela deportiva dry-fit</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <SportsCustomForm />
              </div>
            </div>
          </div>
        )}

        {/* F1 Collection Section - Only for Deportiva */}
        {category === 'deportiva' && (
          <div ref={f1SectionRef} id="f1" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-r from-red-50 via-white to-red-50 rounded-3xl p-8 shadow-lg shadow-slate-200 border border-red-100 relative overflow-hidden mb-8">
              <div className="absolute top-0 left-0 w-64 h-64 bg-red-50/50 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏎️</span>
                  </div>
                  <h2 className="text-4xl font-display font-black text-slate-900">
                    Colección <span className="text-red-600">F1</span>
                  </h2>
                </div>
                <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
                  Camisetas inspiradas en los equipos de Fórmula 1. Velocidad y estilo en cada diseño.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {f1Products.map((product) => (
                <ProductCard key={product.id} product={product} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Products Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100/50">
          <h2 className={`text-2xl font-bold text-slate-800 tracking-tight`}>{category === 'deportiva' ? 'Otros Diseños' : 'Diseños Disponibles'}</h2>
          <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
            {['Todas', 'S', 'M', 'L', 'XL'].map(f => (
              <button key={f} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-q-carnaval text-slate-600 transition-colors shadow-sm">
                {f}
              </button>
            ))}
            <button className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:border-q-carnaval text-slate-600 flex items-center gap-2 shadow-sm">
              <Filter className="w-4 h-4" /> Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularProducts.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
          ))}
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
            className="w-full bg-q-carnaval hover:bg-orange-600 text-white font-bold h-10 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
};

const SportsCustomForm: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [details, setDetails] = useState('');
  const waNumber = "573004945790";

  const handleSubmit = () => {
    if (!details) {
      alert("Por favor describe qué diseño quieres.");
      return;
    }
    const message = `Hola Q Parche, quiero cotizar un diseño deportivo:

Detalles: ${details}
Nombre: ${name || 'N/A'}
Numero: ${number || 'N/A'}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-1/2 p-3 rounded-lg border border-slate-200 text-sm focus:border-q-sport outline-none bg-white"
        />
        <input
          type="text"
          placeholder="Número"
          value={number}
          onChange={e => setNumber(e.target.value)}
          className="w-1/2 p-3 rounded-lg border border-slate-200 text-sm focus:border-q-sport outline-none bg-white"
        />
      </div>
      <textarea
        placeholder="Describe tu diseño..."
        value={details}
        onChange={e => setDetails(e.target.value)}
        className="w-full p-3 rounded-lg border border-slate-200 text-sm focus:border-q-sport outline-none h-24 resize-none bg-white"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
      >
        <Send className="w-4 h-4" /> Enviar
      </button>
    </div>
  )
}

export default Catalog;