import { useContext } from "react";
import CardProyect from "../components/CardProyect";
import { AppContext } from "../src/context/AppContext";

const Favoritos = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className="containFav">
        <div className="">
          <>
            {state.user.favourites.map((proyect) => (
              <>
                <CardProyect key={proyect._id} proyect={proyect} />
                <div className="margin"></div>
              </>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default Favoritos;
