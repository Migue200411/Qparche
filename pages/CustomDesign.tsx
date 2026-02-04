import React, { useState, useRef } from 'react';
import { ShirtSize, ShirtColor, Category } from '../types';
import { Upload, Send, AlertTriangle, RefreshCcw, Camera } from 'lucide-react';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';

const CustomDesign: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [size, setSize] = useState<ShirtSize>(ShirtSize.M);
  const [color, setColor] = useState<ShirtColor>(ShirtColor.BLANCO);
  const [description, setDescription] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const waNumber = "3004945790";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOrder = () => {
    if (!selectedFile && !description) {
      alert("Por favor sube una imagen o describe tu idea.");
      return;
    }

    const message = `Hola Q Parche, quiero un diseño personalizado ($50.000):

Talla: ${size}
Color: ${color}
Idea/Notas: ${description || 'N/A'}
(Adjunto imagen al chat)`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="bg-white/80 backdrop-blur-sm py-16 px-4 border-b border-slate-100 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-4 text-q-dark">Crea tu Camiseta</h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            ¿Tienes una idea? Sube tu diseño o dinos qué quieres y lo armamos contigo.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Upload */}
          <div className="space-y-6">
            <div
              className="border-4 border-dashed border-slate-200 rounded-[2.5rem] p-8 text-center hover:border-q-sport hover:bg-blue-50/30 transition-all cursor-pointer group bg-white shadow-sm h-full flex flex-col justify-center min-h-[400px]"
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
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="max-h-80 mx-auto rounded-2xl shadow-lg object-contain" />
                  <div className="mt-4 text-sm text-slate-400 font-bold group-hover:text-q-sport">Clic para cambiar imagen</div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm group-hover:bg-white text-slate-300 group-hover:text-q-sport">
                    <Camera className="w-10 h-10" />
                  </div>
                  <p className="font-bold text-2xl mb-2 text-slate-700 group-hover:text-q-sport">Sube tu Imagen</p>
                  <p className="text-base text-slate-400 px-8">Toca aquí para seleccionar una foto, logo o diseño que tengas.</p>
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
              <AlertTriangle className="text-q-sport w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                <strong>Nota:</strong> Al hacer clic en "Pedir", se abrirá WhatsApp. Recuerda <strong>enviar la foto</strong> adjunta en el chat para que podamos verla.
              </p>
            </div>
          </div>

          {/* Right Column: Options */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-100">
              <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-3xl font-bold text-slate-900">Configuración</h3>
                <div className="text-right">
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Precio Único</p>
                  <p className="text-3xl font-black text-q-sport">$50.000</p>
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
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Color Camiseta</label>
                <ColorSelector
                  selectedColor={color}
                  onColorChange={setColor}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-500 mb-3 uppercase tracking-wide">Observaciones / Detalles</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ej: Quiero mi nombre 'Miguel' en la espalda, número 10..."
                  className="w-full bg-slate-50 border-slate-200 rounded-2xl p-4 text-base focus:ring-2 focus:ring-q-sport focus:border-transparent outline-none resize-none h-32 transition-all"
                />
              </div>

              <button
                onClick={handleOrder}
                className="w-full bg-q-sport hover:bg-blue-700 text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-100 hover:-translate-y-1 text-xl"
              >
                <Send className="w-6 h-6" />
                Pedir por WhatsApp
              </button>

              <p className="text-center mt-4 text-sm text-slate-400 font-medium">
                Se abrirá un chat con nuestro equipo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomDesign;