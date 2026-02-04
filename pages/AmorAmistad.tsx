import React from 'react';
import { Gift, MessageCircle, Heart, Sparkles, Users } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Siempre Contigo",
        image: null,
        description: "Diseño especial para parejas inseparables.",
        price: 70000,
    },
    {
        id: 2,
        name: "En las Buenas",
        image: null,
        description: "Si estuviste en las malas, estás en las buenas.",
        price: 70000,
    },
    {
        id: 3,
        name: "Par Inseparable",
        image: null,
        description: "Tú + Yo = El mejor equipo.",
        price: 70000,
    },
    {
        id: 4,
        name: "Mitad y Mitad",
        image: null,
        description: "Nadie nos complementa mejor.",
        price: 70000,
    },
    {
        id: 5,
        name: "Nuestro Parche",
        image: null,
        description: "Amistad real de la que ya no hay.",
        price: 70000,
    },
    {
        id: 6,
        name: "Mi Destino",
        image: null,
        description: "Mi destino siempre hacia ti. Eres mi norte, donde todo comienza.",
        price: 70000,
    }
];

const AmorAmistad: React.FC = () => {
    const images = [
        "/images/uploaded_media_0_1770222971295.png",
        "/images/uploaded_media_1_1770222971295.png",
        "/images/uploaded_media_2_1770222971295.png",
        "/images/uploaded_media_3_1770222971295.png",
        "/images/uploaded_media_4_1770222971295.png",
        "/images/amor_destino_norte.png"
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50/30 to-purple-50/20">
            {/* Warm Background Blobs - more vivid */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-200/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Hero */}
            <div className="relative z-10 pt-24 pb-12 text-center px-4">
                <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur text-rose-600 font-bold tracking-widest uppercase text-xs px-5 py-2.5 rounded-full mb-6 border border-rose-200 shadow-md shadow-rose-100/50">
                    <Gift className="w-3.5 h-3.5" /> Edición Limitada
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-tight">
                    Amor <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">&</span> Amistad
                </h1>
                <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-4">
                    El regalo perfecto para quien siempre está.
                </p>
                <p className="text-sm text-rose-500 font-bold max-w-lg mx-auto mb-10 flex items-center justify-center gap-1.5">
                    <Users className="w-4 h-4" />
                    Cada diseño incluye un PAR de camisetas
                </p>

                {/* Dual Offer Banners */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {/* Pack Parejas */}
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-[2rem] p-[2px] shadow-xl shadow-rose-200/50 hover:-translate-y-1 transition-all">
                        <div className="bg-white rounded-[1.85rem] p-6 h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-50/60 to-pink-50/40 pointer-events-none"></div>
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-rose-500 shadow-inner shrink-0">
                                    <Heart className="w-7 h-7 fill-rose-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-black text-slate-900">Pack Parejas</h3>
                                    <p className="text-slate-600 text-sm">
                                        Lleva el par por <span className="text-rose-600 font-black text-xl">$70.000</span>
                                    </p>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20la%20promo%20de%20Amor%20y%20Amistad%20($70.000)"
                                target="_blank"
                                rel="noreferrer"
                                className="relative z-10 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                Pide el par y sorprende <Gift className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Pack Amigos Premium - with image */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2rem] p-[2px] shadow-xl shadow-purple-200/50 hover:-translate-y-1 transition-all">
                        <div className="bg-white rounded-[1.85rem] p-4 h-full flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/60 to-indigo-50/40 pointer-events-none"></div>
                            {/* Premium preview image */}
                            <div className="relative z-10 w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-50 to-indigo-50">
                                <img
                                    src="/images/amor_premium_polaroid.png"
                                    alt="Pack Premium"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                            <div className="relative z-10 flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center text-purple-500 shadow-inner shrink-0">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-black text-slate-900">Pack Premium</h3>
                                    <p className="text-slate-600 text-sm">
                                        Con tu foto personalizada <span className="text-purple-600 font-black text-xl">$80.000</span>
                                    </p>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20el%20Pack%20Premium%20de%20Amor%20y%20Amistad%20($80.000)"
                                target="_blank"
                                rel="noreferrer"
                                className="relative z-10 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                Pedir Premium <Sparkles className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                {/* Section label */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-display font-black text-slate-800">Nuestros Diseños</h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium">Cada diseño es un par de camisetas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-4 shadow-xl shadow-rose-100/40 border border-rose-100/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 group relative">
                            {/* Pair + Edition badges */}
                            <div className="absolute top-5 left-5 z-20 flex gap-2">
                                <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-md shadow-rose-200/50 flex items-center gap-1">
                                    <Users className="w-3 h-3" /> PAR
                                </div>
                                <div className="bg-white/90 backdrop-blur text-purple-600 text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm border border-purple-100 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Edición Especial
                                </div>
                            </div>

                            {/* Heart badge on hover */}
                            <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur text-rose-500 p-2.5 rounded-full shadow-md border border-rose-100 opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110 group-hover:rotate-12">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>

                            <div className="aspect-square bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-[1.5rem] mb-4 overflow-hidden relative border border-rose-100/50">
                                <img
                                    src={images[index]}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                                    onError={(e) => e.currentTarget.src = 'https://placehold.co/600x600/ffe4e6/be123c?text=Diseño+Pendiente'}
                                />
                                {/* Soft inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-100/20 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="px-3 pb-3 text-center">
                                <h3 className="text-2xl font-black text-slate-900 mb-1">{product.name}</h3>
                                <p className="text-slate-500 font-medium mb-2 text-sm">{product.description}</p>
                                <p className="text-rose-400 font-bold text-xs mb-3">Incluye 2 camisetas personalizadas</p>

                                {/* Price highlight */}
                                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl py-2 px-4 mb-4 border border-rose-100/50">
                                    <span className="text-rose-600 font-black text-lg">${product.price.toLocaleString()}</span>
                                    <span className="text-slate-400 text-xs font-bold ml-1.5">el par</span>
                                </div>

                                <a
                                    href={`https://wa.me/3004945790?text=${encodeURIComponent(`Hola Q'Parche, quiero pedir el diseño "${product.name}" de Amor y Amistad (Promoción $${product.price.toLocaleString()} el par).`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-rose-200/50 hover:shadow-xl hover:shadow-rose-300/50 hover:-translate-y-0.5"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Pedir par
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AmorAmistad;
