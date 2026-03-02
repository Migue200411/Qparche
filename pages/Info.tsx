import React from 'react';
import { Clock, MapPin, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-slate-100">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h1
            className="font-display font-black text-white mb-6 uppercase italic"
            style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Información Clara
          </h1>
          <p className="text-slate-400 text-xl font-medium opacity-85">Sin letras chiquitas, así trabajamos en Q'Parche.</p>
        </div>

        {/* Sublimation Highlight - Corrected Terminology */}
        <div className="mb-16 bg-[#0e0e12] rounded-[3rem] p-10 border border-slate-900 shadow-xl shadow-black/20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E10600]/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="bg-black p-5 rounded-full shadow-md relative z-10 border border-slate-800">
            <Sparkles className="w-12 h-12 text-[#E10600]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 uppercase italic tracking-tight">Impresión por Sublimación</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Impresión por sublimación: colores vivos, no se despega ni se cuartea, el diseño queda integrado en la tela. Ideal para camisetas claras y diseños con mucho color.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Shipping */}
          <div className="bg-[#0e0e12] p-12 rounded-[2.5rem] border border-slate-900 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-sm rotate-3 text-[#E10600] border border-slate-800">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic tracking-tight">Envíos</h2>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex justify-between border-b border-slate-900 pb-4">
                <span>Barranquilla / Soledad</span>
                <span className="font-black text-green-500">¡ENVÍO INCLUIDO!</span>
              </li>
              <li className="flex justify-between border-b border-slate-900 pb-4">
                <span>Otras ciudades (Interrapidísimo)</span>
                <span className="font-bold text-white">$10.000 - $15.000</span>
              </li>
              <li className="text-base text-slate-500 italic pt-2 font-medium">
                *Precio final, sin enredos. El envío nacional se paga contra entrega.
              </li>
            </ul>
          </div>

          {/* Times */}
          <div className="bg-[#0e0e12] p-12 rounded-[2.5rem] border border-slate-900 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-sm -rotate-2 text-[#E10600] border border-slate-800">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic tracking-tight">Tiempos</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed font-medium">
              No manejamos inventario guardado, todo se hace fresco pa' ti.
            </p>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex items-center gap-4">
                <span className="w-3 h-3 bg-[#E10600] rounded-full shadow-sm"></span>
                <span><strong>Diseños Catálogo:</strong> 2-3 días hábiles.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-3 h-3 bg-[#E10600] rounded-full shadow-sm"></span>
                <span><strong>Personalizados:</strong> 3-5 días hábiles.</span>
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div className="bg-[#0e0e12] p-12 rounded-[2.5rem] border border-slate-900 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-sm rotate-1 text-[#E10600] border border-slate-800">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic tracking-tight">Formas de Pago</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-slate-900 px-4 py-2 rounded-xl text-sm font-bold text-slate-400 border border-slate-800">Nequi</span>
              <span className="bg-slate-900 px-4 py-2 rounded-xl text-sm font-bold text-slate-400 border border-slate-800">Daviplata</span>
              <span className="bg-slate-900 px-4 py-2 rounded-xl text-sm font-bold text-slate-400 border border-slate-800">Bancolombia</span>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              <strong>Catálogo:</strong> Pago 100% anticipado.<br />
              <strong>Personalizados:</strong> 50% anticipo para iniciar, 50% al terminar (antes de enviar foto o entregar).
            </p>
          </div>

          {/* Policies */}
          <div className="bg-[#0e0e12] p-12 rounded-[2.5rem] border border-slate-900 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-sm -rotate-1 text-[#E10600] border border-slate-800">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic tracking-tight">Garantía</h2>
            <div className="text-slate-400 space-y-4 text-lg leading-relaxed font-medium">
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