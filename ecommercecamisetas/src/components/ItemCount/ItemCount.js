import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="justify-content-between align-items-center">
      <div>
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <span className="mx-2"></span>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
        <h4 className="m-3">{quantity}</h4>
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
