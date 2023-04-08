import ProductCard from "./ProductCard";
import ProductSlider from "./ProductSlider";
import ProductsContainer from "./ProductsContainer";
import useStore from "../store";

const Products = () => {
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-2xl p-3">Trending Products</h1>
      <div className="p-3 border">
        <ProductSlider />
      </div>
      <div className="p-3 my-5 border">
        <h1 className="font-semibold text-2xl p-3">Our Products</h1>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </ProductsContainer>
      </div>
    </div>
  );
};

export default Products;
