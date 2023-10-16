import { useSearchParams } from "react-router-dom";
import PageSelector from "../../shared/ui/components/controls/PageSelector/PageSelector";
import { searchParamsMap } from "../helpers/search-params-map";
import ProductItem from "./ProductItem";
import Scrollbar from "../../shared/ui/components/wrappers/Scrollbar";

/**
 *
 * @param {object} props
 * @param {}
 */
const ProductGrid = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +searchParams.get(searchParamsMap.pageNumber);

  const selectedPageHandler = (selectedPage) => {
    setSearchParams((prevState) => {
      prevState.set(searchParamsMap.pageNumber, selectedPage);
      return prevState;
    });
  };
  return (
    <Scrollbar>
      <div className="grid grid-cols-4 gap-20 py-5 px-10">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <footer className="left-1/2 flex justify-center">
        <PageSelector
          totalPageNum={10}
          currentPage={currentPage}
          startingPageNum={1}
          selectedPageHandler={selectedPageHandler}
        />
      </footer>
    </Scrollbar>
  );
};

export default ProductGrid;
