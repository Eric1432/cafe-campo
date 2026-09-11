import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function PlatosPrincipalesSection() {
  return (
    <>
      <MenuCategory title="Entradas">
        <MenuItem name="Empanadas" description="Carne, pollo, J y Q" price="$3.000" />
        <MenuItem name="Porción Papas Fritas" price="$6.000" />
        <MenuItem name="Porción Papas Fritas con Cheddar y Bacon" price="$7.000" />
        <MenuItem name="Chicken Fingers (8 unid.)" price="$8.000" />
      </MenuCategory>

      <MenuCategory title="Tartas">
        <MenuItem name="Jamón y Queso" price="$10.000" />
        <MenuItem name="Zapallo, Espinaca y Queso" price="" />
        <MenuItem name="Zapallo, Choclo y Queso" price="" />
        <MenuItem name="Pollo" price="" />
      </MenuCategory>

      <MenuCategory title="Pizzas">
        <MenuItem name="Muzza" price="$12.000" />
        <MenuItem name="Especial" price="$14.000" />
        <MenuItem name="Napolitana" price="$14.000" />
        <MenuItem name="Rúcula y Crudo" price="$15.000" />
      </MenuCategory>

      <MenuCategory title="Ensaladas">
        <MenuItem name="Del Campo" description="Lechuga, arroz, pollo, palta, tomate, huevo duro y rúcula" price="$12.500" />
        <MenuItem name="Caesar" description="Lechuga, pollo, parmesano, croutons" price="$10.500" />
        <MenuItem name="Fresca" description="Lenteja, cebolla morada, palta, tomate cherry, cilantro picado" price="$12.500" />
        <MenuItem name="Desigual" description="Garbanzo, tomate, pepino, cebolla morada, aderezo palta, yogurt griego, cilantro y pimienta" price="$13.000" />
        <MenuItem name="Suprema" description="Pepino, huevo duro, cebolla morada, atún y choclo" price="$13.000" />
      </MenuCategory>

      <MenuCategory title="Sandwichs">
        <MenuItem name="Especial Lomito" description="Lomito con mix de queso y aderezos" price="$10.500" />
        <MenuItem name="Campo" description="Pollo, rúcula, tomate, parmesano" price="$9.500" />
        <MenuItem name="Árabe" description="Jamón y queso" price="$7.500" />
        <MenuItem name="Tostado Miga" price="$7.500" />
        <MenuItem name="Sacramentos" description="Salame y queso / Jamón y queso" price="$8.500" />
        <MenuItem name="Pebete" description="Salame y queso" price="$7.500" />
        <MenuItem name="Pebete" description="Jamón y queso" price="$7.500" />
        <MenuItem name="Crudo" description="Jamón crudo, rúcula, parmesano" price="$9.500" />
        <MenuItem name="Mila" description="Milanesa de ternera, tomate, queso" price="$12.500" />
      </MenuCategory>

      <MenuCategory title="Wraps, Burrito y Rolls">
        <MenuItem name="Wraps Pollo Caesar" description="Pechuga de pollo fría con lechuga, queso y aderezo caesar" price="" />
        <MenuItem name="Wraps Pollo y Palta" description="Pechuga pollo, tomate cherry, queso parmesano y palta" price="" />
      </MenuCategory>

      <MenuCategory title="Menú Infantil">
        <MenuItem name="Box Nuggets con carita" price="$8.000" />
        <MenuItem name="Pizza Individual" price="$7.000" />
        <MenuItem name="Quesadilla" description="Jamón y queso" price="" />
        <MenuItem name="Quesadilla" description="Jamón, queso y tomate" price="" />
        <MenuItem name="Milanesa con fritas o puré" price="$12.500" />
      </MenuCategory>
    </>
  );
}