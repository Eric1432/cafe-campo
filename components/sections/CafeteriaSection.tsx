import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function CafeteriaSection() {
  return (
    <>
      <MenuCategory title="Cafetería">
        <MenuItem name="Expresso" description="Café intenso" price="$4.500" />
        <MenuItem name="Americano" description="Café largo y suave" price="$4.500" />
        <MenuItem name="Lágrima" description="Base de leche con gotas de café" price="$4.500" />
        <MenuItem name="Flat White / Cortado" description="Café con leche intenso" price="$4.500" />
        <MenuItem
        name="Capuccino"
        description="Café con leche suave con cacao y canela"
        extra="(Frío o caliente)"
        price="$5.000"/>
        <MenuItem
        name="Latte"
        description="Cafe con leche suave"
        extra="(Frío o caliente)"
        price="$4.500"
        />
        <MenuItem name="Nutella" description="Latte suave sabor Nutella" price="$6.000" />
        <MenuItem name="Vainilla" description= "Latte suave sabor Vainilla" price="$5.500" />
        <MenuItem name="Caramelo" description= "Latte suave sabor Caramelo" price="$5.500" />
        <MenuItem name="Mocaccino" description="Latte suave sabor Choco" price="$5.800" />
        <MenuItem name="Café Doble" description="(Lágrima, Cortado, Café, Café con leche)" price="$5.000" />

        <div className="text-xs italic text-stone-600 mt-2">
          * Podes personalizarlo con Crema ($1.200). Todos los cafés fríos vienen con Hielo.
        </div>
      </MenuCategory>

      <MenuCategory title="Infusiones">
        <MenuItem name="Té Varios Sabores" description="Consultar" price="$3.500" />
        <MenuItem name="Submarino" price="$6.500" />
        <MenuItem name="Chocolate Frío Baggio" price="$1.700" />
      </MenuCategory>

      <MenuCategory title="Promos">
        <MenuItem name="Cortado con Chipa" description="4 unidades" price="$5.500" />
        <MenuItem name="Café con Leche" description="Con 2 porciones de Budín" price="$6.000" />
        <MenuItem name="Café o Cortado" description="Con Medialuna" price="$5.000" />
      </MenuCategory>
    </>
  );
}
