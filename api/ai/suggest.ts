// Vercel Serverless Function - POST /api/ai/suggest
// Runtime: Edge (uses standard Web APIs)
export const config = { runtime: 'edge' };

// In-memory rate limiter (resets on cold start - use Upstash Redis for production)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }); // 1 hour window
    return true;
  }
  if (entry.count >= 30) return false; // 30 requests per hour
  entry.count++;
  return true;
}

function sanitize(s: string | undefined): string {
  return (s || '').trim().replace(/\s+/g, ' ');
}

const SYSTEM_PROMPT = `Eres un asistente de diseño para camisetas sublimadas de la marca Q'Parche (Barranquilla, Colombia). NO generas imágenes; propones conceptos creativos y escribes prompts detallados para un generador de imágenes.

REGLAS DE DISEÑO:
- Mantén resultados imprimibles: alto contraste, composición centrada, pocas tintas, elementos limpios.
- Cada prompt DEBE describir: "camiseta tipo mockup e-commerce, prenda centrada, fondo blanco puro, iluminación de estudio suave, sin persona, sin perchas, sin manos, sin sombras duras, alta nitidez, 1:1, sin texto ilegible"
- Incluir indicaciones de impresión: líneas gruesas, colores planos, sin degradados complicados (a menos que el estilo sea Pro).
- Si el estilo es "Llamativo", puedes usar más saturación y elementos gráficos audaces, pero siempre imprimible.
- Si el estilo es "Minimal", prioriza composición simple con máximo 2-3 elementos.

REGLAS DE RESPUESTA:
- Responde SIEMPRE en JSON válido con EXACTAMENTE 3 propuestas distintas.
- No incluyas texto fuera del JSON.
- Cada propuesta debe ser creativa y diferente de las otras.

FORMATO (JSON estricto):
{
  "proposals": [
    {
      "title": "Nombre corto del concepto (3-5 palabras)",
      "description": "Descripción del diseño en 1-2 líneas, clara y atractiva",
      "prompt": "Prompt completo y detallado para generador de imágenes",
      "print_notes": ["Nota sobre imprimibilidad", "Otra nota si aplica"]
    }
  ]
}`;

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Rate limit
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({
      error: 'Has alcanzado el límite de solicitudes (30 por hora). Intenta más tarde.'
    }), { status: 429, headers: { 'Content-Type': 'application/json' } });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Body inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const idea = sanitize(body.idea);
  if (idea.length < 10 || idea.length > 300) {
    return new Response(JSON.stringify({
      error: 'La idea debe tener entre 10 y 300 caracteres.'
    }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const category = sanitize(body.category) || 'TuDiseno';
  const style = sanitize(body.style) || 'Pro';
  const colors = sanitize(body.colors) || 'a criterio del diseñador';
  const name = sanitize(body.name);
  const number = sanitize(body.number);
  const team = sanitize(body.team);

  // Build user prompt
  let userPrompt = `Idea del usuario: "${idea}"
Categoría: ${category}
Estilo deseado: ${style}
Colores: ${colors}`;

  if (name) userPrompt += `\nNombre para personalizar: ${name}`;
  if (number) userPrompt += `\nNúmero: ${number}`;
  if (team) userPrompt += `\nEquipo/Escudería: ${team}`;

  if (category === 'F1' && team === 'Audi') {
    userPrompt += `\nNota especial: Para Audi F1, usar paleta negro/blanco/plateado con estética premium motorsport minimal.`;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY no configurada en el servidor.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: userPrompt }] },
          ],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 2000,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('Gemini API error:', response.status);
      if (response.status === 429) {
        return new Response(JSON.stringify({
          error: 'Demasiadas solicitudes. Espera 30 segundos e intenta de nuevo.'
        }), { status: 429, headers: { 'Content-Type': 'application/json' } });
      }
      if (response.status === 400) {
        return new Response(JSON.stringify({
          error: 'Error en la solicitud a la IA. Intenta con otra idea.'
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify({
        error: 'Error al generar ideas. Intenta de nuevo.'
      }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!content) {
      return new Response(JSON.stringify({
        error: 'No se recibió respuesta de la IA.'
      }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const parsed = JSON.parse(content);

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Suggest API error:', error);
    return new Response(JSON.stringify({
      error: 'Error interno. Intenta de nuevo.'
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
