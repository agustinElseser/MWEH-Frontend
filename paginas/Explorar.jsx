import SimpleSlider from "../components/Slider";
import { NavLink } from "react-router-dom";

const Explorar = () => {
  return (
    <div className="ventanaEmergente">
      <NavLink to={"/"}>
        <button className="button4" to={"/"}>
          X
        </button>
      </NavLink>
      <div className="slider2">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Explorar;
