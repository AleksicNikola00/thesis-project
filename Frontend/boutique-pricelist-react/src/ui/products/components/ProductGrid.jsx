const gridItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 h-full gap-x-5 gap-y-20 overflow-y-auto p-5">
      {gridItems.map((item) => (
        <div key={item} className="border-2 border-black h-40">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
