import React from "react";

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
    </div>
  );
};

export default CartItem;
