import { MenuCategory } from "@/components/MenuCategory";
import { MenuItem } from "@/components/MenuItem";

export function DesayunosMeriendasSection() {
  return (
    <>
      <MenuCategory title="Panadería y Pastelería">
        <MenuItem name="Medialuna" price="$1.500" />
        <MenuItem name="Medialuna J y Q" price="$3.000" />
        <MenuItem name="Porción Budín Limón y Amapola" price="$3.000" />
        <MenuItem name="Porción Budín Choco y DDL" price="$2.500" />
        <MenuItem name="Chipa" description="Con harina mandioca y mucho queso (1/4 kg)" price="$7.000" />
        <MenuItem name="Porción Chipa (4 unidades)" price="$2.500" />
        <MenuItem name="Porción Chipa (8 unidades)" price="$4.800" />
        <MenuItem name="Pancakes" description="De avena o de banana" price="" />
        <MenuItem name="Nutella" description="De avena, con banana y nutella" price="$9.500" />
        <MenuItem name="Energético" description="De banana con mantequilla de maní, frutos rojos y banana" price="$9.500" />
        <MenuItem name="Tostados Nutella y Banana" description="Pan tostado con banana y nutella con azúcar impalpable." price="$7.500" />
        <MenuItem name="Porción Tortas" price="$8.500" />
      </MenuCategory>

      <MenuCategory title="Combos Desayuno y Merienda">
        <div className="text-xs font-bold tracking-widest text-stone-600 mb-2 uppercase">Todos incluyen Infusión o Café</div>
        <MenuItem name="Tostadas de la Casa" description="2 tostados pan blanco-brioche-integral + 2 dip a elección (mantequilla de maní / DDL / queso crema / mermelada / nutella)" price="$11.500" />
        <MenuItem name="Americano" description="2 tostados con huevo revuelto, queso crema + shot de jugo de naranja" price="$13.500" />
        <MenuItem name="Avocado Toast" description="Tostón con queso crema / huevo revuelto, palta y semilla" price="$13.000" />
        <MenuItem name="Tostado Árabe" description="Tostado árabe (tradicional o semilla) con jamón y queso" price="$10.000" />
        <MenuItem name="Tostado Campo" description="Tostado miga de jamón y queso (cuatro triángulos)" price="$10.000" />
      </MenuCategory>
    </>
  );
}