import { useMemo, useState } from "react";
import SearchBar from "../../shared/ui/components/inputs/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../api/products-api";

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

const PAGE_NUM = 0;
const PAGE_SIZE = 5;

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // const {
  //   data: { content },
  //   isPending,
  // } = useQuery({
  //   queryKey: ["products", "search", searchQuery],
  //   queryFn: () => searchProducts(PAGE_NUM, searchQuery, PAGE_SIZE),
  //   enabled: !!searchQuery,
  // });

  // const products = useMemo(() => {}, [content]);

  return (
    <SearchBar
      items={products}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default ProductSearch;
