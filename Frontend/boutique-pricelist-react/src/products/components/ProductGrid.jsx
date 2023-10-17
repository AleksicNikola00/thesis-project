import PageSelector from "../../shared/ui/components/controls/PageSelector/PageSelector";
import ProductItem from "./ProductItem";
import Scrollbar from "../../shared/ui/components/wrappers/Scrollbar";
import { useRef } from "react";

const STARTING_PAGE = 1;

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
  const scrollRef = useRef();

  const selectedPageHandler = async (selectedPage) => {
    scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedPage(selectedPage);
  };

  return (
    <Scrollbar ref={scrollRef}>
      <div className="grid grid-cols-4 gap-20 py-5 px-10">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {totalPageNum > 1 && (
        <footer className="left-1/2 flex justify-center">
          <PageSelector
            totalPageNum={totalPageNum}
            currentPage={currentPage}
            startingPageNum={STARTING_PAGE}
            selectedPageHandler={selectedPageHandler}
          />
        </footer>
      )}
    </Scrollbar>
  );
};

export default ProductGrid;
