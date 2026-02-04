import React from 'react';
import { Gift, MessageCircle, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Siempre Contigo",
        image: null, // Placeholder to be filled dynamically or by default
        description: "Diseño especial para parejas inseparables."
    },
    {
        id: 2,
        name: "En las Buenas",
        image: null,
        description: "Si estuviste en las malas, estás en las buenas."
    },
    {
        id: 3,
        name: "Par Inseparable",
        image: null,
        description: "Tú + Yo = El mejor equipo."
    },
    {
        id: 4,
        name: "Mitad y Mitad",
        image: null,
        description: "Nadie nos complementa mejor."
    },
    {
        id: 5,
        name: "Nuestro Parche",
        image: null,
        description: "Amistad real de la que ya no hay."
    }
];

const AmorAmistad: React.FC = () => {
    // Use uploaded images index 0-4 if available, or fallback
    const images = [
        "/images/uploaded_media_0_1770222971295.png",
        "/images/uploaded_media_1_1770222971295.png",
        "/images/uploaded_media_2_1770222971295.png",
        "/images/uploaded_media_3_1770222971295.png",
        "/images/uploaded_media_4_1770222971295.png"
    ];

    return (
        <div className="min-h-screen bg-rose-50/50 relative overflow-hidden">
            {/* Warm Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            {/* Hero */}
            <div className="relative z-10 pt-24 pb-16 text-center px-4">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-rose-600 font-bold tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6 border border-rose-100 shadow-sm animate-fade-in-up">
                    <Gift className="w-3 h-3" /> Edición Limitada
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-tight drop-shadow-sm">
                    Amor <span className="text-rose-500">&</span> Amistad
                </h1>
                <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10">
                    Diseños pensados para compartir con tu persona favorita. ✨
                </p>

                {/* Offer Banner - Emotional & Clear */}
                <div className="bg-gradient-to-r from-rose-500 to-orange-500 max-w-2xl mx-auto rounded-[2rem] p-1 shadow-2xl shadow-rose-200 transform hover:-translate-y-1 transition-all">
                    <div className="bg-white rounded-[1.8rem] p-8 h-full flex flex-col md:flex-row items-center justify-center gap-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-rose-50/50 pointer-events-none"></div>

                        <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full flex items-center justify-center text-rose-600 shadow-inner">
                            <Heart className="w-10 h-10 fill-rose-500" />
                        </div>
                        <div className="relative z-10 text-center md:text-left flex-1">
                            <h3 className="text-2xl font-black text-slate-900 mb-1">Pack Parejas</h3>
                            <p className="text-slate-600 text-lg leading-tight">
                                Lleva el par por solo <span className="text-rose-600 font-black text-2xl">$70.000</span>
                            </p>
                        </div>
                        <div className="relative z-10">
                            <a
                                href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20la%20promo%20de%20Amor%20y%20Amistad"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-slate-200 hover:bg-black transition-all flex items-center gap-2"
                            >
                                Pedir Promo <Gift className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={product.id} className="bg-white rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group relative">
                            {/* Emotional Badge */}
                            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur text-rose-500 p-2 rounded-full shadow-sm border border-rose-100 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>

                            <div className="aspect-square bg-gradient-to-br from-rose-50 to-orange-50 rounded-[1.5rem] mb-4 overflow-hidden relative border border-rose-50/50">
                                <img
                                    src={images[index]}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                                    onError={(e) => e.currentTarget.src = 'https://placehold.co/600x600/ffe4e6/be123c?text=Diseño+Pendiente'}
                                />
                            </div>

                            <div className="px-2 pb-2 text-center">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                                <p className="text-slate-500 font-medium mb-6 text-sm">{product.description}</p>

                                <a
                                    href={`https://wa.me/3004945790?text=${encodeURIComponent(`Hola Q'Parche, quiero pedir el diseño "${product.name}" de Amor y Amistad (Promoción $70.000 el par).`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-100"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Pedir par ($70k)
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
