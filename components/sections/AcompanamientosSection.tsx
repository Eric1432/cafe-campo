// src/components/sections/AcompanamientosSection.tsx
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function AcompanamientosSection() {
  return (
    <>
      <MenuCategory title="Para Acompañar">
        <MenuItem name="Medialuna" price="$1.500" />
        <MenuItem name="Medialuna con jamón y queso" price="$2.500" />
        <MenuItem name="Medio tostado de jamón y queso" price="$4.000" />
        <MenuItem name="Tostado de jamón y queso" price="$7.500" />
        <MenuItem name="Porción de brownie" price="$4.000" />
        <MenuItem name="Porción de budín" price="$3.000" />
        <MenuItem name="Alfajor de Maicena" price="$3.500" />
        <MenuItem name="Tostadas con queso crema y mermelada" price="$6.500" />
      </MenuCategory>

      <MenuCategory title="Más que un Acompañamiento">
        <MenuItem name="Tostadas con huevo revuelto" price="$8.500" />
        <MenuItem name="Avocado toast" price="$10.000" />
        <MenuItem name="Pancakes con fruta fileteada" price="$9.500" />
        <MenuItem name="Yogur con fruta y granola" price="$10.000" />
      </MenuCategory>
    </>
  );
}