import React from 'react';
import { ShirtColor } from '../types';

interface ColorSelectorProps {
    selectedColor: ShirtColor;
    onColorChange: (color: ShirtColor) => void;
    compact?: boolean;
}

// Map colors to their visual representations
const colorMap: Record<ShirtColor, string> = {
    [ShirtColor.BLANCO]: '#FFFFFF',
    [ShirtColor.NEGRO]: '#000000',
    [ShirtColor.AMARILLO]: '#FCD34D',
    [ShirtColor.ROJO]: '#EF4444',
    [ShirtColor.AZUL]: '#3B82F6',
    [ShirtColor.VERDE]: '#10B981',
    [ShirtColor.NARANJA]: '#F97316',
};

const ColorSelector: React.FC<ColorSelectorProps> = ({ selectedColor, onColorChange, compact = false }) => {
    const colors = Object.values(ShirtColor);

    return (
        <div className="flex gap-1.5 flex-wrap items-center">
            {colors.map((color) => {
                const bgColor = colorMap[color];
                const isSelected = selectedColor === color;

                return (
                    <button
                        key={color}
                        onClick={() => onColorChange(color)}
                        title={color}
                        className={`
              ${compact ? 'w-7 h-7' : 'w-9 h-9'}
              rounded-full transition-all duration-200 relative flex-shrink-0
              ${isSelected
                                ? 'ring-3 ring-q-sport shadow-md'
                                : 'ring-2 ring-slate-200 hover:ring-slate-300'
                            }
            `}
                        style={{ backgroundColor: bgColor }}
                    >
                        {/* Add border for white color visibility */}
                        {color === ShirtColor.BLANCO && (
                            <div className="absolute inset-0 rounded-full border-2 border-slate-200"></div>
                        )}

                        {/* Checkmark for selected color */}
                        {isSelected && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className={`${compact ? 'w-4 h-4' : 'w-4 h-4'} ${color === ShirtColor.BLANCO || color === ShirtColor.AMARILLO ? 'text-slate-800' : 'text-white'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default ColorSelector;
