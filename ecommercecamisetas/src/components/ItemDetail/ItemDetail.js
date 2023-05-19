import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="card">
      <header className="card-header">
        <h2 className="card-title">{name}</h2>
      </header>
      <picture className="card-img-top">
        <img src={img} alt={name} className="img-fluid" />
      </picture>
      <section className="card-body">
        <p className="card-text">Categoria: {category}</p>
        <p className="card-text">Descripcion: {description}</p>
        <p className="card-text">Precio: {price}</p>
      </section>
      <footer className="card-footer">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="btn btn-primary">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
