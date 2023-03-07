import Alerta from "../components/Alerta";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const NuevoPW = () => {
  const [password, setPassword] = useState("");
  const [repetirpassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPWmodificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/users/reset-password/${token}`);
        setAlerta({
          msg: "COLOCA TU NUEVO PASSWORD",
        });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: "HUBO UN ERROR CON EL ENLACE",
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);
  const { msg } = alerta;

  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([password, repetirpassword].includes("")) {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    if (password !== repetirpassword) {
      setAlerta({ msg: "PASSWORDS DO NOT MATCH", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "PASSWORD IS LESS THAN 6 CHARACTERS",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    try {
      const url = `/users/reset-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg });
      setPWmodificado(true);
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    }
  };
  return (
    <>
      <form className="contain2" onSubmit={handleSubmit}>
        {tokenValido && (
          <div>
            <div className="contain3">
              <label className="text2" htmlFor="reset-password">
                NEW PASSWORD
              </label>
              <div className=" previousPage" onClick={handleToPreviousPage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-left aling"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
              </div>
            </div>
            <input
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text2" htmlFor="password">
              REPEAT PASSWORD
            </label>
            <input
              type="password"
              placeholder="Repeat your new password"
              value={repetirpassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
        )}

        <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
        {tokenValido && (
          <input type="submit" className="button" value="RESET PASSWORD" />
        )}
        {passwordModificado && (
          <Link className="button" to="/login">
            LOG IN
          </Link>
        )}
      </form>
    </>
  );
};

export default NuevoPW;

/*
        <label className="text2" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setPassword(e.target.value)}
        />
        */
/*<form className="contain2">
   <div className="contain3">
     <label className="text2" htmlFor="password">
       NEW PASSWORD
     </label>
     <div className=" previosPage" onClick={handleToPreviousPage}>
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
   </div>

   <input
     type="password"
     placeholder="Enter your new password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
   />
   <label className="text2" htmlFor="password">
     REPEAT PASSWORD
   </label>
   <input
     type="password"
     placeholder="Repeat your new password"
     value={repetirpassword}
     onChange={(e) => setRepetirPassword(e.target.value)}
   />
   <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
   <input type="submit" className="button" value="RESET PASSWORD" />
 </form>;*/
