import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, MessageCircle, Pen, ShieldCheck, Truck, ArrowRight, ChevronDown, HelpCircle, CreditCard, Target, Award, Instagram } from 'lucide-react';
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
  { 
    images: ['/images/social/speed-wash-1.jpg?v=1', '/images/social/speed-wash-2.png?v=1'], 
    alt: 'Testimonio Speed wash', 
    name: 'Speed wash', 
    desc: 'Equipo Speed wash – Listos en pista' 
  },
  { 
    images: ['/images/social/migue-1.jpg?v=1', '/images/social/migue-2.jpg?v=1'], 
    alt: 'Testimonio Migue', 
    name: 'Migue', 
    desc: 'Red Bull Racing – Personalización Migue' 
  },
  { 
    images: ['/images/social/chat-2.png?v=1', '/images/social/chat-1.png?v=1'], 
    alt: 'Testimonio María L.', 
    name: 'María L.', 
    desc: 'Red Bull – "Queda chevereee"' 
  },
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
  const [testimonioIdx, setTestimonioIdx] = useState<number | null>(null);
  const [imageIdx, setImageIdx] = useState<number>(0);

  const currentTestimonio = testimonioIdx !== null ? chatTestimonios[testimonioIdx] : null;

  const handleNext = () => {
    if (currentTestimonio) {
      setImageIdx((prev) => (prev + 1) % currentTestimonio.images.length);
    }
  };

  const handlePrev = () => {
    if (currentTestimonio) {
      setImageIdx((prev) => (prev - 1 + currentTestimonio.images.length) % currentTestimonio.images.length);
    }
  };

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
            onClick={() => {
              setTestimonioIdx(i);
              setImageIdx(0);
            }}
          >
            <div className="aspect-[4/5] relative overflow-hidden" style={{ backgroundColor: '#0e1117' }}>
              <img
                src={t.images[0]}
                alt={t.alt}
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ filter: 'brightness(1.08) contrast(1.02)' }}
                onError={(e) => { 
                  console.error('Error loading image:', t.images[0]);
                  // Don't hide the parent anymore so we can debug
                }}
              />
              {t.images.length > 1 && (
                <div className="absolute top-3 right-3 z-30 bg-black/50 backdrop-blur-md rounded-full px-2 py-1 text-[8px] font-black text-white uppercase tracking-tighter border border-white/10">
                  +{t.images.length - 1} fotos
                </div>
              )}
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
        src={currentTestimonio ? currentTestimonio.images[imageIdx] : ''}
        alt={currentTestimonio?.alt || ''}
        isOpen={testimonioIdx !== null}
        onClose={() => setTestimonioIdx(null)}
        onPrev={currentTestimonio && currentTestimonio.images.length > 1 ? handlePrev : undefined}
        onNext={currentTestimonio && currentTestimonio.images.length > 1 ? handleNext : undefined}
        imageLabel={currentTestimonio ? currentTestimonio.name : undefined}
        imageIndex={imageIdx}
        imageCount={currentTestimonio?.images.length}
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
        <div
          className="py-16 sm:py-24 px-8 rounded-[3rem] text-center relative overflow-hidden"
          style={{
            backgroundColor: '#111722',
            border: '1px solid rgba(255,255,255,0.03)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}
        >
          {/* Subtle background glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#E1306C]/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#F56040]/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="font-display font-black text-white italic uppercase text-4xl sm:text-6xl mb-4 tracking-tight leading-none">
              Comunidad<br className="sm:hidden" /> <span style={{ color: '#E10600' }}>Q'Parche</span>
            </h3>
            <p
              className="text-lg sm:text-2xl font-black italic uppercase mb-10 tracking-[0.1em]"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              @qparche_baq
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://www.instagram.com/qparche_baq"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl text-white font-black uppercase italic text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(225,48,108,0.25)]"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                }}
              >
                <Instagram className="w-6 h-6" />
                Seguir en las pistas
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                Lanzamientos · Eventos · Cultura Racing
              </p>
            </div>
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
