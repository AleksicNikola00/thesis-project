/**
 * @param {object} props
 * @param {string} props.title Title for filter section
 * @param {import("../api/products-api").BrandMap[]} props.items
 */
const Filter = ({ title, items }) => {
  return (
    <div className="flex text-sm justify-center">
      <ul className="flex flex-col">
        <span className="font-bold text-base text-center">{title}</span>
        {items.map(({ brand, count }) => (
          <li
            key={brand}
            className="flex mt-5 gap-5 items-center justify-between"
          >
            <span>
              {brand} ({count})
            </span>
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
