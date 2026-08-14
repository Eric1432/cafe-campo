// src/app/page.tsx
import { HeroHeader } from "@/components/HeroHeader";
import { CafeteriaSection } from "@/components/sections/CafeteriaSection";
import { AcompanamientosSection } from "@/components/sections/AcompanamientosSection";
import { DesayunosMeriendasSection } from "@/components/sections/DesayunosMeriendasSection";
import { PlatosPrincipalesSection } from "@/components/sections/PlatosPrincipalesSection";
import { BebidasBatidosSection } from "@/components/sections/BebidasBatidosSection";

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-fixed bg-auto text-stone-900 pb-20 p-6"
      style={{ backgroundImage: "url('/fondo-carta.png')" }}
    >
      <section className="mx-auto max-w-md">
        
        {/* Portada con las flores arriba */}
        <HeroHeader />

        {/* Secciones de la carta */}
        <CafeteriaSection />
        <DesayunosMeriendasSection />
        <AcompanamientosSection />
        <PlatosPrincipalesSection />
        <BebidasBatidosSection />
        
      </section>
    </main>
  );
}