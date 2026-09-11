interface MenuItemProps {
  name: string;
  description?: string;
  extra?: string;
  price: string;
  priceLarge?: string;
}

export function MenuItem({
  name,
  description,
  extra,
  price,
  priceLarge,
}: MenuItemProps) {
  return (
    <div className="flex justify-between items-start gap-2">
      <div className="pr-2 flex-1">
        <h3 className="font-bold text-sm sm:text-base leading-snug">
          {name}
        </h3>

        {description && (
          <p className="italic text-xs sm:text-sm text-stone-800 mt-0.5 leading-snug">
            {description}
          </p>
        )}

        {extra && (
          <p className="italic text-xs sm:text-sm text-stone-600 leading-snug">
            {extra}
          </p>
        )}
      </div>

      <div className="flex gap-2 sm:gap-4 font-semibold text-stone-600 whitespace-nowrap text-sm sm:text-base">
        <span className="w-12 sm:w-16 text-right">
          {price}
        </span>

        {priceLarge && (
          <span className="w-12 sm:w-16 text-right">
            {priceLarge}
          </span>
        )}
      </div>
    </div>
  );
}