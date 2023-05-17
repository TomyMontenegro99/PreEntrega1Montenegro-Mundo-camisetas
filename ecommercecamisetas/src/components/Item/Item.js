import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div key={id} class="col-sm-6 col-md-4 col-lg-3">
          <article class="card">
            <header>
              <h2 class="card-title">{name}</h2>
            </header>
            <picture>
              <img
                src={img}
                alt={name}
                class="card-img-top img-fluid"
                style={{ width: "400px", height: "auto" }}
              />
            </picture>
            <section class="card-body">
              <p class="card-text">Precio: ${price}</p>
              <p class="card-text">Stock disponible: {stock}</p>
            </section>
            <footer>
              <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Item;
