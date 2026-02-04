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

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
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