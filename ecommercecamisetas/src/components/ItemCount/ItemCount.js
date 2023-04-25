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
    <div class="justify-content-between align-items-center">
      <div>
        <button class="btn btn-primary" onClick={decrement}>
          -
        </button>
        <span class="mx-2"></span>
        <button class="btn btn-primary" onClick={increment}>
          +
        </button>
        <h4 class="m-3">{quantity}</h4>
      </div>
      <div>
        <button
          class="btn btn-success"
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
