import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import { useState } from "react";

const products = [
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false",
    label: "Adidas patike za trcanje",
  },
  {
    imgSrc:
      "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)",
    label: "Nike patike za trcanje",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false",
    label: "Adidas patike",
  },
];

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
            {products.map((product) => (
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
