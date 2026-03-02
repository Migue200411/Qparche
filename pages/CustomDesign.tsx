import React, { useState, useRef } from 'react';
import { ShirtSize, ShirtColor } from '../types';
import { Send, AlertTriangle, Camera, RefreshCcw } from 'lucide-react';
import SizeSelector from '../components/SizeSelector';
import ColorSelector from '../components/ColorSelector';
// import IdeaGenerator from '../components/IdeaGenerator';

const CustomDesign: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [size, setSize] = useState<ShirtSize>(ShirtSize.M);
  const [color, setColor] = useState<ShirtColor>(ShirtColor.BLANCO);
  const [description, setDescription] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const waNumber = "3004945790";

  // Upload image to Cloudinary and return the URL
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

  const handleOrder = async () => {
    if (!selectedFile && !description) {
      alert("Por favor sube una imagen o describe tu idea.");
      return;
    }

    let imageUrl: string | null = null;

    // Upload image to Cloudinary if there's a file
    if (selectedFile) {
      setIsUploading(true);
      imageUrl = await uploadToCloudinary(selectedFile);
      setIsUploading(false);

      if (!imageUrl) {
        alert("Hubo un error subiendo la imagen. Por favor intenta de nuevo.");
        return;
      }
    }

    const message = `Hola Q'Parche, quiero un diseño personalizado ($50.000):

Talla: ${size}
Color: ${color}
Idea/Notas: ${description || 'N/A'}
${imageUrl ? `\nImagen: ${imageUrl}` : '(Sin imagen adjunta)'}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSelectIdea = (text: string) => {
    setDescription(text);
    // Scroll to the description textarea
    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 relative overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="bg-black/40 backdrop-blur-md py-16 px-4 border-b border-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-display font-black mb-4 text-white uppercase italic"
            style={{ fontSize: 'clamp(32px, 8vw, 64px)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Crea tu Camiseta
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto opacity-85">
            Sube tu diseño y nosotros lo hacemos realidad.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column: Upload + IA */}
          <div className="space-y-6">
            {/* Upload area */}
            <div
              className="border-4 border-dashed border-slate-800 rounded-[2.5rem] p-8 text-center hover:border-[#E10600] hover:bg-[#E10600]/5 transition-all cursor-pointer group bg-[#0e0e12] shadow-sm flex flex-col justify-center min-h-[320px]"
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
                  <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-2xl shadow-lg object-contain" />
                  <div className="mt-4 text-sm text-slate-500 font-bold group-hover:text-[#E10600]">Clic para cambiar imagen</div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm group-hover:bg-slate-900 text-slate-600 group-hover:text-[#E10600]">
                    <Camera className="w-9 h-9" />
                  </div>
                  <p className="font-bold text-xl mb-2 text-white group-hover:text-[#E10600]">Sube tu Imagen</p>
                  <p className="text-sm text-slate-500 px-6 italic">Toca aquí para seleccionar tu diseño.</p>
                </div>
              )}
            </div>

            <div className="bg-[#E10600]/10 p-5 rounded-2xl border border-[#E10600]/20 flex gap-3 items-start">
              <AlertTriangle className="text-[#E10600] w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                <strong>Nota:</strong> Al pedir, se abre WhatsApp. Recuerda <strong>enviar la foto</strong> adjunta en el chat.
              </p>
            </div>

            {/* IA Idea Generator - Oculto por ahora */}
            {/* <IdeaGenerator onSelectIdea={handleSelectIdea} /> */}
          </div>

          {/* Right Column: Options */}
          <div className="space-y-8">
            <div className="bg-[#0e0e12] p-8 md:p-10 rounded-[2.5rem] border border-slate-900 shadow-xl shadow-black sticky top-24">
              <div className="flex justify-between items-center mb-8 border-b border-slate-900 pb-6">
                <h3 className="text-3xl font-bold text-white uppercase italic">Configuración</h3>
                <div className="text-right">
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Precio Único</p>
                  <p className="text-3xl font-black text-[#E10600]">$55.000</p>
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
                  ref={descriptionRef}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ej: Quiero mi nombre 'Miguel' en la espalda, número 10..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#E10600] focus:border-transparent outline-none resize-none h-32 transition-all text-white"
                />
                {description && description.startsWith('Idea IA:') && (
                  <p className="text-[10px] font-bold text-indigo-500 mt-1.5 flex items-center gap-1">
                    Idea generada por IA
                  </p>
                )}
              </div>

              <button
                onClick={handleOrder}
                disabled={isUploading}
                className={`w-full bg-q-sport hover:bg-orange-700 text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-100 text-xl ${isUploading ? 'opacity-75 cursor-wait' : 'hover:-translate-y-1'}`}
              >
                {isUploading ? (
                  <>
                    <RefreshCcw className="w-6 h-6 animate-spin" />
                    Subiendo...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Pedir por WhatsApp
                  </>
                )}
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
