import { Product, GalleryImage } from './types';

export const teamColors: Record<string, { name: string; primary: string; secondary: string; bgFrom: string; bgTo: string; glowColor: string }> = {
    f1: { name: 'Haas', primary: '#E82C2C', secondary: '#ffffff', bgFrom: '#1c0505', bgTo: '#3b0d0d', glowColor: 'rgba(232,44,44,0.15)' },
    f2: { name: 'Alpine', primary: '#0090FF', secondary: '#FF69B4', bgFrom: '#0c1e3a', bgTo: '#1e3a5f', glowColor: 'rgba(0,144,255,0.15)' },
    f3: { name: 'Aston Martin', primary: '#006F62', secondary: '#c8ff00', bgFrom: '#021a16', bgTo: '#0a3d34', glowColor: 'rgba(0,111,98,0.15)' },
    f4: { name: 'Ferrari', primary: '#dc2626', secondary: '#000000', bgFrom: '#1c0505', bgTo: '#450a0a', glowColor: 'rgba(220,38,38,0.15)' },
    f5: { name: 'McLaren', primary: '#FF8000', secondary: '#000000', bgFrom: '#1a0f00', bgTo: '#431407', glowColor: 'rgba(255,128,0,0.15)' },
    f6: { name: 'Mercedes', primary: '#00D2BE', secondary: '#6B7280', bgFrom: '#021a17', bgTo: '#0f2d28', glowColor: 'rgba(0,210,190,0.15)' },
    f7: { name: 'Red Bull', primary: '#1E3A8A', secondary: '#dc2626', bgFrom: '#0a1628', bgTo: '#1e3a5f', glowColor: 'rgba(30,58,138,0.15)' },
    f8: { name: 'Stake', primary: '#52E252', secondary: '#000000', bgFrom: '#021a05', bgTo: '#0a3d12', glowColor: 'rgba(82,226,82,0.15)' },
    f9: { name: 'Williams', primary: '#005AFF', secondary: '#00A0DE', bgFrom: '#000d26', bgTo: '#0a2d5f', glowColor: 'rgba(0,90,255,0.15)' },
    f10: { name: 'Audi', primary: '#E10600', secondary: '#ffffff', bgFrom: '#1c0404', bgTo: '#3b0a0a', glowColor: 'rgba(225,6,0,0.15)' },
    f11: { name: 'Cadillac', primary: '#000000', secondary: '#da291c', bgFrom: '#000000', bgTo: '#1a1a1a', glowColor: 'rgba(218,41,28,0.15)' },
};

export const f1Gallery = (teamSlug: string, productImage: string): GalleryImage[] => {
    const ext = (slug: string, side: 'frontal' | 'trasera') => {
        if (slug === 'redbull' && side === 'trasera') return 'png';
        if (slug === 'redbull-2026' && side === 'trasera') return 'png';
        return 'jpg';
    };

    return [
        { src: `/images/f1/${teamSlug}-frontal.${ext(teamSlug, 'frontal')}`, label: 'Vista frontal' },
        { src: `/images/f1/${teamSlug}-trasera.${ext(teamSlug, 'trasera')}`, label: 'Vista trasera' },
        { src: productImage, label: 'Producto' },
    ];
};

export const f1Products: Product[] = [
    { id: 'f1', category: 'deportiva', name: 'F1 Haas', price: 55000, image: '/images/f1_haas_new.png', gallery: f1Gallery('haas', '/images/f1_haas_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f2', category: 'deportiva', name: 'F1 Alpine', price: 55000, image: '/images/f1_alpine_new.png', gallery: f1Gallery('alpine', '/images/f1_alpine_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f3', category: 'deportiva', name: 'F1 Aston Martin', price: 55000, image: '/images/f1_aston_martin_new.png', gallery: f1Gallery('aston-martin', '/images/f1_aston_martin_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f4', category: 'deportiva', name: 'F1 Ferrari', price: 55000, image: '/images/f1_ferrari_new.png', gallery: f1Gallery('ferrari', '/images/f1_ferrari_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f5', category: 'deportiva', name: 'F1 McLaren', price: 55000, image: '/images/f1_mclaren_new.png', gallery: f1Gallery('mclaren', '/images/f1_mclaren_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f6', category: 'deportiva', name: 'F1 Mercedes', price: 55000, image: '/images/Mercedes.jpeg', gallery: f1Gallery('mercedes', '/images/Mercedes.jpeg'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f7', category: 'deportiva', name: 'F1 Red Bull ', price: 55000, image: '/images/Red Bull.jpeg', gallery: f1Gallery('redbull', '/images/Red Bull.jpeg'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f8', category: 'deportiva', name: 'F1 Stake', price: 55000, image: '/images/f1_stake_new.png', gallery: f1Gallery('stake', '/images/f1_stake_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f9', category: 'deportiva', name: 'F1 Williams', price: 55000, image: '/images/f1_williams_new.png', gallery: f1Gallery('williams', '/images/f1_williams_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f10', category: 'deportiva', name: 'F1 Audi', price: 55000, image: '/images/f1_audi_new.png', gallery: f1Gallery('audi', '/images/f1_audi_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
    { id: 'f11', category: 'deportiva', name: 'F1 Cadillac', price: 55000, image: '/images/f1_cadillac_new.png', gallery: f1Gallery('cadillac', '/images/f1_cadillac_new.png'), description: 'Sublimación full color. Nombre y número incluidos. Hecha a pedido, tallas S–XXL.' },
];
