import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'http';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Dev API handler for /api/ai/suggest (mirrors Vercel serverless function)
        {
          name: 'ai-suggest-dev-api',
          configureServer(server) {
            server.middlewares.use('/api/ai/suggest', async (req: IncomingMessage, res: ServerResponse) => {
              if (req.method !== 'POST') {
                res.writeHead(405, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Método no permitido' }));
                return;
              }

              // Read request body
              let body = '';
              req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const idea = (data.idea || '').trim().replace(/\s+/g, ' ');

                  if (idea.length < 10 || idea.length > 300) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'La idea debe tener entre 10 y 300 caracteres.' }));
                    return;
                  }

                  const apiKey = env.GEMINI_API_KEY;
                  if (!apiKey) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'GEMINI_API_KEY no configurada. Agrégala a tu archivo .env.local' }));
                    return;
                  }

                  const sanitize = (s: string | undefined) => (s || '').trim().replace(/\s+/g, ' ');
                  const category = sanitize(data.category) || 'TuDiseno';
                  const style = sanitize(data.style) || 'Pro';
                  const colors = sanitize(data.colors) || 'a criterio del diseñador';
                  const name = sanitize(data.name);
                  const number = sanitize(data.number);
                  const team = sanitize(data.team);

                  let userPrompt = `Idea del usuario: "${idea}"\nCategoría: ${category}\nEstilo deseado: ${style}\nColores: ${colors}`;
                  if (name) userPrompt += `\nNombre para personalizar: ${name}`;
                  if (number) userPrompt += `\nNúmero: ${number}`;
                  if (team) userPrompt += `\nEquipo/Escudería: ${team}`;
                  if (category === 'F1' && team === 'Audi') {
                    userPrompt += `\nNota especial: Para Audi F1, usar paleta negro/blanco/plateado con estética premium motorsport minimal.`;
                  }

                  const systemPrompt = `Eres un asistente de diseño para camisetas sublimadas de la marca Q'Parche (Barranquilla, Colombia). NO generas imágenes; propones conceptos creativos y escribes prompts detallados para un generador de imágenes.\n\nREGLAS DE DISEÑO:\n- Mantén resultados imprimibles: alto contraste, composición centrada, pocas tintas, elementos limpios.\n- Cada prompt DEBE describir: "camiseta tipo mockup e-commerce, prenda centrada, fondo blanco puro, iluminación de estudio suave, sin persona, sin perchas, sin manos, sin sombras duras, alta nitidez, 1:1, sin texto ilegible"\n- Incluir indicaciones de impresión: líneas gruesas, colores planos, sin degradados complicados (a menos que el estilo sea Pro).\n\nRESPONDE SIEMPRE en JSON válido con EXACTAMENTE 3 propuestas distintas.\n\nFORMATO (JSON estricto):\n{\n  "proposals": [\n    {\n      "title": "Nombre corto del concepto",\n      "description": "Descripción del diseño en 1-2 líneas",\n      "prompt": "Prompt completo para generador de imágenes",\n      "print_notes": ["Nota sobre imprimibilidad"]\n    }\n  ]\n}`;

                  const geminiRes = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        contents: [
                          { role: 'user', parts: [{ text: userPrompt }] },
                        ],
                        systemInstruction: {
                          parts: [{ text: systemPrompt }],
                        },
                        generationConfig: {
                          temperature: 0.85,
                          maxOutputTokens: 2000,
                          responseMimeType: 'application/json',
                        },
                      }),
                    }
                  );

                  if (!geminiRes.ok) {
                    console.error('Gemini error:', geminiRes.status);
                    if (geminiRes.status === 429) {
                      res.writeHead(429, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ error: 'Demasiadas solicitudes. Espera 30 segundos e intenta de nuevo.' }));
                      return;
                    }
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Error al generar ideas. Intenta de nuevo.' }));
                    return;
                  }

                  const result = await geminiRes.json();
                  const content = result.candidates?.[0]?.content?.parts?.[0]?.text;

                  if (!content) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'No se recibió respuesta de la IA.' }));
                    return;
                  }

                  const parsed = JSON.parse(content);

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(parsed));
                } catch (err) {
                  console.error('Dev API error:', err);
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Error interno del servidor.' }));
                }
              });
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
