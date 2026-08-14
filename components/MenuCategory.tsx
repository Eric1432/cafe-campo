// src/components/MenuCategory.tsx
import { ReactNode } from 'react';

interface MenuCategoryProps {
  title: string;
  children: ReactNode;
  showColumns?: boolean;
}

export function MenuCategory({ title, children, showColumns }: MenuCategoryProps) {
  return (
    <div className="mb-10 sm:mb-14 mt-6 sm:mt-8 relative">
      {/* Título con la barra de estilo clásico adaptado a mobile */}
      <div className="relative mb-4 sm:mb-6 inline-block w-full">
        <div className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-[#D3CEBE] opacity-70 -z-10 rounded-sm"></div>
        <h2 className="text-2xl sm:text-4xl font-serif tracking-wider text-stone-800 uppercase pl-2">
          {title}
        </h2>
      </div>

      {/* Encabezados de columnas (Opcional) */}
      {showColumns && (
        <div className="flex justify-end gap-4 text-[10px] sm:text-xs tracking-widest font-bold mb-3 sm:mb-4 text-stone-700">
          <span className="w-14 sm:w-16 text-right">CHICA</span>
          <span className="w-14 sm:w-16 text-right">GRANDE</span>
        </div>
      )}

      {/* Lista de productos con padding adaptado para mobile */}
      <div className="flex flex-col gap-4 sm:gap-6 bg-white/40 sm:bg-white/35 p-3 sm:p-4 rounded-xl backdrop-blur-[2px] border border-stone-300/30 shadow-sm">
        {children}
      </div>
    </div>
  );
}