import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import { useState } from "react";

const SearchBar = ({ items, searchQuery, setSearchQuery }) => {
  const [isActive, setIsActive] = useState(false);

  const onChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const onFocusHandler = () => setIsActive(true);

  const onBlurHandler = () => setIsActive(false);

  return (
    <div className="relative flex items-center">
      <input
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={clsx(
          "min-w-[20rem] text-black bg-zinc-100 dark:bg-white outline-none px-9  py-2 shadow-md  rounded-t-lg",
          {
            ["rounded-b-lg"]: !isActive,
          }
        )}
        placeholder="Search product..."
        type="text"
        value={searchQuery}
        onChange={onChangeHandler}
        id="product-search"
      />
      <label
        className="absolute left-1  text-zinc-500"
        htmlFor="product-search"
      >
        <SearchIcon />
      </label>

      {isActive && (
        <div className="absolute top-10 shadow-lg bg-zinc-100 dark:bg-white  da w-full rounded-b-lg">
          <ul>
            {items.map((product) => (
              <li
                key={product.label}
                className="flex items-center hover:cursor-pointer hover:bg-zinc-200  last:rounded-b-lg hover: gap-5 py-2 px-5"
              >
                <img className="h-20 " src={product.imgSrc} />
                <span className="text-black text-sm ">{product.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
