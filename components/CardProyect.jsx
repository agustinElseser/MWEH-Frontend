import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import clienteAxios from "../config/axios";
import { AppContext } from "../src/context/AppContext";
import { ProyectsContext } from "../src/context/ProyectsContext";

const CardProyect = ({ proyect }) => {
  const { favourite, state } = useContext(AppContext);
  const { setEdit } = useContext(ProyectsContext);
  const [itFav, setItFav] = useState(null);

  const [favo, setfavo] = useState({ data: "asd" });

  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };

  const { name, arquitect, year, site, _id } = proyect;

  const imgC = async (_id) => {
    try {
      navigate(`/proyect/${_id}`);
      const { data } = await clienteAxios.get(`/proyects/img/${_id}`);
    } catch (error) {}
  };

  const fav = useRef("");

  const array = state.user.favourites;

  useEffect(() => {
    if (array == undefined) {
      return;
    } else {
      const existeId = array.some(function (proy) {
        return proy._id === proyect._id;
      });
      setItFav(existeId);
    }
  }, [state.user.favourites]);

  const handleFavourite = async (evt) => {
    evt.stopPropagation();
    const { user } = state;

    const VerifyFav = state.user.favourites.some(
      (proyect) => proyect._id === evt.target.id
    );

    if (!VerifyFav) {
      const data = { id: evt.target.id, action: "add" };
      favourite(data);
      fav.current.className = "fa-solid fa-heart";
    } else {
      const data = { id: evt.target.id, action: "remove" };
      favourite(data);
      fav.current.className = "fa fa-heart-o ";
    }
  };

  return (
    <>
      <div>
        <div
          onClick={() => {
            setEdit(proyect);
            imgC(_id);
          }}
          key={proyect._id}
          proyect={proyect}
          to={`/proyect/proyect._id`}
        >
          <div className="card">
            <div>
              <p className="text4">
                <span className="text13">
                  {" "}
                  NAME:
                  {name}
                  <button
                    ref={fav}
                    className={itFav ? "fa-solid fa-heart" : "fa fa-heart-o "}
                    id={proyect._id}
                    onClick={(evt) => {
                      handleFavourite(evt);
                    }}
                  ></button>
                </span>
              </p>

              <p className="text3">
                ARQUITECT:
                <span> {arquitect}</span>
              </p>
              <p className="text3">
                SITE:
                <span> {site}</span>
              </p>
            </div>
            {<img src={proyect.proyectImg[0]} alt="" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProyect;
