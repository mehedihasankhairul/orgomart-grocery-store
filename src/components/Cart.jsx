import React from "react";
import useStore from "../store";

const Cart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(({ id, name, image, price, quantity }) => (
        <div key={id}>
          <img src={image} alt={name} width={40} height={40} />
          <p>name: {name}</p>
          <p>quantity: {quantity}</p>
          <p>price: {price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
