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
                        ${compact ? 'w-10 h-10 text-[11px]' : 'w-12 h-12 text-sm'}
                        font-black rounded-xl border-2 transition-all duration-300 active:scale-90
                        ${selectedSize === size
                            ? 'border-[#E10600] bg-[#E10600] text-white shadow-[0_4px_12px_rgba(225,6,0,0.3)] scale-105'
                            : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
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
