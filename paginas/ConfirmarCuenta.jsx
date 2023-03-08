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
  );
};
export default ConfirmarCuenta;
