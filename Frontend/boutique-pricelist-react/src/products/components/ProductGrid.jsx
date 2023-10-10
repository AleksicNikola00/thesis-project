const gridItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

const ProductGrid = () => {
  return (
    <div
      className="
    grid grid-cols-4 h-full
    gap-20 overflow-y-auto p-5
   scrollbar  scrollbar-w-3
    scrollbar-track-rounded-lg scrollbar-track-gray-500
    scrollbar-thumb-rounded-lg scrollbar-thumb-gray-900 "
    >
      {gridItems.map((item) => (
        <div key={item} className="border-2 border-black h-52">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
