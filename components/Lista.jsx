import { useContext } from "react";
import { AppContext } from "../src/context/AppContext";
import Proyect from "./Proyect";

const Lista = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className="contain4">
        <div>
          <label className="text2">LIST OF MY PROYECTS</label>
        </div>
        <div className="containScroll">
          {state.user.myProyects ? (
            <>
              {state.user.myProyects.map((proyect) => (
                <Proyect key={proyect._id} proyect={proyect} />
              ))}
            </>
          ) : (
            <>
              <h2 className="texterror">You haven't projects </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Lista;
/*
{proyects.length ? (
            <>
              {proyects.map((proyect) => (
                <Proyect key={proyect._id} proyect={proyect} />
              ))}
            </>
          ) : (
            <>
              <h2 className="texterror">You haven't projects </h2>
            </>
          )}
          */
