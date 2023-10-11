import { useQuery } from "@tanstack/react-query";
import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import { getBrands } from "../api/products-api";
import { useSearchParams } from "react-router-dom";

const searchParamsMap = {
  productType: "type",
};

const ProductPage = () => {
  const [searchParams] = useSearchParams();

  const productType = searchParams.get(searchParamsMap.productType);

  const { data: brandMap, isPending } = useQuery({
    queryKey: ["products", productType],
    queryFn: () => getBrands(productType),
  });

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="flex  relative h-full dark:bg-neutral-800 ">
      <section className="min-w-[14rem]  py-10  absolute top-0 bottom-0 left-0  ">
        <Filter items={brandMap} title="Brands" />
      </section>
      <section className="flex-1 ms-56 my-10 ">
        <ProductGrid />
      </section>
    </div>
  );
};

export default ProductPage;
