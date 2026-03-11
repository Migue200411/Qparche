import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, MessageCircle, Pen, ShieldCheck, Truck, ArrowRight, ChevronDown, HelpCircle, CreditCard, Target, Award } from 'lucide-react';
import ImageViewer from '../components/ImageViewer';

/* ────────────────────────────────────────────────────
   Paleta tonal (sin negro absoluto)
   Base:     #0e1117
   Elevado:  #111722
   Elemento: #0e1117
──────────────────────────────────────────────────── */

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: open ? 'rgba(17,23,34,0.85)' : 'rgba(17,23,34,0.5)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <HelpCircle className="w-4 h-4 shrink-0" style={{ color: 'rgba(225,6,0,0.45)' }} />
          <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.82)' }}>{question}</span>
        </div>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-300"
          style={{ color: 'rgba(255,255,255,0.3)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed pl-[3.25rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

/* ── Testimonios ── */
const chatTestimonios = [
  { src: '/images/social/chat-1.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull personalizada' },
  { src: '/images/social/chat-2.png', alt: 'Testimonio María L.', name: 'María L.', desc: 'Red Bull – "Queda chevereee"' },
  { src: '/images/social/chat-3.png', alt: 'Testimonio Nicolás', name: 'Nicolás', desc: 'Ferrari – Entrega confirmada' },
];

const StarRow: React.FC = () => (
  <div className="flex items-center gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map(s => (
      <svg key={s} className="w-3 h-3 fill-current" style={{ color: 'rgba(225,6,0,0.55)' }} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonios: React.FC = () => {
  const [viewerIdx, setViewerIdx] = useState<number | null>(null);
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3
          className="font-display font-black text-white italic uppercase"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: '1.05', letterSpacing: '-0.02em', maxWidth: '18ch', margin: '0 auto' }}
        >
          Experiencia Q'Parche
        </h3>
        <p className="mt-3 text-xs font-medium uppercase" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', maxWidth: '28ch', margin: '0.75rem auto 0' }}>
          Cientos de fans ya están en pista
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {chatTestimonios.map((t, i) => (
          <div
            key={i}
            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[300px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: '#111722',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.32)',
            }}
            onClick={() => setViewerIdx(i)}
          >
            <div className="aspect-[4/5] relative overflow-hidden" style={{ backgroundColor: '#0e1117' }}>
              <img
                src={t.src}
                alt={t.alt}
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ filter: 'brightness(1.08) contrast(1.02)' }}
                onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)' }}
              />
            </div>
            <div className="px-5 py-4">
              <StarRow />
              <p className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{t.name}</p>
              <p className="text-[10px] mt-0.5 font-medium uppercase" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>{t.desc}</p>
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

/* ── Proceso de compra ── */
const CompraSegura: React.FC = () => {
  const steps = [
    { num: '1', icon: <Target className="w-5 h-5" />, title: 'Selecciona', desc: 'Elige tu escudería y talla.' },
    { num: '2', icon: <Pen className="w-5 h-5" />, title: 'Personaliza', desc: 'Envíanos tu nombre y número.' },
    { num: '3', icon: <CreditCard className="w-5 h-5" />, title: 'Reserva', desc: 'Confirma con el 50%.' },
    { num: '4', icon: <Award className="w-5 h-5" />, title: 'Recibe', desc: 'Paga el saldo al entregar.' },
  ];

  return (
    <div
      className="rounded-[2.5rem] py-16 px-6 sm:px-12 relative overflow-hidden"
      style={{
        backgroundColor: '#111722',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-3.5 py-1.5 text-[10px] font-bold uppercase rounded mb-6"
            style={{ backgroundColor: 'rgba(225,6,0,0.07)', color: 'rgba(225,6,0,0.6)', border: '1px solid rgba(225,6,0,0.1)', letterSpacing: '0.3em' }}
          >
            Cómo funciona
          </span>
          <h2
            className="font-display font-black text-white italic uppercase leading-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 44px)', letterSpacing: '-0.02em', maxWidth: '22ch', margin: '0 auto 1rem' }}
          >
            Haz tu pedido
          </h2>
          <p className="text-base leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '30ch', margin: '0 auto' }}>
            Personaliza, reserva y recibe con total tranquilidad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative transition-all duration-400"
                style={{ backgroundColor: '#0e1117', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(225,6,0,0.5)' }}
              >
                {s.icon}
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-[#E10600] text-white rounded-md flex items-center justify-center text-[9px] font-black italic"
                  style={{ boxShadow: '0 3px 10px rgba(225,6,0,0.3)' }}
                >
                  {s.num}
                </div>
              </div>
              <h3 className="text-base font-black text-white mb-1.5 tracking-tight">{s.title}</h3>
              <p className="text-xs font-medium leading-snug px-2" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3
            className="font-display font-black italic uppercase text-center mb-7"
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em' }}
          >
            Preguntas frecuentes
          </h3>
          <div className="space-y-2.5">
            <FaqItem question="¿La sublimación se desgasta?" answer="No. La tinta se integra en la tela. Resiste lavados intensos sin perder color ni calidad." />
            <FaqItem question="¿Puedo pedir otros diseños?" answer="Sí. Hacemos cualquier diseño que tengas en mente. Contáctanos y lo fabricamos." />
            <FaqItem question="¿Hacen envíos nacionales?" answer="Sí. Envío gratis en Barranquilla. Para otras ciudades, despachamos por transportadora nacional." />
          </div>
        </div>

      </div>
    </div>
  );
};

/* ── Home ── */
const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-body" style={{ backgroundColor: '#0e1117', color: 'rgba(255,255,255,0.95)' }}>

      {/* ═══ HERO ═══ */}
      <div
        className="relative pt-20 sm:pt-32 pb-12 sm:pb-24 overflow-hidden flex items-center"
        style={{ minHeight: 'min(85svh, 800px)', backgroundColor: '#0e1117' }}
      >
        {/* Glows — muy contenidos */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ backgroundColor: 'rgba(225,6,0,0.035)' }} />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[160px] translate-y-1/3 -translate-x-1/3 pointer-events-none" style={{ backgroundColor: 'rgba(225,6,0,0.025)' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

          {/* Badge */}
          <span
            className="inline-block px-4 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase rounded-sm mb-4 sm:mb-8 italic"
            style={{ backgroundColor: 'rgba(225,6,0,0.08)', color: 'rgba(225,6,0,0.8)', border: '1px solid rgba(225,6,0,0.1)', letterSpacing: '0.22em' }}
          >
            Colección F1 2025
          </span>

          {/* Título */}
          <h1
            className="font-display font-black mb-4 sm:mb-7 text-white uppercase italic"
            style={{ fontSize: 'clamp(34px, 10vw, 100px)', lineHeight: '0.9', letterSpacing: '-0.04em', maxWidth: '16ch' }}
          >
            Camisetas<br />
            Fórmula <span style={{ color: '#E10600' }}>1</span><br />
            Personalizadas
          </h1>

          {/* Subtítulo */}
          <p
            className="text-sm sm:text-xl font-medium leading-relaxed mb-6 sm:mb-12"
            style={{ maxWidth: '28ch', color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}
          >
            Tu nombre y número incluidos. <br className="hidden sm:block" /> Hechas para verdaderos fans.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-[320px] sm:max-w-none">
            <Link
              to="/f1"
              className="w-full sm:w-auto px-8 sm:px-12 rounded-[16px] sm:rounded-xl text-base sm:text-xl font-black text-white transition-all duration-300 sm:hover:-translate-y-[3px] flex items-center justify-center gap-3 italic uppercase"
              style={{
                backgroundColor: '#E10600',
                boxShadow: '0 8px 20px rgba(225,6,0,0.25)',
                minHeight: '56px',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.boxShadow = '0 10px 26px rgba(225,6,0,0.42)')}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(225,6,0,0.25)')}
            >
              Explorar Colección
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ BENEFICIOS ═══ */}
      <div
        className="py-10 sm:py-14"
        style={{
          backgroundColor: '#111722',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: <Pen className="w-7 h-7" />, title: 'Personalización Total', desc: 'Nombre y número incluidos.\nSublimación que no se borra.' },
              { icon: <ShieldCheck className="w-7 h-7" />, title: 'Pago 50/50', desc: 'Reserva con el 50% y paga\nel resto al recibir.' },
              { icon: <Truck className="w-7 h-7" />, title: 'Entrega sin costo', desc: 'Gratis en Barranquilla\ny Soledad.' },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400"
                  style={{ backgroundColor: '#0e1117', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(225,6,0,0.55)' }}
                >
                  {b.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-2 italic uppercase tracking-tight">{b.title}</h4>
                <p className="text-[11px] font-medium uppercase leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em' }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CONTENIDO ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[60px] sm:space-y-24 py-[60px] sm:py-20">

        <Testimonios />
        <CompraSegura />

        {/* ═══ SECCIÓN COMUNIDAD (INSTAGRAM) ═══ */}
        <div className="py-10">
          <div className="text-center mb-8">
            <h3 className="font-display font-black text-white italic uppercase text-3xl sm:text-4xl mb-3">Comunidad Q'Parche</h3>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.4)' }}>Síguenos en las pistas @qparche_baq</p>
          </div>
          <div className="text-center">
            <a
              href="https://www.instagram.com/qparche_baq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-bold uppercase italic tracking-widest text-white/60 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              Seguir en Instagram
            </a>
          </div>
        </div>

        {/* ── CTA FINAL ── */}
        <div
          className="rounded-[2.5rem] p-8 sm:p-14 md:p-20 text-center relative overflow-hidden"
          style={{
            backgroundColor: '#111722',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {/* Glow muy sutil */}
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[130px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            style={{ backgroundColor: 'rgba(225,6,0,0.04)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white uppercase italic leading-[0.92]"
              style={{ fontSize: 'clamp(26px, 6vw, 80px)', letterSpacing: '-0.03em', maxWidth: '18ch', margin: '0 auto 1.75rem' }}
            >
              Tu escudería.<br />Tu nombre.<br />Tu número.
            </h2>
            <p
              className="text-lg font-medium"
              style={{ maxWidth: '24ch', margin: '0 auto 3.5rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}
            >
              Lista para la próxima carrera.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-[420px] sm:max-w-none mx-auto">
              <Link
                to="/f1"
                className="w-full sm:w-auto px-10 sm:px-14 text-white font-black text-xl rounded-[16px] sm:rounded-xl transition-all duration-300 hover:-translate-y-[3px] uppercase italic flex items-center justify-center gap-4"
                style={{ minHeight: '52px', backgroundColor: '#E10600', boxShadow: '0 4px 18px rgba(225,6,0,0.28)' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 26px rgba(225,6,0,0.42)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(225,6,0,0.28)')}
              >
                Personalizar Ahora
                <Trophy className="w-6 h-6" />
              </Link>
              <p className="font-medium text-[10px] uppercase hidden md:block" style={{ letterSpacing: '0.28em', color: 'rgba(255,255,255,0.2)' }}>
                Barranquilla · Colombia
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8" />
    </div>
  );
};

export default Home;
