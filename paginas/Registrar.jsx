import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta.jsx";
import clienteAxios from "../config/axios.jsx";

const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirpassword, setRepetirpassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([name, email, password, repetirpassword].includes("")) {
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
    setAlerta({});

    /*CREANDO USUARIO EN API*/
    try {
      await clienteAxios.post("/users/register", { name, email, password });
      setAlerta({
        msg: "CREATED CORRECTLY, CHECK EMAIL",
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };
  const { msg } = alerta;
  return (
    <>
      <form className="contain2" onSubmit={handleSubmit}>
        <div className="contain3">
          <label className="text2" htmlFor="name">
            NAME
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
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text2" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text2" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="text2" htmlFor="password">
          REPEAT PASSWORD
        </label>
        <input
          type="password"
          placeholder="Repeat your password"
          value={repetirpassword}
          onChange={(e) => setRepetirpassword(e.target.value)}
        />

        <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
        <input type="submit" className="button" value="CREATE ACCOUNT" />
      </form>
    </>
  );
};

export default Registrar;
