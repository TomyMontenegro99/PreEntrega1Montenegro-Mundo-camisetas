import React from "react";

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="product my-3">
      <h3 className="mb-2">{name}</h3>
      <p className="mb-1">Precio: ${price}</p>
      <p className="mb-1">Cantidad: {quantity}</p>
    </div>
  );
};

export default CartItem;
