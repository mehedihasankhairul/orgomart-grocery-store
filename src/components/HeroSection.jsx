import React from "react";
import hero from "../assets/images/hero-side.png";

const HeroSection = () => {
  return (
    <section className="px-3 py-5  w-full mx-auto bg-green-100 lg:py-10">
      <div className="grid lg:grid-cols-2 text-center items-center justify-items-center rounded-lg gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
          <p className="text-4xl font-bold md:text-7xl">
            Healthy Food Pure <span className="font-normal   md:text-7xl">Organic Market</span>
          </p>
          <p className="mt-2 text-sm md:text-lg font-semibold">For limited time only!</p>
          <button className="font-semibold bg-green-700 rounded-full text-white py-2 px-5 mt-10 hover:bg-zinc-800">
            Shop Now
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img src={hero} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
