import clsx from "clsx";

/**
 * @param {Object} props
 * @param {boolean} props.selected
 * @param {(selectedPage: number) => void} props.setSelectedPage
 */

const PageSelectorButton = ({ selected, pageNum, setSelectedPage }) => {
  const onClickHandler = () => {
    setSelectedPage(pageNum);
  };

  return (
    <button
      onClick={onClickHandler}
      className={clsx("hover:bg-zinc-300 dark:hover:bg-black px-2 rounded-lg", {
        ["dark:bg-black bg-zinc-300"]: selected,
      })}
    >
      {pageNum}
    </button>
  );
};

export default PageSelectorButton;
