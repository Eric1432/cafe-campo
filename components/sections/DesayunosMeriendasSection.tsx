// src/components/sections/DesayunosMeriendasSection.tsx
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function DesayunosMeriendasSection() {
  return (
    <MenuCategory title="Desayunos y Meriendas">
      <MenuItem name="Clásico" description="Infusión doble, tostadas con queso crema y mermelada y shot de jugo de naranja" price="$11.500" />
      <MenuItem name="Americano" description="Infusión doble, tostadas con huevo revuelto y shot de jugo de naranja" price="$12.500" />
      <MenuItem name="Fit" description="Infusión doble con pancakes de avena y frutas fileteadas" price="$13.500" />
    </MenuCategory>
  );
}