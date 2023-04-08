import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import useStore from "../store";

const CategorySlider = () => {
  const categories = useStore((state) => state.categories);

  return (
    <>
      <div className="flex flex-col ">
        <h1 className="font-semibold text-2xl p-3">Categories</h1>
      </div>

      <div className="flex flex-row  justify-between items-center ">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className="flex flex-row items-center ">
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div
                  onClick={() => handleCategory(category.name)}
                  className="flex flex-col py-5 text-center justify-center items-center"
                >
                  <div className="rounded-full bg-green-500 p-5 w-[100px] h-[100px]">
                    <img className="w-full" src={category.image} alt="" />
                  </div>
                  <p className="font-semibold"> {category.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default CategorySlider;
