import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../src/context";
import React from "react";

const MenuPrivate = () => {
  const { state, cerraSesion } = useContext(AppContext);
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
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <NavLink className="Cabecera-li" to={"/"}>
            MAIN
          </NavLink>
          <NavLink className="Cabecera-li" to="/admin/myProyects">
            MY PROJECTS
          </NavLink>

          <NavLink className="Cabecera-li" to="/admin/favoritos">
            FAVORITES
          </NavLink>

          <NavLink className="Cabecera-li" to="/admin/profile">
            PROFILE
          </NavLink>

          <NavLink className="Cabecera-li" to="/" onClick={cerraSesion}>
            SIGN OFF
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MenuPrivate;
