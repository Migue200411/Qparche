export enum ShirtSize {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL'
}

export enum ShirtColor {
  BLANCO = 'Blanco',
  NEGRO = 'Negro',
  AMARILLO = 'Amarillo',
  ROJO = 'Rojo',
  AZUL = 'Azul',
  VERDE = 'Verde',
  NARANJA = 'Naranja'
}

export type Category = 'deportiva' | 'custom' | 'amor_amistad';

export interface GalleryImage {
  src: string;
  label: string; // "Vista frontal", "Vista trasera", "Producto"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  gallery?: GalleryImage[]; // optional multi-image gallery; use image as fallback
  category: Category;
  tags?: string[];
  description?: string;
}

export interface DesignRequest {
  imageBase64: string | null;
  description: string;
  size: ShirtSize;
  color: ShirtColor;
  category: Category;
  placement: 'frente' | 'espalda' | 'ambos';
}