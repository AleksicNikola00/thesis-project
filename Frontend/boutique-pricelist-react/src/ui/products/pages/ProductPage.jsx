import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";

const ProductPage = () => {
  return (
    <div className="flex  relative h-full bg-red-500">
      <section className="min-w-[14rem]  py-10  absolute top-0 bottom-0 left-0 bg-blue-400">
        <Filter />
      </section>
      <section className="flex-1 ms-56 my-10 bg-blue-200">
        <ProductGrid />
      </section>
    </div>
  );
};

export default ProductPage;
