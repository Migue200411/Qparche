import React, { useState } from 'react';
import { Product, ShirtSize, ShirtColor, Category } from '../types';
import { ShoppingCart, Filter, Send } from 'lucide-react';

interface CatalogProps {
  category: Category;
}

const mockProducts: Product[] = [
  // Carnaval
  { id: 'c1', category: 'carnaval', name: 'Marimonda Pop', price: 35000, image: 'https://img.freepik.com/premium-photo/carnival-mask-colored-background_23-2148421880.jpg', description: 'Diseño clásico con toque moderno.' },
  { id: 'c2', category: 'carnaval', name: 'Quien lo vive', price: 35000, image: 'https://media.istockphoto.com/id/1199859495/photo/colorful-colombian-handicrafts.jpg?s=612x612&w=0&k=20&c=K6qXyT_Rz3w_gJ7_r3w_gJ7_r3w_gJ7_r3w_gJ7=', description: 'Es quien lo goza, pura sabrosura.' },
  { id: 'c3', category: 'carnaval', name: 'Monocuco Style', price: 40000, image: 'https://i.pinimg.com/736x/88/2c/6a/882c6a2e4c4d4c4e4c4d4c4d4c4d4c4d.jpg', description: 'Pa los que van de incógnito.' },
  { id: 'c4', category: 'carnaval', name: 'La Danza', price: 35000, image: 'https://img.freepik.com/free-vector/hand-drawn-carnival-background_23-2148827056.jpg', description: 'Colores de cumbia y tradición.' },
  { id: 'c5', category: 'carnaval', name: 'Negrita Puloy', price: 40000, image: 'https://img.freepik.com/free-vector/flat-carnival-background_23-2148045339.jpg', description: 'Lunares y coquetería.' },
  { id: 'c6', category: 'carnaval', name: 'Rey Momo', price: 35000, image: 'https://img.freepik.com/free-vector/gradient-carnival-background_23-2148817737.jpg', description: 'El rey de la fiesta.' },
  { id: 'c7', category: 'carnaval', name: 'Joselito Vive', price: 35000, image: 'https://img.freepik.com/free-vector/realistic-carnival-background_23-2148408432.jpg', description: 'No estaba muerto, estaba de parranda.' },
  { id: 'c8', category: 'carnaval', name: 'Vacile Efectivo', price: 35000, image: 'https://img.freepik.com/free-vector/colorful-carnival-background_23-2148437947.jpg', description: 'Frase típica pa azotar baldosa.' },
  
  // Deportes
  { id: 'd1', category: 'deportiva', name: 'Junior Retro', price: 45000, image: 'https://img.freepik.com/free-photo/soccer-jersey-mockup_111797-62.jpg', description: 'La rojiblanca clásica.' },
  { id: 'd2', category: 'deportiva', name: 'Selección Colombia', price: 45000, image: 'https://img.freepik.com/free-psd/soccer-jersey-mockup_1310-1428.jpg', description: 'La fiebre amarilla.' },
  { id: 'd3', category: 'deportiva', name: 'Inter Miami Pink', price: 45000, image: 'https://img.freepik.com/free-psd/soccer-kit-mockup_1310-23.jpg', description: 'Estilo Miami pa la cancha.' },
  { id: 'd4', category: 'deportiva', name: 'Real Madrid White', price: 45000, image: 'https://img.freepik.com/free-psd/football-kit-mockup_1310-7.jpg', description: 'Elegancia merengue.' },
  { id: 'd5', category: 'deportiva', name: 'Argentina 3 Stars', price: 45000, image: 'https://img.freepik.com/free-psd/soccer-uniform-mockup_1310-18.jpg', description: 'La del campeón.' },
  { id: 'd6', category: 'deportiva', name: 'Personalizada Equipo', price: 50000, image: 'https://img.freepik.com/free-psd/sport-shirt-mockup_1310-16.jpg', description: 'Tu equipo de barrio pro.' },
];

const Catalog: React.FC<CatalogProps> = ({ category }) => {
  const products = mockProducts.filter(p => p.category === category);
  
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

        {/* Filters & Grid */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100/50">
          <h2 className={`text-2xl font-bold text-slate-800 tracking-tight`}>Diseños Disponibles</h2>
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
          {products.map((product) => (
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
    let message = "";
    if (category === 'carnaval') {
       message = `Hola Q’Parche 🎭 Quiero una camiseta de la Colección Carnavalera. Diseño: ${product.name}, Talla: ${selectedSize}, Color: ${selectedColor}.`;
    } else {
       message = `Hola Q’Parche ⚽ Quiero una camiseta deportiva personalizada. Talla: ${selectedSize}, Color: ${selectedColor}.`;
    }
    
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
          <div className="flex gap-2">
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as ShirtSize)}
              className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg text-xs py-2 px-2 focus:outline-none focus:border-q-carnaval font-semibold text-slate-600"
            >
              {Object.values(ShirtSize).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value as ShirtColor)}
              className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg text-xs py-2 px-2 focus:outline-none focus:border-q-carnaval font-semibold text-slate-600"
            >
              {Object.values(ShirtColor).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

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
        const message = `Hola Q’Parche ⚽ Quiero una camiseta deportiva personalizada. Talla: [POR DEFINIR], Color: [POR DEFINIR].
        
Detalles: ${details}
Nombre: ${name}
Número: ${number}`;

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