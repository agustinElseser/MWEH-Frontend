import { useParams, Link, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };
  const [cuentaConfimada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/users/confirm/${token}`;
        const { data } = await clienteAxios(url);
        setCuentaConfirmada(true);
        setAlerta({ msg: data.msg });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, []);
  return (
    <>
      <div className="contain2">
        <p className="text">
          <b>
            ¡Thank you for being part of <br></br>WORLD'S MOST EXTRAORDINARY
            HOMES!
          </b>
        </p>
        {!cargando && <Alerta alerta={alerta} />}
        <br></br>
        {cuentaConfimada && (
          <Link className="button" to="/login">
            LOG IN
          </Link>
        )}
      </div>
    </>
    /*<>
      <div className="contain2">
        <div className="previousPage" onClick={handleToPreviousPage}>
          <svg
            className="aling"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-left"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </div>
        <Alerta alerta={alerta} />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <Link className="button" to="/confirm">
          LOG IN
        </Link>
      </div>
    </>
  );
};*/
  );
};
export default ConfirmarCuenta;
