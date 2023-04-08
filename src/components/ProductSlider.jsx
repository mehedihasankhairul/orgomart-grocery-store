import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

import ProductCard from "./ProductCard";
import useStore from "../store";

const ProductSlider = () => {
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <div className="flex-1 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5 justify-center p-3">
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} addToCart={addToCart} />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
