import React, { useState } from 'react';
import { Sparkles, Copy, Check, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

interface Proposal {
  title: string;
  description: string;
  prompt: string;
  print_notes: string[];
}

interface IdeaGeneratorProps {
  onSelectIdea: (text: string) => void;
}

const CATEGORIES = ['F1', 'Deportiva', 'Amor & Amistad', 'Tu Diseño'] as const;
const STYLES = ['Minimal', 'Pro', 'Llamativo'] as const;
const F1_TEAMS = ['Ferrari', 'Mercedes', 'Red Bull', 'McLaren', 'Audi', 'Alpine', 'Aston Martin', 'Williams', 'Haas', 'Stake'] as const;

const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ onSelectIdea }) => {
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState<string>('Tu Diseño');
  const [style, setStyle] = useState<string>('Pro');
  const [colors, setColors] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [team, setTeam] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleGenerate = async () => {
    if (idea.trim().length < 10) {
      setError('Escribe al menos 10 caracteres describiendo tu idea.');
      return;
    }

    setLoading(true);
    setError('');
    setProposals([]);

    const payload = JSON.stringify({
      idea: idea.trim(),
      category,
      style,
      colors,
      name: name || undefined,
      number: number || undefined,
      team: category === 'F1' ? team : undefined,
    });

    // Retry logic for 429 (rate limit)
    let attempts = 0;
    const maxRetries = 2;

    while (attempts <= maxRetries) {
      try {
        const res = await fetch('/api/ai/suggest', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
        });

        const data = await res.json();

        if (res.status === 429 && attempts < maxRetries) {
          attempts++;
          setError(`Esperando... reintentando (${attempts}/${maxRetries})`);
          await new Promise(r => setTimeout(r, 5000 * attempts)); // wait 5s, then 10s
          continue;
        }

        if (!res.ok) {
          setError(data.error || 'Error al generar ideas.');
          setLoading(false);
          return;
        }

        if (data.proposals && Array.isArray(data.proposals)) {
          setProposals(data.proposals.slice(0, 3));
        } else {
          setError('Respuesta inesperada. Intenta de nuevo.');
        }
        setLoading(false);
        return;
      } catch {
        setError('No se pudo conectar con el servidor. Verifica tu conexión.');
        setLoading(false);
        return;
      }
    }
    setLoading(false);
  };

  const handleUseIdea = (proposal: Proposal) => {
    const text = `Idea IA: ${proposal.title} — ${proposal.description}. Prompt: ${proposal.prompt}`;
    onSelectIdea(text);
    showToast('Listo, se agregó a tu pedido');
  };

  const handleCopyPrompt = async (prompt: string, index: number) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedIndex(index);
      showToast('Prompt copiado al portapapeles');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      showToast('No se pudo copiar');
    }
  };

  return (
    <div className="relative">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-xl animate-bounce-in flex items-center gap-2">
          <Check className="w-4 h-4 text-green-400" />
          {toast}
        </div>
      )}

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-black">¿No tienes diseño? Dile tu idea a la IA</h3>
            </div>
            <p className="text-white/70 text-sm font-medium">Te da 3 opciones y tú eliges.</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Idea textarea */}
          <div>
            <textarea
              value={idea}
              onChange={(e) => {
                if (e.target.value.length <= 300) setIdea(e.target.value);
              }}
              placeholder='Ej: "Camiseta F1 estilo Audi, negra, líneas blancas, número 44, nombre Miguel…"'
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none resize-none h-24 transition-all placeholder:text-slate-400"
            />
            <p className="text-right text-[10px] text-slate-400 font-bold mt-1">{idea.length}/300</p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Categoría</label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setCategory(cat); if (cat !== 'F1') setTeam(''); }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    category === cat
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Estilo</label>
            <div className="flex flex-wrap gap-2">
              {STYLES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    style === s
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Colors + Name + Number row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Colores</label>
              <input
                type="text"
                value={colors}
                onChange={(e) => setColors(e.target.value)}
                placeholder="negro, blanco, rojo"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Nombre <span className="text-slate-300">(opcional)</span></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Miguel"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">Número <span className="text-slate-300">(opcional)</span></label>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="44"
                maxLength={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Team selector (F1 only) */}
          {category === 'F1' && (
            <div>
              <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Escudería</label>
              <div className="flex flex-wrap gap-2">
                {F1_TEAMS.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTeam(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      team === t
                        ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-red-300 hover:text-red-600'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="flex items-start gap-2 bg-red-50 text-red-700 text-sm font-medium p-3 rounded-xl border border-red-100">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={loading || idea.trim().length < 10}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-all text-sm shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generando ideas...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generar ideas
              </>
            )}
          </button>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100 animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-5 bg-slate-200 rounded-full w-16"></div>
                  <div className="h-5 bg-slate-200 rounded-full w-20"></div>
                </div>
                <div className="h-9 bg-slate-200 rounded-lg w-full mb-2"></div>
                <div className="h-9 bg-slate-200 rounded-lg w-full"></div>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {proposals.length > 0 && !loading && (
          <div className="px-6 pb-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">3 ideas para ti</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {proposals.map((proposal, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  {/* Title */}
                  <h4 className="font-black text-slate-900 text-sm mb-2 leading-tight">{proposal.title}</h4>
                  {/* Description */}
                  <p className="text-slate-500 text-xs mb-3 leading-relaxed">{proposal.description}</p>
                  {/* Print notes as badges */}
                  {proposal.print_notes && proposal.print_notes.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proposal.print_notes.map((note, j) => (
                        <span key={j} className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleUseIdea(proposal)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all text-xs shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                      Usar esta idea
                    </button>
                    <button
                      onClick={() => handleCopyPrompt(proposal.prompt, i)}
                      className="w-full bg-white hover:bg-slate-50 text-slate-600 font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-all text-xs border border-slate-200 hover:border-slate-300"
                    >
                      {copiedIndex === i ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copiar prompt
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaGenerator;
