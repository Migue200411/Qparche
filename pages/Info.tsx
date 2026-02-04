import React from 'react';
import { Clock, MapPin, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-50/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-q-dark mb-6 tracking-tight">Información Clara</h1>
          <p className="text-slate-500 text-xl font-medium">Sin letras chiquitas, así trabajamos en Q'Parche.</p>
        </div>

        {/* Sublimation Highlight - Corrected Terminology */}
        <div className="mb-16 bg-white rounded-[3rem] p-10 border border-orange-100 shadow-xl shadow-orange-50/50 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 via-transparent to-transparent pointer-events-none"></div>

          <div className="bg-orange-50 p-5 rounded-full shadow-md relative z-10">
            <Sparkles className="w-12 h-12 text-orange-500" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-q-dark mb-2">Impresión por Sublimación</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Impresión por sublimación: colores vivos, no se despega ni se cuartea, el diseño queda integrado en la tela. Ideal para camisetas claras y diseños con mucho color.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Shipping */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm rotate-3 text-q-sport">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-q-dark mb-6">Envíos</h2>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex justify-between border-b border-slate-50 pb-4">
                <span>Barranquilla / Soledad</span>
                <span className="font-bold text-q-dark">$5.000 - $8.000</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-4">
                <span>Otras ciudades (Interrapidísimo)</span>
                <span className="font-bold text-q-dark">$10.000 - $15.000</span>
              </li>
              <li className="text-base text-slate-400 italic pt-2 font-medium">
                *El envío se paga contra entrega a la transportadora o al domiciliario.
              </li>
            </ul>
          </div>

          {/* Times */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm -rotate-2 text-q-sport">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-q-dark mb-6">Tiempos</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
              No manejamos inventario guardado, todo se hace fresco pa' ti.
            </p>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex items-center gap-4">
                <span className="w-3 h-3 bg-q-sport rounded-full shadow-sm"></span>
                <span><strong>Diseños Catálogo:</strong> 2-3 días hábiles.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-3 h-3 bg-q-sport rounded-full shadow-sm"></span>
                <span><strong>Personalizados:</strong> 3-5 días hábiles.</span>
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm rotate-1 text-yellow-500">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-q-dark mb-6">Formas de Pago</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">Nequi</span>
              <span className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">Daviplata</span>
              <span className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-600">Bancolombia</span>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              <strong>Catálogo:</strong> Pago 100% anticipado.<br />
              <strong>Personalizados:</strong> 50% anticipo para iniciar, 50% al terminar (antes de enviar foto o entregar).
            </p>
          </div>

          {/* Policies */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm -rotate-1 text-red-500">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-q-dark mb-6">Garantía</h2>
            <div className="text-slate-600 space-y-4 text-lg leading-relaxed font-medium">
              <p>
                ❌ <strong>No hay devoluciones</strong> en personalizados porque eso no se lo podemos vender a más nadie, llave.
              </p>
              <p>
                ✅ <strong>Garantía de calidad:</strong> Si la camiseta llega rota o el sublimado presenta defectos (no pasa, pero ajá), te la cambiamos. Tienes 3 días para avisar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;