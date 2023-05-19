import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <img
          src="https://res.cloudinary.com/ds4qmvzqt/image/upload/v1682384511/logoTienda_k7vz7p.jpg"
          alt="Este es el logo de la empresa"
          width="5%"
          className="navbar-brand rounded-circle"
        />
        <Link to="/" className="navbar-brand">
          <h3 className="display-6">Mundo Camisetas</h3>
        </Link>
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
              <NavLink
                to={`/category/Deportivo`}
                className={({ isActive }) =>
                  isActive ? "nav-link ActiveOption" : "nav-link Option"
                }
              >
                Deportivo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/category/Casual`}
                className={({ isActive }) =>
                  isActive ? "nav-link ActiveOption" : "nav-link Option"
                }
              >
                Casual
              </NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
