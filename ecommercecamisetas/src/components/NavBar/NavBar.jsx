import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Mundo Camisetas</h3>
      <div>
        <button>Deportivas</button>
        <button>Casuales</button>
        <button>Musica</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
