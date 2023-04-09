import { BsFillCartPlusFill } from "react-icons/bs";

const ProductCard = ({ product, addToCart }) => (
  <div className="items-center justify-center p-5 max-h-auto max-w-36 bg-white rounded-lg shadow-lg">
    <div className="flex flex-col items-center justify-center ">
      <img
        className="w-full h-full object-cover"
        src={product.image ? product.image : "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/Tomatoes.png"}
        alt="product"
      />
    </div>
    <div className="justify-center">
      <span className="text-sm">Rating: {`⭐⭐⭐⭐`}</span>
      <p className="font-semibold text-lg ">{product.name}</p>
    </div>
    {/* add to cart  */}
    <div className="flex items-center justify-between">
      <p className="font-semibold text-sm">Tk {product.price}</p>
      <BsFillCartPlusFill onClick={() => addToCart(product)} className="text-2xl mr-2 hover:text-green-500" />
    </div>
  </div>
);

export default ProductCard;
