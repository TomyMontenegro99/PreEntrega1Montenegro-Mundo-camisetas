import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-warning text-black">
      <div className="container text-center">
        <span className="text-muted">
          &copy; {new Date().getFullYear()} Mundo Camisetas. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
