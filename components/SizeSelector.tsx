import React from 'react';
import { ShirtSize } from '../types';

interface SizeSelectorProps {
    selectedSize: ShirtSize;
    onSizeChange: (size: ShirtSize) => void;
    compact?: boolean;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ selectedSize, onSizeChange, compact = false }) => {
    const sizes = Object.values(ShirtSize);

    return (
        <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => onSizeChange(size)}
                    className={`
            ${compact ? 'w-10 h-10 text-xs' : 'w-12 h-12 text-sm'}
            font-bold rounded-lg border-2 transition-all duration-200
            ${selectedSize === size
                            ? 'border-q-carnaval bg-q-carnaval text-white shadow-md scale-105'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-q-carnaval/50 hover:bg-orange-50'
                        }
          `}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};

export default SizeSelector;
