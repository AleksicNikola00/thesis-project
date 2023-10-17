import PageSelector from "../../shared/ui/components/controls/PageSelector/PageSelector";
import ProductItem from "./ProductItem";
import Scrollbar from "../../shared/ui/components/wrappers/Scrollbar";

/**
 *
 * @param {object} props
 * @param {totalPageNum} props.totalPageNum Number of pages in the grid
 * @param {currentPage} props.currentPage Currently selected page
 * @param {(selectedPage: number) => void} props.setSelectedPage
 */
const ProductGrid = ({
  products,
  totalPageNum,
  currentPage,
  setSelectedPage,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = +searchParams.get(searchParamsMap.pageNumber);

  // const selectedPageHandler = (selectedPage) => {
  //   setSearchParams((prevState) => {
  //     prevState.set(searchParamsMap.pageNumber, selectedPage);
  //     return prevState;
  //   });
  // };
  return (
    <Scrollbar>
      <div className="grid grid-cols-4 gap-20 py-5 px-10">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <footer className="left-1/2 flex justify-center">
        <PageSelector
          totalPageNum={totalPageNum}
          currentPage={currentPage}
          startingPageNum={1}
          selectedPageHandler={setSelectedPage}
        />
      </footer>
    </Scrollbar>
  );
};

export default ProductGrid;
