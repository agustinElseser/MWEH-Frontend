import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../src/context/AppContext";
import MenuPrivate from "./MenuPrivate";

const Header = () => {
  const { cerraSesion } = useContext(AppContext);
  return (
    <>
      <div className="nav2 desktop-only ">
        <div className="logo desktop-only">
          <p>WORLD'S MOST EXTRAORDINARY HOMES</p>
        </div>

        <div className="sections2 mobile-only desktop-only">
          <NavLink className="" to="/">
            MAIN
          </NavLink>

          <NavLink className="" to="/admin/myProyects">
            MY PROJECTS
          </NavLink>
          <NavLink className="" to="/admin/favoritos">
            FAVORITES
          </NavLink>
          <NavLink className="" to="/admin/profile">
            PROFILE
          </NavLink>
          <NavLink className="" to="" onClick={cerraSesion}>
            SIGN OFF
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
