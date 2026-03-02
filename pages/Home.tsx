import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, MessageCircle, Pen, Package, ShieldCheck, Truck, Users, ArrowRight, ChevronDown, HelpCircle, CreditCard, Eye, Zap, Palette, Gauge, Target, Award } from 'lucide-react';
import ImageViewer from '../components/ImageViewer';

/* ── FAQ Accordion Item ── */
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800/40 rounded-xl overflow-hidden bg-slate-900/40 transition-all hover:bg-slate-900/60 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className="w-5 h-5 text-[#E10600]/60 shrink-0" />
          <span className="text-slate-100 font-bold text-sm tracking-wide">{question}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed pl-[3.25rem]">{answer}</p>
      </div>
    </div>
  );
};

/* ── Testimonios Chat ── */
const chatTestimonios = [
  { src: '/images/social/chat-1.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull personalizada' },
  { src: '/images/social/chat-2.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull – "Queda chevereee"' },
  { src: '/images/social/chat-3.png', alt: 'Testimonio Nicolás', name: 'Nicolás', desc: 'Ferrari – Entrega confirmada' },
];

const StarRow: React.FC = () => (
  <div className="flex items-center gap-1 mb-2">
    {[1, 2, 3, 4, 5].map(s => (
      <svg key={s} className="w-2.5 h-2.5 text-[#E10600]/40 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    ))}
  </div>
);

const Testimonios: React.FC = () => {
  const [viewerIdx, setViewerIdx] = useState<number | null>(null);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3
          className="font-display font-black text-white italic uppercase tracking-tighter"
          style={{ fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: '1.05', letterSpacing: '-0.02em', maxWidth: '18ch', margin: '0 auto' }}
        >
          Experiencia Q’Parche
        </h3>
        <p className="text-slate-400 mt-4 font-bold tracking-widest uppercase text-xs opacity-85" style={{ maxWidth: '28ch', margin: '0 auto' }}>Cientos de fans ya están en pista</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {chatTestimonios.map((t, i) => (
          <div
            key={i}
            className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-[320px] bg-black rounded-2xl border border-slate-900 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer group shadow-2xl"
            onClick={() => setViewerIdx(i)}
          >
            <div className="aspect-[4/5] relative bg-[#0a0a0a] overflow-hidden">
              <img
                src={t.src}
                alt={t.alt}
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-85 group-hover:opacity-100 transition-opacity duration-700 [filter:brightness(1.08)_contrast(1.05)]"
                onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
              />
              <div
                className="absolute inset-0 z-20"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.08))' }}
              ></div>
            </div>
            <div className="p-6 relative z-30">
              <StarRow />
              <p className="text-[#f5f5f5] font-black text-sm tracking-tight">{t.name}</p>
              <p className="text-slate-400 text-[10px] mt-1 font-bold uppercase tracking-wider">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
};

/* ── Compra Segura Section ── */
const CompraSegura: React.FC = () => {
  const steps = [
    { num: '1', icon: <Target className="w-5 h-5" />, title: 'Selecciona', desc: 'Elige tu escudería y talla.' },
    { num: '2', icon: <Pen className="w-5 h-5" />, title: 'Personaliza', desc: 'Envíanos tu nombre y número.' },
    { num: '3', icon: <CreditCard className="w-5 h-5" />, title: 'Reserva', desc: 'Confirma con el 50%.' },
    { num: '4', icon: <Award className="w-5 h-5" />, title: 'Recibe', desc: 'Paga el saldo al entregar.' },
  ];

  return (
    <div className="bg-[#0e0e12] rounded-[4rem] py-16 px-6 sm:px-12 border border-slate-900 relative overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 bg-[#E10600]/10 text-[#E10600]/80 text-[10px] font-black uppercase tracking-[0.4em] rounded-md mb-6 border border-[#E10600]/15">
            F1 Excellence
          </span>
          <h2
            className="font-display font-black text-white italic uppercase mb-6 leading-tight"
            style={{ fontSize: 'clamp(32px, 6vw, 48px)', letterSpacing: '-0.02em', maxWidth: '20ch', margin: '0 auto 1.5rem' }}
          >
            Haz tu pedido
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-medium opacity-85" style={{ maxWidth: '28ch' }}>
            Personaliza, reserva y recibe tu camiseta con total tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {steps.map((s, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#E10600]/40 border border-slate-900 mb-8 relative z-10 group-hover:border-[#E10600]/20 transition-all duration-500">
                {s.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E10600]/90 text-white rounded-lg flex items-center justify-center text-[10px] font-black italic shadow-lg">
                  {s.num}
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed px-4">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-display font-black text-white italic uppercase text-center mb-10 tracking-[0.2em] opacity-80">Pits FAQ</h3>
          <div className="space-y-4">
            <FaqItem
              question="¿La sublimación se desgasta?"
              answer="No. La tinta se integra en la tela. Resiste lavados intensos sin perder color ni calidad."
            />
            <FaqItem
              question="¿Puedo pedir otros diseños?"
              answer="Sí. Hacemos cualquier diseño que tengas en mente. Contáctanos y lo fabricamos."
            />
            <FaqItem
              question="¿Hacen envíos nacionales?"
              answer="Sí. Envío gratis en Barranquilla. Para otras ciudades, despachamos por transportadora nacional."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col font-body text-slate-100">

      {/* ═══════════ HERO SECTION ═══════════ */}
      <div
        className="relative bg-black pt-32 pb-24 overflow-hidden flex items-center"
        style={{ minHeight: '100svh' }}
      >
        {/* Cinematic Backdrop */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#E10600]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#E10600]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 bg-[#E10600]/15 text-[#E10600] text-[10px] font-black uppercase tracking-[0.5em] rounded-sm mb-8 italic border border-[#E10600]/10">
            COLECCIÓN F1
          </span>

          <h1
            className="font-display font-black mb-8 text-white uppercase italic drop-shadow-2xl"
            style={{ fontSize: 'clamp(42px, 10vw, 115px)', lineHeight: '0.9', letterSpacing: '-0.04em', maxWidth: '16ch' }}
          >
            Camisetas<br />
            Fórmula <span className="text-[#E10600]">1</span><br />
            <span className="text-white">Personalizadas</span>
          </h1>

          <p className="max-w-2xl text-xl text-slate-400 font-bold leading-relaxed mb-12 tracking-tight opacity-85" style={{ maxWidth: '28ch' }}>
            Nombre y número incluidos. Hecha para verdaderos fans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[420px] sm:max-w-none">
            <Link
              to="/f1"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-[14px] sm:rounded-xl text-lg sm:text-xl font-black text-white bg-[#E10600] brightness-95 shadow-xl shadow-black/40 transition-all hover:brightness-110 hover:-translate-y-0.5 flex items-center justify-center gap-4 italic uppercase"
            >
              Explorar Escuderías
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="https://wa.me/3004945790?text=Hola%20Q'Parche,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-[14px] sm:rounded-xl text-lg sm:text-xl font-black text-white bg-black/40 border border-slate-800 hover:bg-black/60 transition-all flex items-center justify-center gap-3 uppercase italic backdrop-blur-sm"
              style={{ WebkitBackdropFilter: 'blur(10px)' }}
            >
              <MessageCircle className="w-6 h-6 text-green-600/60" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════ BENEFITS SECTION ═══════════ */}
      <div className="bg-[#0e0e12] border-y border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#E10600]/60 mb-6 border border-slate-900 transition-colors group-hover:border-[#E10600]/20">
                <Pen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">Personalización Total</h4>
              <p className="text-slate-400 text-[11px] font-bold uppercase leading-snug tracking-widest">Nombre y número incluidos.<br />Sublimación que no se borra.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#E10600]/60 mb-6 border border-slate-900 transition-colors group-hover:border-[#E10600]/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">Pago 50/50</h4>
              <p className="text-slate-400 text-[11px] font-bold uppercase leading-snug tracking-widest">Reserva con el 50% y paga<br />el resto al recibir.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#E10600]/60 mb-6 border border-slate-900 transition-colors group-hover:border-[#E10600]/20">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">Entrega sin costo</h4>
              <p className="text-slate-400 text-[11px] font-bold uppercase leading-snug tracking-widest">Gratis en Barranquilla<br />y Soledad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ CONTENT SECTIONS ═══════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">

        {/* Testimonials */}
        <Testimonios />

        {/* Process */}
        <CompraSegura />

        {/* ═══════════ FINAL CTA SECTION ═══════════ */}
        <div className="bg-[#0e0e12] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden border border-slate-900 shadow-2xl">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E10600]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-8 uppercase italic leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(36px, 8vw, 88px)', maxWidth: '16ch', margin: '0 auto 2rem' }}
            >
              Tu escudería.<br />Tu nombre. Tu número.
            </h2>
            <p className="text-slate-400 text-2xl font-bold mb-16 tracking-tight opacity-85" style={{ maxWidth: '24ch', margin: '0 auto 4rem' }}>
              Lista para la próxima carrera.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-[420px] sm:max-w-none mx-auto">
              <Link
                to="/f1"
                className="w-full sm:w-auto px-10 sm:px-16 py-5 sm:py-6 bg-[#E10600] brightness-95 text-white font-black text-xl sm:text-2xl rounded-[14px] sm:rounded-2xl shadow-xl shadow-black/10 hover:brightness-110 hover:-translate-y-0.5 transition-all uppercase italic flex items-center justify-center gap-4"
              >
                Explorar Colección F1
                <Trophy className="w-7 h-7" />
              </Link>
              <p className="text-slate-600 font-black text-[10px] tracking-[0.4em] uppercase hidden md:block">
                Barranquilla · Colombia
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12"></div> {/* Bottom Buffer */}
    </div>
  );
};

export default Home;
