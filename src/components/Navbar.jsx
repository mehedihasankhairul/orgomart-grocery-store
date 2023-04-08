import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/images/food.png";
import { BsBagCheckFill } from "react-icons/bs";
import useStore from "../store";

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const cart = useStore((state) => state.cart);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const showCart = () => {
    const cart = document.getElementById("cart");
    cart.classList.toggle("invisible");
  };

  return (
    <nav className="flex sticky top-0 z-50 items-center justify-between flex-wrap bg-green-500 p-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={icon} alt="" className="w-10 h-10 rounded-full mr-2" />
          <h2 className="font-semibold text-2xl">Orgomart</h2>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow items-center lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow items-center">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 font-semibold hover:text-white mr-4">
            Home
          </Link>
          <Link
            to="products"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 font-semibold hover:text-white mr-4"
          >
            Products
          </Link>
          <Link
            to="category"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-teal-100 font-semibold hover:text-white"
          >
            Category
          </Link>
          <Link
            to="checkout"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-teal-100 font-semibold hover:text-white"
          >
            Checkout
          </Link>
          <Link
            to="contact"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-teal-100 font-semibold hover:text-white"
          >
            Contacts
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded font-semibold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            <div onClick={showCart} className="flex flex-row">
              <BsBagCheckFill className="text-2xl hover:text-green-500" />
              <span className="text-xs font-semibold p-2">{quantity}</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
