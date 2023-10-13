import { useMemo } from "react";
import TooltipWrapper from "../../shared/ui/components/wrappers/TooltipWrapper";

const MAX_BRAND_LENGTH = 15;
//Character that separates selected brands
const BRANDS_SEPARATOR = ",";

/**
 * @param {object} props
 * @param {string} props.title Title for filter section
 * @param {string} props.selectedBrands Selected brands from url
 * @param {import("../api/products-api").BrandMap[]} props.items
 * @param {(selectedBrands: string) => void} props.setSelectedBrands
 */
const ProductFilter = ({ title, items, selectedBrands, setSelectedBrands }) => {
  const filteredItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        selected: !!selectedBrands && selectedBrands.includes(item.brand),
      })),
    [items, selectedBrands]
  );

  const onChangeHandler = ({ target: { id, checked } }) => {
    let newSelectedBrands = selectedBrands ?? "";
    if (checked) newSelectedBrands += id + BRANDS_SEPARATOR;
    else
      newSelectedBrands = newSelectedBrands.replace(id + BRANDS_SEPARATOR, "");

    setSelectedBrands(newSelectedBrands);
  };

  return (
    <div className="flex h-full relative flex-col items-center">
      <span className="font-bold text-base text-center">{title}</span>
      <div
        className="flex 500 w-full overflow-y-auto px-6 text-sm justify-center
                    scrollbar  scrollbar-w-1 
                    scrollbar-track-rounded-lg scrollbar-track-gray-500
                    scrollbar-thumb-rounded-lg scrollbar-thumb-gray-900"
      >
        <ul className="w-full">
          {filteredItems.map(({ brand, count, selected }) => (
            <li key={brand} className="flex mt-5 items-center gap-5">
              <input
                id={brand}
                type="checkbox"
                checked={selected}
                onChange={onChangeHandler}
              />
              <span className="flex items-center gap-2">
                {/* brandLength + countLength is total span length */}
                {brand.length + count.toString().length < MAX_BRAND_LENGTH ? (
                  <span>{brand}</span>
                ) : (
                  <TooltipWrapper
                    label={brand}
                    tooltip={brand}
                    labelLimit={MAX_BRAND_LENGTH - count.toString().length}
                    tooltipPosition="center"
                  />
                )}
                ({count})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
