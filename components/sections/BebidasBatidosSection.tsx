// src/components/sections/BebidasBatidosSection.tsx
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function BebidasBatidosSection() {
  return (
    <>
      <MenuCategory title="Batidos y Fríos">
        <MenuItem name="Exprimido de Naranja" price="$5.500" />
        <MenuItem name="Café Deseado" price="$4.500" />
        <MenuItem name="Orange" description="Jugo de naranja, limón, jengibre y matcha" price="$6.500" />
        <MenuItem name="Violet" description="Jugo de naranja, frutos rojos y semillas de chía" price="$6.500" />
        <MenuItem name="Proteico" description="Scoop de proteína, leche o agua y fruta opcional" price="$7.000" />
      </MenuCategory>
      
      <MenuCategory title="Bebidas">
        <MenuItem name="Agua 500ml" price="$2.500" />
        <MenuItem name="Agua 2000ml" price="$4.000" />
        <MenuItem name="Gaseosa 500ml" price="$3.000" />
        <MenuItem name="Cerveza lata" price="$4.000" />
        <MenuItem name="Corona 330ml" price="$5.000" />
        <MenuItem name="Corona 710ml" price="$9.000" />
        <MenuItem name="Cerveza Andes 1L" price="$9.000" />
        <MenuItem name="Cerveza Stella 1L" price="$10.000" />
      </MenuCategory>
    </>
  );
}