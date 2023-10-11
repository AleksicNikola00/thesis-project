import TooltipWrapper from "../../shared/ui/components/wrappers/TooltipWrapper";

const MAX_BRAND_LENGTH = 15;

/**
 * @param {object} props
 * @param {string} props.title Title for filter section
 * @param {import("../api/products-api").BrandMap[]} props.items
 */
const Filter = ({ title, items }) => {
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
          {items.map(({ brand, count }) => (
            <li key={brand} className="flex mt-5 items-center gap-5">
              <input type="checkbox" />
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

export default Filter;
