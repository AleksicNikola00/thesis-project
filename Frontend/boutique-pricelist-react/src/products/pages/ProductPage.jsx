import { useQuery } from "@tanstack/react-query";
import ProductGrid from "../components/ProductGrid";
import { getBrands, getProducts } from "../api/products-api";
import { useSearchParams } from "react-router-dom";
import { searchParamsMap } from "../helpers/search-params-map";
import CircleSpinner from "../../shared/ui/components/spinners/CircleSpiner";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const productType = searchParams.get(searchParamsMap.productType);
  const brands = searchParams.get(searchParamsMap.brands);
  const pageNumber = +searchParams.get(searchParamsMap.pageNumber);

  const { data: brandMap, isPending: isFilterPending } = useQuery({
    queryKey: ["products", productType],
    queryFn: () => getBrands(productType),
  });

  const { data: products, isPending: areProductsPending } = useQuery({
    queryKey: ["products", productType, pageNumber, brands],
    //Because of user friendly interface it starts with 1, but backend expects it to start from 0
    queryFn: () => getProducts(productType, pageNumber - 1, brands),
  });

  const setSelectedBrands = (selectedBrands) => {
    setSearchParams((prevState) => {
      selectedBrands
        ? prevState.set(searchParamsMap.brands, selectedBrands)
        : prevState.delete(searchParamsMap.brands);
      return prevState;
    });
  };

  return (
    <div className="flex  relative h-full dark:bg-neutral-800">
      <aside className="min-w-[14rem] py-10 absolute top-0 bottom-0 left-0">
        {isFilterPending ? (
          <CircleSpinner />
        ) : (
          <ProductFilter
            items={brandMap}
            selectedBrands={brands}
            setSelectedBrands={setSelectedBrands}
            title="Brands"
          />
        )}
      </aside>
      <section className="flex-1 ms-56 my-10 ">
        {areProductsPending ? (
          <CircleSpinner />
        ) : (
          <ProductGrid products={products} />
        )}
      </section>
    </div>
  );
};

export default ProductPage;
