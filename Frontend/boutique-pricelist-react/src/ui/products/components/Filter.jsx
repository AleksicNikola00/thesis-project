const brandMap = [
  { brand: "Nike", count: 213 },
  { brand: "Adidas", count: 500 },
  { brand: "Fred Perry", count: 300 },
];

const Filter = () => {
  return (
    <div className="flex justify-center">
      <ul className="">
        {brandMap.map(({ brand, count }) => (
          <li key={brand} className="flex mt-5 items-center">
            <span>
              {brand} ({count})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
