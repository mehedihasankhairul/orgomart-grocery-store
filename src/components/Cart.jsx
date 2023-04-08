import React from "react";
import useStore from "../store";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useStore((state) => state.cart);

  const handleIncrement = (id) => {
    console.log("Increment", id);
  };
  const handleDecrement = (id) => {};

  return (
    <div id="cart" className="max-w-[320px] invisible">
      {cart.map(({ id, name, image, price, quantity }) => (
        <div key={id} className="flex flex-col bg-green-100 sticky top-3 right-0">
          <div className="flex flex-row mx-auto p-2 justify-center  items-center m-3">
            <div className="grid grid-cols-4 gap-5 ">
              <img className="me-2" src={image} alt={name} width={40} height={40} />
              <p className="font-bold pe-2"> {name}</p>
              <div className="flex ">
                <button onClick={handleIncrement} className="bg-green-500 text-white px-2 py-1 rounded-md">
                  +
                </button>
                <p className="p-2">{quantity}</p>
                <button onClick={handleDecrement} className="bg-green-500 text-white px-2 py-1 rounded-md">
                  -
                </button>
              </div>
              <p className="font-bold">{price}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-green-100 flex flex-col text-end p-3 pe-10 font-bold text-2xl">
        Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        {/* button process to by */}
        <Link to="/checkout">
          <button className="bg-green-500 text-white text-[20px] px-2 py-1 my-3 rounded-md">Process to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
