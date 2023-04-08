const ProductsContainer = ({ children }) => (
  <div className="min-h-screen items-center">
    <div className="flex-1 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5 justify-center p-3">{children}</div>
    </div>
  </div>
);

export default ProductsContainer;
