import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const waNumber = "573004945790";
    const waMessage = "Hola Q'Parche, quiero hacer un pedido y aprovechar la oferta del 50%.";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    useEffect(() => {
        const handleScroll = () => {
            // Show after 400px of scroll
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-0 right-0 z-[60] px-5 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#E10600] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(225,6,0,0.4)] border border-white/10 active:scale-[0.97] transition-all"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">¿Listo para pista?</span>
                    <span className="text-sm font-black italic uppercase tracking-tight">Pedir por WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/20">
                    <span className="text-[10px] font-black uppercase italic">Paga 50%</span>
                    <MessageCircle className="w-5 h-5" />
                </div>
            </a>
        </div>
    );
};

export default StickyCTA;
