// src/components/sections/CafeteriaSection.tsx
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function CafeteriaSection() {
  return (
    <>
      <MenuCategory title="Cafetería">
        <MenuItem 
          name="Café en Jarrito" 
          description="Café / Cortado / Lágrima / Espresso" 
          price="$4.000" 
        />
        <MenuItem 
          name="Café Doble" 
          description="Café / Cortado / Lágrima / Café con leche" 
          price="$4.500" 
        />
        <MenuItem 
          name="Latte Especialidad" 
          description="Avellanas / Vainilla / Caramelo" 
          price="$5.500" 
        />
      </MenuCategory>

      <MenuCategory title="Otras Infusiones">
        <MenuItem name="Té" price="$2.500" />
        <MenuItem name="Submarino" price="$4.500" />
      </MenuCategory>
    </>
  );
}