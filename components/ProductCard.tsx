import React, { useState } from 'react';
import { MessageCircle, Expand } from 'lucide-react';
import { Product, ShirtSize, Category } from '../types';
import SizeSelector from './SizeSelector';
import ImageViewer from './ImageViewer';
import ProductGallery from './ProductGallery';

interface ProductCardProps {
    product: Product;
    category: Category;
    isF1: boolean;
    teamColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, category, isF1, teamColor }) => {
    const [selectedSize, setSelectedSize] = useState<ShirtSize>(ShirtSize.M);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [viewerIdx, setViewerIdx] = useState(0);
    const waNumber = "573004945790";
    const gallery = product.gallery;

    const openViewer = (src: string) => {
        if (gallery) {
            const idx = gallery.findIndex(g => g.src === src);
            setViewerIdx(idx >= 0 ? idx : 0);
        }
        setViewerOpen(true);
    };

    const viewerSrc = gallery ? gallery[viewerIdx]?.src ?? product.image : product.image;
    const viewerLabel = gallery ? gallery[viewerIdx]?.label : undefined;
    const viewerPrev = gallery && viewerIdx > 0 ? () => setViewerIdx(viewerIdx - 1) : undefined;
    const viewerNext = gallery && viewerIdx < (gallery.length - 1) ? () => setViewerIdx(viewerIdx + 1) : undefined;

    const handleOrder = () => {
        const collectionName = isF1 ? 'Fórmula 1' : category.charAt(0).toUpperCase() + category.slice(1);
        const base = `Hola Q'Parche, quiero hacer un pedido:

Producto: ${product.name}
Colección: ${collectionName}
Talla: ${selectedSize}
Precio: $${product.price.toLocaleString()}`;
        const message = isF1
            ? `${base}

Personalización (nombre y número): (completar)
Pago: 50% anticipo · 50% contra entrega`
            : base;

        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

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
        <div className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border flex flex-col h-full group hover:-translate-y-[4px] ${borderClasses}`} style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.05)' }} onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => (e.currentTarget.style.boxShadow = '0 22px 50px rgba(0,0,0,0.45)')} onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => (e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.35)')}>
            {/* Image / Gallery */}
            {product.gallery ? (
                <ProductGallery
                    images={product.gallery}
                    alt={product.name}
                    price={product.price}
                    teamColor={isF1 ? teamColor : undefined}
                    priceTagClasses={priceTagClasses}
                    priceTagStyle={priceTagStyle}
                    onExpand={openViewer}
                />
            ) : (
                <div className="aspect-[4/5] w-full overflow-hidden bg-white relative cursor-pointer" onClick={() => openViewer(product.image)}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: 'brightness(1.08) contrast(1.04)' }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-all shadow-lg group-hover:scale-100 scale-90">
                            <Expand className="w-5 h-5" />
                        </div>
                    </div>
                    <div
                        className={`absolute top-3 right-3 font-black px-3 py-1.5 rounded-lg text-sm shadow-md transition-colors duration-300 ${priceTagClasses}`}
                        style={priceTagStyle}
                    >
                        ${product.price.toLocaleString()}
                    </div>
                    {isF1 && teamColor && (
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500" style={{ backgroundColor: teamColor }} />
                    )}
                </div>
            )}

            {/* Image Viewer Modal */}
            <ImageViewer
                src={viewerSrc}
                alt={product.name}
                isOpen={viewerOpen}
                onClose={() => setViewerOpen(false)}
                onPrev={viewerPrev}
                onNext={viewerNext}
                imageLabel={viewerLabel}
                imageIndex={gallery ? viewerIdx : undefined}
                imageCount={gallery ? gallery.length : undefined}
            />

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-black text-slate-900 mb-0.5 leading-tight">{product.name}</h3>
                <p className="text-slate-400 text-xs mb-4 line-clamp-2">{product.description}</p>

                <div className="mt-auto space-y-3">
                    {/* Info Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {isF1 ? (
                            <>
                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                                    Nombre y número incluidos
                                </span>
                                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
                                    50% anticipo
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
                                    Envío gratis BQ
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                    Precio final
                                </span>
                            </>
                        )}
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
                        className={`w-full text-white font-bold rounded-[16px] flex items-center justify-center gap-2 transition-all text-sm hover:-translate-y-0.5 shadow-md ${buttonClasses}`}
                        style={{ minHeight: '52px', ...(buttonStyle ?? {}), ...(isF1 && !teamColor ? { boxShadow: '0 8px 20px rgba(225,6,0,0.25)' } : {}) }}
                    >
                        <MessageCircle className="w-4 h-4" />
                        Pedir ahora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
