import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <div className="contenedor_menu">
          <h2 className="logotipo">NETFLIX</h2>
          <button id="menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <nav>
          <a className="navs activo" href="#">
            Inicio
          </a>
          <a className="navs" href="#">
            Programas
          </a>
          <a className="navs" href="#">
            Películas
          </a>
          <a className="navs" href="#">
            Más Recientes
          </a>
          <a className="navs" href="#">
            Mi lista
          </a>
        </nav>
      </div>
    </header>
  );
};
