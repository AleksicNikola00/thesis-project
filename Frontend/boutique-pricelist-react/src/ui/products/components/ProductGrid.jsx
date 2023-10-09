const gridItems = [1, 2, 3, 4, 5, 6, 7];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-20 p-5">
      {gridItems.map((item) => (
        <div key={item} className="border-2 border-black h-40">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
