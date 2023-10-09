import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";

const ProductPage = () => {
  return (
    <div className="flex mx-10 h-full items-center bg-red-500">
      <section className="min-w-[20rem]   h-5/6 bg-blue-400">
        <Filter />
      </section>
      <section className="flex-1  h-5/6 bg-blue-200">
        <ProductGrid />
      </section>
    </div>
  );
};

export default ProductPage;
