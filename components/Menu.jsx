import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../src/context";
import React from "react";

const Menu = () => {
  const { state } = useContext(AppContext);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="Cabecera mobile-only">
      <button onClick={toggleMenu} className="Cabecera-button">
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <a className="Cabecera-li" href="#" onClick={toggleMenu}>
            INICIO
          </a>
          <a className="Cabecera-li" href="#explore" onClick={toggleMenu}>
            EXPLORE
          </a>
          <a className="Cabecera-li" href="#about" onClick={toggleMenu}>
            ABOUT
          </a>
          <a className="Cabecera-li" href="#contact" onClick={toggleMenu}>
            CONTACT
          </a>
          {state.logged == false ? (
            <NavLink className="Cabecera-li" to="/login" onClick={toggleMenu}>
              LOGIN
            </NavLink>
          ) : (
            <NavLink className="Cabecera-li" to="/admin" onClick={toggleMenu}>
              PROFILE
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
