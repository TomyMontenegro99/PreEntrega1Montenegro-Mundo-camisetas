import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
              <a className="nav-link">
                <NavLink
                  to={`/category/Deportivo`}
                  className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                  }
                >
                  Deportivo
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink
                  to={`/category/Casual`}
                  className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                  }
                >
                  Casual
                </NavLink>
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
