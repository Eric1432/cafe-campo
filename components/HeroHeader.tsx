// src/components/HeroHeader.tsx
export function HeroHeader() {
  return (
    <div className="relative w-full h-[70vh] min-h-[450px] sm:h-[80vh] sm:min-h-[600px] mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-stone-300/40">
      
      {/* Imagen de fondo completa y limpia */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/portada-cafe-campo.png')" }}
      />

    </div>
  );
}