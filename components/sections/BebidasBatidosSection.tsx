import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function BebidasBatidosSection() {
  return (
    <>
      <MenuCategory title="Jugos y Batidos">
        <MenuItem name="Exprimido Naranja" price="$6.000" />
        <MenuItem name="Exprimido Limonada" price="$6.000" />
        <MenuItem name="Violet" description="Jugo naranja, frutos rojos (opcional semilla chía)" price="$7.000" />
        <MenuItem name="Proteico" description="Scoop de proteína + leche + agua, fruta opcional" price="$7.500" />
        <MenuItem name="Licuado de Banana" description="Agua o leche" price="$8.000" />
        <MenuItem name="Licuado Frutilla" description="Agua o leche" price="$8.000" />
        <MenuItem name="Multifruta" description="Naranja, pomelo, frutilla" price="$8.000" />
      </MenuCategory>
      <MenuCategory title="Yogures">
        <MenuItem name="Power" description="Yogurt griego, frutos rojos, banana, miel y granola" price="$10.000" />
        <MenuItem name="Goloso" description="Yogurt griego, chips choco y DDL" price="$10.000" />
        <MenuItem name="Keto" description="Yogurt griego, mantequilla maní, mix de frutos rojos" price="$10.000" />
      </MenuCategory>
    </>
  );
}