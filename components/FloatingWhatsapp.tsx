import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  const waNumber = "573004945790";
  const waMessage = "Hola Q’Parche 👋 Quiero pedir una camiseta.";
  
  return (
    <a
      href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl shadow-green-100 transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsapp;