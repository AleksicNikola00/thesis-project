/**
 * @param {object} props
 * @param {string} props.title Title for filter section
 * @param {import("../api/products-api").BrandMap[]} props.items
 */
const Filter = ({ title, items }) => {
  return (
    <div className="flex  h-full flex-col items-center">
      <span className="font-bold text-base text-center">{title}</span>
      <div
        className="flex  overflow-y-auto px-1 text-sm justify-center
    scrollbar  scrollbar-w-1 
    scrollbar-track-rounded-lg scrollbar-track-gray-500
    scrollbar-thumb-rounded-lg scrollbar-thumb-gray-900 "
      >
        <ul>
          {items.map(({ brand, count }) => (
            <li key={brand} className="flex mt-5 items-center justify-between">
              <input type="checkbox" />
              <span>
                {brand} ({count})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
