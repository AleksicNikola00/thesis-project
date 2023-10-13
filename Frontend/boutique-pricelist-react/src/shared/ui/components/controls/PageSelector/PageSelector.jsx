import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect } from "react";
import PageSelectorButton from "./PageSelectorButton";

const calculateSurroundingPages = (currentPage, startingRange, endingRange) => {
  const surroundingPages = [];

  const addToStart = currentPage >= startingRange + 1;
  const addToEnd = currentPage <= endingRange - 1;

  if (addToStart && addToEnd) {
    surroundingPages.push(currentPage - 1);
    surroundingPages.push(currentPage);
    surroundingPages.push(currentPage + 1);
  } else if (addToStart) {
    surroundingPages.push(currentPage - 2);
    surroundingPages.push(currentPage - 1);
    surroundingPages.push(currentPage);
  } else if (addToEnd) {
    surroundingPages.push(currentPage);
    surroundingPages.push(currentPage + 1);
    surroundingPages.push(currentPage + 2);
  } else {
    surroundingPages.push(currentPage);
  }

  return surroundingPages;
};

/**
 * @param {Object} props
 * @param {number} props.totalPageNum
 * @param {number} props.startingPageNum
 * @param {number} props.currentPage
 * @param {(selectedPage: number) => void} props.selectedPageHandler
 */
const PageSelector = ({
  totalPageNum,
  startingPageNum,
  currentPage,
  selectedPageHandler,
}) => {
  useEffect(() => {}, []);
  const onPreviousHandler = () => {
    selectedPageHandler(currentPage - 1);
  };
  const onNextHandler = () => {
    selectedPageHandler(currentPage + 1);
  };

  const showBeggining = currentPage > 2;

  const showEnding = totalPageNum - currentPage > 1;

  return (
    <div className="flex justify-between py-1 bg-zinc-400 dark:bg-stone-600 rounded-xl  gap-5 items-center">
      <button
        disabled={currentPage === startingPageNum}
        onClick={onPreviousHandler}
        className="enabled:hover:opacity-50 disabled:opacity-10"
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex items-center gap-4 ">
        {showBeggining && (
          <>
            <PageSelectorButton
              pageNum={startingPageNum}
              selected={currentPage === startingPageNum}
              setSelectedPage={selectedPageHandler}
            />
            {currentPage > 3 && <span>...</span>}
          </>
        )}

        {calculateSurroundingPages(
          currentPage,
          startingPageNum,
          totalPageNum
        ).map((page) => (
          <PageSelectorButton
            key={page}
            pageNum={page}
            selected={currentPage === page}
            setSelectedPage={selectedPageHandler}
          />
        ))}

        {showEnding && (
          <>
            {totalPageNum - currentPage > 2 && <span>...</span>}
            <PageSelectorButton
              pageNum={totalPageNum}
              selected={currentPage === totalPageNum}
              setSelectedPage={selectedPageHandler}
            />
          </>
        )}
      </div>
      <button
        className="enabled:hover:opacity-50 disabled:opacity-10"
        onClick={onNextHandler}
        disabled={currentPage === totalPageNum}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default PageSelector;
