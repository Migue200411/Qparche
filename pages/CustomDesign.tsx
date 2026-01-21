import React, { useState, useRef } from 'react';
import { ShirtSize, ShirtColor, Category } from '../types';
import { Upload, Sparkles, Send, AlertTriangle, RefreshCcw } from 'lucide-react';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';
// import { editImageWithGemini } from '../services/geminiService';

const CustomDesign: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);

  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const [category, setCategory] = useState<Category>('carnaval');
  const [size, setSize] = useState<ShirtSize>(ShirtSize.M);
  const [color, setColor] = useState<ShirtColor>(ShirtColor.BLANCO);
  const [placement, setPlacement] = useState<'frente' | 'espalda' | 'ambos'>('frente');
  const [description, setDescription] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const waNumber = "573004945790";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setEditedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeminiEdit = async () => {
    if (!imagePreview || !prompt) return;

    setIsGenerating(true);
    try {
      const base64Data = imagePreview.split(',')[1];
      const mimeType = imagePreview.split(';')[0].split(':')[1];
      // const resultBase64 = await editImageWithGemini(base64Data, mimeType, prompt);
      const resultBase64 = null; // DISABLED FOR DEBUGGING

      if (resultBase64) {
        setEditedImage(`data:image/png;base64,${resultBase64}`);
      } else {
        alert("No se pudo generar la edición. Intenta un prompt diferente.");
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con la IA. Verifica tu conexión.");
    } finally {
      setIsGenerating(false);
    }
  };

  const [isUploading, setIsUploading] = useState(false);

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Qparche');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/df9hx41ru/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      return null;
    }
  };

  const handleOrder = async () => {
    if (!selectedFile && !description) {
      alert("Por favor sube una imagen o describe tu idea.");
      return;
    }

    if (!selectedFile) {
      // If no file, just send description
      sendWhatsAppMessage(null);
      return;
    }

    setIsUploading(true);
    const uploadedUrl = await uploadToCloudinary(selectedFile);
    setIsUploading(false);

    if (!uploadedUrl) {
      alert("Hubo un error subiendo la imagen. Por favor intenta de nuevo.");
      return;
    }

    sendWhatsAppMessage(uploadedUrl);
  };

  const sendWhatsAppMessage = (imageUrl: string | null) => {
    const message = `Hola Q Parche, quiero cotizar un diseño personalizado:

Estilo: ${category.toUpperCase()}
Talla: ${size}
Color: ${color}
Ubicacion: ${placement}
Detalles: ${description || 'N/A'}

Imagen: ${imageUrl || 'N/A'}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="bg-white/80 backdrop-blur-sm py-20 px-4 border-b border-orange-100 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-4 text-q-dark">Sube tu Diseño</h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">¿Tienes una foto o logo listo? Súbelo y lo sublimamos con calidad top.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Upload & AI */}
          <div className="space-y-8">

            {/* Upload Area */}
            <div
              className="border-4 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center hover:border-q-carnaval hover:bg-orange-50/50 transition-all cursor-pointer group bg-white shadow-sm hover:shadow-md"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="max-h-80 mx-auto rounded-2xl shadow-lg object-contain" />
              ) : (
                <div className="flex flex-col items-center text-slate-400 group-hover:text-q-carnaval transition-colors">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm group-hover:bg-white">
                    <Upload className="w-10 h-10 text-slate-300 group-hover:text-q-carnaval" />
                  </div>
                  <p className="font-bold text-xl mb-2 text-slate-700 group-hover:text-q-carnaval">Toca para subir imagen</p>
                  <p className="text-base text-slate-400">PNG o JPG de buena calidad</p>
                </div>
              )}
            </div>

            {/* AI Controls - DISABLED FOR LAUNCH */}
            {false && imagePreview && (
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Sparkles className="text-purple-600 w-6 h-6" />
                  </div>
                  <h3 className="text-q-dark font-bold text-xl">Mejorar con IA (Opcional)</h3>
                </div>

                <div className="space-y-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder='Ej: "Quita el fondo", "Hazlo estilo caricatura", "Ponle colores neón"...'
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-base focus:border-purple-500 outline-none resize-none h-32 transition-all"
                  />
                  <button
                    onClick={handleGeminiEdit}
                    disabled={isGenerating || !prompt}
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-white ${isGenerating || !prompt
                      ? 'bg-slate-300 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200'
                      }`}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCcw className="w-5 h-5 animate-spin" />
                        Editando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generar Edición
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* No Design Helper */}
            <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 text-center">
              <p className="text-slate-700 font-bold text-lg mb-2">¿No tienes diseño?</p>
              <p className="text-slate-600">
                Escríbenos por WhatsApp y te ayudamos a armarlo.
                <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" className="block mt-2 text-q-carnaval font-black underline decoration-2 underline-offset-2 hover:text-orange-600">
                  Ir al WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Configuration */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-100">
              <h3 className="text-3xl font-bold text-q-dark mb-8">Configura tu camiseta</h3>

              {/* Category Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">¿Qué estilo es?</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCategory('carnaval')}
                    className={`flex-1 py-4 px-4 rounded-xl border-2 font-bold text-lg transition-all ${category === 'carnaval' ? 'border-q-carnaval bg-orange-50 text-q-carnaval' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    Carnaval 🎉
                  </button>
                  <button
                    onClick={() => setCategory('deportiva')}
                    className={`flex-1 py-4 px-4 rounded-xl border-2 font-bold text-lg transition-all ${category === 'deportiva' ? 'border-q-sport bg-blue-50 text-q-sport' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    Deportiva ⚽️
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Talla</label>
                <SizeSelector
                  selectedSize={size}
                  onSizeChange={setSize}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Color</label>
                <ColorSelector
                  selectedColor={color}
                  onColorChange={setColor}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Ubicación del diseño</label>
                <div className="flex gap-3">
                  {['frente', 'espalda', 'ambos'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlacement(p as any)}
                      className={`flex-1 py-3 rounded-xl text-base font-bold border-2 transition-all ${placement === p ? 'bg-q-dark text-white border-q-dark shadow-md' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                    >
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  ))}
                </div>
                {placement === 'ambos' && <p className="text-sm text-q-carnaval mt-2 font-bold">*El precio puede variar</p>}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Instrucciones</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalles extra: Quiero el nombre en la espalda, el logo más pequeño, etc."
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 text-base focus:ring-2 focus:ring-q-carnaval focus:border-transparent outline-none resize-none h-32 transition-all"
                />
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl flex gap-4 items-start border border-orange-100 mb-8">
                <AlertTriangle className="text-q-carnaval w-6 h-6 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  ⚠️ Ojo: Diseño personalizado cuesta $40.000.
                  Requiere 50% de anticipo.
                  Te enviamos un mockup para aprobar antes de sublimar.
                </p>
              </div>

              <button
                onClick={handleOrder}
                disabled={isUploading}
                className={`w-full bg-q-carnaval hover:bg-orange-600 text-white font-bold h-14 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-100 hover:shadow-2xl hover:shadow-orange-200 text-lg transform ${isUploading ? 'opacity-75 cursor-wait' : 'hover:-translate-y-1'}`}
              >
                {isUploading ? (
                  <>
                    <RefreshCcw className="w-6 h-6 animate-spin" />
                    Subiendo imagen...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Continuar en WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomDesign;