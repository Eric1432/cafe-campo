// src/components/FooterFlowers.tsx
export function FooterFlowers() {
  return (
    <div className="relative w-full h-48 sm:h-72 mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-stone-300/40">
      {/* Usamos la imagen de fondo pero enfocada en la parte inferior */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: "url('/fondo-carta.png')" }}
      />
    </div>
  );
}