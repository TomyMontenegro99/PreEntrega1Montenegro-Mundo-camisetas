import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img
          src="https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682384511/logoTienda_k7vz7p.jpg"
          alt="Este es el logo de la empresa"
          width="5%"
          className="navbar-brand"
        />
        <a className="navbar-brand" href="./Home/Home">
          Mundo Camisetas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./Home/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Nosotros/Nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Contacto/Contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
