// src/components/sections/PlatosPrincipalesSection.tsx
import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function PlatosPrincipalesSection() {
  return (
    <>
      <MenuCategory title="Platos Principales">
        <MenuItem name="Milanesa con guarnición" description="Milanesa de carne o pollo, con papas fritas o ensalada clásica" price="$15.000" />
        <MenuItem name="Milanesa napolitana con guarnición" description="Milanesa napolitana de carne o pollo, con papas fritas o ensalada clásica" price="$16.000" />
        <MenuItem name="Tallarines" description="Con salsa fileto, crema o mixta" price="$10.000" />
        <MenuItem name="Sandwich de pollo con guarnición" description="Sanguche de pechuga fría con palta, rúcula y tomate acompañado de papas fritas o ensalada clásica" price="$13.000" />
      </MenuCategory>

      <MenuCategory title="Hamburguesas">
        <MenuItem name="Sola con guarnición" description="Acompañada de papas fritas o ensalada clásica" price="$10.000" />
        <MenuItem name="Jamón y queso con guarnición" description="Acompañada de papas fritas o ensalada clásica" price="$11.500" />
        <MenuItem name="Completa con guarnición" description="Jamón, queso, huevo a la plancha, lechuga y tomate, acompañada de papas fritas o ensalada clásica" price="$13.500" />
      </MenuCategory>

      <MenuCategory title="Pizzas">
        <MenuItem name="Muzzarella" price="$12.000" />
        <MenuItem name="Especial" price="$14.000" />
        <MenuItem name="Napolitana" price="$14.000" />
        <MenuItem name="Rúcula y crudo" price="$15.000" />
      </MenuCategory>
    </>
  );
}