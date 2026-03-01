import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Palette, MessageCircle, Heart, Zap, Pen, Package, ShieldCheck, Truck, Users, CheckCircle, ArrowRight, ChevronDown, Clock, Sparkles, CreditCard, Eye, HelpCircle } from 'lucide-react';
import ImageViewer from '../components/ImageViewer';

/* ── FAQ Accordion Item ── */
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="w-4 h-4 text-orange-400 shrink-0" />
          <span className="text-slate-800 font-bold text-sm">{question}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="px-5 pb-4 pt-0 text-slate-500 text-sm leading-relaxed pl-12">{answer}</p>
      </div>
    </div>
  );
};

/* ── Testimonios Chat con ImageViewer ── */
const chatTestimonios = [
  { src: '/images/social/chat-1.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull personalizada' },
  { src: '/images/social/chat-2.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull – "Queda chevereee"' },
  { src: '/images/social/chat-3.png', alt: 'Testimonio Nicolás', name: 'Nicolás', desc: 'Ferrari – Entrega confirmada' },
  { src: '/images/social/chat-4.png', alt: 'Testimonio María Fernanda', name: 'María Fernanda', desc: 'Diseño personalizado' },
];

const StarRow: React.FC = () => (
  <div className="flex items-center gap-1 mb-2">
    {[1, 2, 3, 4, 5].map(s => (
      <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    ))}
  </div>
);

const TestimoniosChat: React.FC = () => {
  const [viewerIdx, setViewerIdx] = useState<number | null>(null);

  return (
    <>
      <div className="mb-20">
        <h3 className="text-2xl font-display font-black text-slate-900 text-center mb-10">
          Lo que dicen nuestros clientes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chatTestimonios.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => setViewerIdx(i)}
            >
              <div className="aspect-[4/5] relative bg-slate-100 overflow-hidden">
                <img
                  src={t.src}
                  alt={t.alt}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
                />
              </div>
              <div className="p-5">
                <StarRow />
                <p className="text-slate-800 font-bold text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ImageViewer para leer las capturas en grande */}
      <ImageViewer
        src={viewerIdx !== null ? chatTestimonios[viewerIdx].src : ''}
        alt={viewerIdx !== null ? chatTestimonios[viewerIdx].alt : ''}
        isOpen={viewerIdx !== null}
        onClose={() => setViewerIdx(null)}
        onPrev={viewerIdx !== null && viewerIdx > 0 ? () => setViewerIdx(viewerIdx - 1) : undefined}
        onNext={viewerIdx !== null && viewerIdx < chatTestimonios.length - 1 ? () => setViewerIdx(viewerIdx + 1) : undefined}
        imageLabel={viewerIdx !== null ? chatTestimonios[viewerIdx].name : undefined}
        imageIndex={viewerIdx ?? undefined}
        imageCount={chatTestimonios.length}
      />
    </>
  );
};

/* ── Compra Segura Section ── */
const CompraSegura: React.FC = () => {
  const steps = [
    { num: '1', icon: <Trophy className="w-5 h-5" />, title: 'Elige tu equipo', desc: 'Escoge la escudería y la talla que necesitas.' },
    { num: '2', icon: <MessageCircle className="w-5 h-5" />, title: 'Envía tus datos', desc: 'Nombre, número y detalles por WhatsApp.' },
    { num: '3', icon: <CreditCard className="w-5 h-5" />, title: 'Paga el 50%', desc: 'Transferencia o Nequi para reservar tu pedido.' },
    { num: '4', icon: <Eye className="w-5 h-5" />, title: 'Recibe y paga el resto', desc: 'Te enviamos foto antes de entregar. Pagas el 50% restante.' },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-green-100">
            Proceso transparente
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4 leading-tight">
            Compra segura y<br className="hidden sm:block" /> proceso claro
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Sin sorpresas. Sabes exactamente qué esperar en cada paso.
          </p>
        </div>

        {/* ── BLOCK 1: 4-Step Process ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow group">
              {/* Step number */}
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-black text-sm mb-4 shadow-md shadow-orange-200/50 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              {/* Connector line (not on last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-orange-200 z-10" />
              )}
              <div className="flex items-center gap-2 mb-2 text-slate-400">
                {step.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-1">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* ── BLOCK 2 + 3: Production Info + Payment Security ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Production Info */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-slate-900 text-lg">Producción</h3>
            </div>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">3 a 5 días hábiles</span> de producción después de confirmar tu pedido.</p>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">Hecha bajo pedido.</span> Cada camiseta se produce individualmente para ti.</p>
              </div>
              <div className="flex items-start gap-3">
                <Pen className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">Personalización incluida.</span> Nombre y número sin costo adicional.</p>
              </div>
            </div>
          </div>

          {/* Payment Security */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-slate-900 text-lg">Pago seguro</h3>
            </div>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <CreditCard className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">Transferencia o Nequi.</span> Pago directo, sin plataformas de terceros.</p>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">Foto antes de entrega.</span> Ves tu camiseta terminada antes de pagar el saldo.</p>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm"><span className="font-bold text-slate-800">Atención directa.</span> Hablas con quien fabrica tu camiseta, sin intermediarios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BLOCK 4: FAQ Accordion ── */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-xl font-display font-black text-slate-900 text-center mb-6">Preguntas frecuentes</h3>
          <div className="space-y-3">
            <FaqItem
              question="¿La sublimación se despega o decolora con el tiempo?"
              answer="No. La sublimación impregna la tinta directamente en la tela, no es un vinilo ni un estampado encima. Puedes lavar la camiseta normalmente sin que pierda color ni se despegue."
            />
            <FaqItem
              question="¿Puedo personalizar cualquier equipo o solo los que aparecen?"
              answer="Puedes pedir cualquier diseño que quieras. Los equipos que ves en el catálogo son los más populares, pero si tienes otro equipo o diseño en mente, escríbenos y lo hacemos."
            />
            <FaqItem
              question="¿Hacen envíos fuera de Barranquilla?"
              answer="Sí. La entrega en Barranquilla no tiene costo adicional. Para otras ciudades, coordinamos envío por servientrega o interrapidísimo con costo según destino."
            />
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20pedir%20mi%20camiseta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-green-200/60 hover:-translate-y-1 hover:shadow-2xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir mi camiseta personalizada
          </a>
          <p className="mt-4 text-slate-400 text-sm font-medium">Respuesta en menos de 1 hora por WhatsApp.</p>
        </div>

      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section - Vibrant & Alive */}
      <div className="relative bg-gradient-to-br from-white via-orange-50/40 to-rose-50/30 pt-24 pb-20 border-b border-orange-100/50 overflow-hidden">
        {/* Warm Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-amber-100/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
            Tu camiseta,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">hecha desde cero.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
            Sublimación premium en Barranquilla. Pagas el 50% para reservar y el resto cuando la recibes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <Link
              to="/f1"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-xl shadow-orange-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5" />
              Ver Colección F1
            </Link>
            <a
              href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-green-400 hover:text-green-700 hover:shadow-lg hover:shadow-green-100 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust bullets */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-orange-100/50 shadow-sm">
              <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 shrink-0">
                <Pen className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">Sublimación full color — no se pela ni se borra</p>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-green-100/50 shadow-sm">
              <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">50% anticipo · 50% contra entrega</p>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-rose-100/50 shadow-sm">
              <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500 shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <p className="text-slate-700 font-bold text-sm text-left">Entrega en Barranquilla sin costo adicional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
              <Package className="w-5 h-5" />
            </div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Solo bajo pedido</p>
            <p className="text-slate-400 text-xs leading-snug">Cada camiseta se hace para ti, no hay inventario genérico.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Pago en dos partes</p>
            <p className="text-slate-400 text-xs leading-snug">50% para reservar. El resto lo pagas cuando recibes.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
              <MessageCircle className="w-5 h-5" />
            </div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Atención directa</p>
            <p className="text-slate-400 text-xs leading-snug">Hablas con quien hace tu camiseta. Sin intermediarios.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
              <Users className="w-5 h-5" />
            </div>
            <p className="font-bold text-slate-800 text-sm leading-tight">Comunidad universitaria</p>
            <p className="text-slate-400 text-xs leading-snug">Cientos de pedidos entregados en universidades de Barranquilla.</p>
          </div>
        </div>
      </div>

      {/* ═══════════ SOCIAL PROOF SECTION ═══════════ */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Title ── */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-orange-100">
              Clientes reales
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4 leading-tight">
              +20 camisetas entregadas<br className="hidden sm:block" /> en Barranquilla
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Cada camiseta es personalizada bajo pedido. Estas son algunas entregas reales.
            </p>
          </div>

          {/* ── BLOCK 1: Photo Grid — OCULTO hasta tener fotos reales ── */}
          {/*
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
            ... fotos de clientes, entregas, fundador ...
          </div>
          */}

          {/* ── BLOCK 2: Testimonios tipo chat (4 cards) ── */}
          <TestimoniosChat />

          {/* ── BLOCK 3: Trust Indicators Row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            <div className="flex items-center gap-3 bg-green-50/70 rounded-xl px-4 py-3.5 border border-green-100/60">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <p className="text-slate-700 font-bold text-xs leading-tight">Trabajo bajo pedido</p>
            </div>
            <div className="flex items-center gap-3 bg-indigo-50/70 rounded-xl px-4 py-3.5 border border-indigo-100/60">
              <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
              <p className="text-slate-700 font-bold text-xs leading-tight">Nombre y número incluidos</p>
            </div>
            <div className="flex items-center gap-3 bg-amber-50/70 rounded-xl px-4 py-3.5 border border-amber-100/60">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-slate-700 font-bold text-xs leading-tight">50% anticipo – 50% contra entrega</p>
            </div>
            <div className="flex items-center gap-3 bg-rose-50/70 rounded-xl px-4 py-3.5 border border-rose-100/60">
              <CheckCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <p className="text-slate-700 font-bold text-xs leading-tight">Entrega en Barranquilla</p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <Link
              to="/f1"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg rounded-xl shadow-xl shadow-orange-200/60 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Personaliza la tuya ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-slate-400 text-sm font-medium">Sin compromiso. Escríbenos y armamos tu diseño.</p>
          </div>

        </div>
      </div>

      {/* ═══════════ COMPRA CON SEGURIDAD ═══════════ */}
      <CompraSegura />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Amor & Amistad Card */}
          <Link to="/amor-amistad" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-rose-200/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-300/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl translate-y-1/3"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-900/20">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-white/25 backdrop-blur rounded-lg text-white font-bold text-xs mb-3 border border-white/30 shadow-sm">
                  Nueva Colección
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2 drop-shadow-md">Amor & Amistad</h2>
                <p className="text-pink-100 text-lg font-medium mb-1">El regalo perfecto para quien siempre está.</p>
                <p className="text-pink-200/70 text-sm font-semibold">Packs en pareja desde $70.000</p>
              </div>
            </div>
            <img src="/images/amor_siempre_contigo.png" className="absolute bottom-0 right-0 w-64 h-64 object-contain translate-x-1/4 translate-y-1/4 opacity-90 group-hover:scale-110 transition-transform duration-500 rotate-12 drop-shadow-2xl" alt="Decor" />
          </Link>

          {/* F1 Card */}
          <Link to="/f1" className="group relative h-96 rounded-[3rem] overflow-hidden shadow-xl shadow-red-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-300/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="w-16 h-16 bg-red-500/20 backdrop-blur rounded-2xl flex items-center justify-center text-red-400 shadow-lg shadow-red-900/20">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="relative z-20">
                <span className="inline-block px-3 py-1 bg-red-500/30 backdrop-blur rounded-lg text-red-300 font-bold text-xs mb-3 border border-red-500/30">
                  11 Escuderías
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2">Fórmula <span className="text-red-500">1</span></h2>
                <p className="text-slate-300 text-lg font-medium mb-1">Velocidad, adrenalina y estilo.</p>
                <p className="text-slate-500 text-sm font-semibold">Ferrari, McLaren, Red Bull y más</p>
              </div>
            </div>
            <img src="/images/f1_ferrari_new.png" className="absolute top-1/2 right-0 w-72 h-72 object-contain -translate-y-1/2 translate-x-12 rotate-[-12deg] group-hover:rotate-[-6deg] transition-transform duration-500 drop-shadow-2xl" alt="Decor" />
          </Link>

          {/* Deportiva Card */}
          <Link to="/deportiva" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-orange-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-300/30 transition-all duration-300 bg-white border border-orange-100/50">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-amber-50/40 rounded-full blur-2xl translate-y-1/3"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-2">Deportiva</h2>
                <p className="text-slate-500 text-lg font-medium mb-1">Fútbol, Voley y todo lo que te mueve.</p>
                <p className="text-slate-400 text-sm font-semibold">Uniformes con tu nombre y número</p>
              </div>
              <div className="self-start px-6 py-3 bg-orange-50 text-orange-700 font-bold rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-200 transition-all">
                Ver Catálogo
              </div>
            </div>
          </Link>

          {/* Custom Design Card */}
          <Link to="/crear" className="group relative h-80 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-800">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                  <Palette className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-display font-black text-white mb-2">Crea tu Diseño</h2>
                <p className="text-slate-400 text-lg font-medium mb-1">Sube tu idea y la hacemos realidad.</p>
                <p className="text-slate-500 text-sm font-semibold">Sublimación premium, colores que no se borran</p>
              </div>
              <div className="self-start px-6 py-3 bg-white text-slate-900 font-bold rounded-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-900/20 transition-all">
                Subir Idea
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Home;
