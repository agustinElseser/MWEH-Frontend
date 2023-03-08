import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta.jsx";

import { AppContext } from "../src/context/AppContext.jsx";

const EditProfile = () => {
  const { actualizarPerfil, state, guardarPw } = useContext(AppContext);
  const [perfil, setPerfil] = useState({ name: "", email: "" });
  const [password, setPassword] = useState({ pw_act: "", pw_new: "" });
  const [objValue, setObjValue] = useState({ value1: false, value2: false });

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setObjValue({ value2: false, value1: true });
    const { name, email } = perfil;

    if (name == "" && email == "") {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    } else {
      const respuesta = await actualizarPerfil(perfil);
      setAlerta(respuesta);
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setObjValue({ value1: false, value2: true });
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    if (password.pw_new.length < 6) {
      setAlerta({
        msg: "PASSWORD IS LESS THAN 6 CHARACTERS",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    const respuesta = await guardarPw(password);
    setAlerta(respuesta);
    setTimeout(() => {
      setAlerta({});
    }, 2000);
  };

  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };
  const { msg } = alerta;
  return (
    <>
      <div className="contain6 ">
        <form className="contain2" onSubmit={handleSubmit}>
          <label className="text5" htmlFor="name">
            CHANGE YOUR PERSONAL DATA
          </label>
          <label className="text2" htmlFor="name">
            NAME
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={perfil.name || ""}
            onChange={(e) =>
              setPerfil({ ...perfil, [e.target.name]: e.target.value })
            }
          />
          <label className="text2" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={perfil.email || ""}
            onChange={(e) =>
              setPerfil({ ...perfil, [e.target.name]: e.target.value })
            }
          />

          <div className="boxvacia">
            {msg && objValue.value1 && <Alerta alerta={alerta} />}
          </div>
          <input type="submit" className="button" value="EDIT PROFILE" />
        </form>
        <form className="contain2" onSubmit={handleSubmit2}>
          <label className="text5" htmlFor="name">
            CHANGE YOUR PASSWORD
          </label>
          <label className="text2" htmlFor="password">
            CURRENT PASSWORD
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="pw_act"
            onChange={(e) =>
              setPassword({ ...password, [e.target.name]: e.target.value })
            }
          />
          <label className="text2" htmlFor="password">
            NEW PASSWORD
          </label>
          <input
            type="password"
            placeholder="Your new password"
            name="pw_new"
            onChange={(e) =>
              setPassword({ ...password, [e.target.name]: e.target.value })
            }
          />

          <div className="boxvacia">
            {msg && objValue.value2 && <Alerta alerta={alerta} />}
          </div>
          <input type="submit" className="button" value="EDIT PASSWORD" />
        </form>
      </div>
    </>
  );
};

export default EditProfile;
