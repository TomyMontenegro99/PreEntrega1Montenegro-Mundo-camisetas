import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="container rounded">
      <div className="row justify-content-center">
        <div key={id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <article className="card">
            <header>
              <h2 className="card-title">{name}</h2>
            </header>
            <picture>
              <img
                src={img}
                alt={name}
                className="card-img-top img-fluid"
                style={{ width: "400px", height: "auto" }}
              />
            </picture>
            <section className="card-body">
              <p className="card-text">Precio: ${price}</p>
              <p className="card-text">Stock disponible: {stock}</p>
            </section>
            <footer className="card-footer">
              <Link to={`/item/${id}`} className="btn btn-primary">
                Ver detalle
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Item;
