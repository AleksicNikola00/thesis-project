import "./ProductItem.css";

/**
 *
 * @param {object} props
 * @param {import("../api/products-api").Product} props.product Source for the product image
 */

const ProductItem = ({ product }) => {
  return (
    <div
      id={product.id}
      className="product-item dark:bg-white  flex flex-col items-center rounded-lg
      border-2 border-zinc-300 shadow-lg
      transition ease-in-out delay-150
      hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:font-bold"
    >
      <img className="rounded-t-lg" src={product.imgUrl} />
      <span className="text-sm text-center dark:text-black p-3">
        <em>{product.brand}</em> &mdash; {product.model}
      </span>
    </div>
  );
};

export default ProductItem;
