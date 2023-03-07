import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../src/hooks/useAuth";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import { AppProvider } from "../src/context/AppProvider";

const Login = () => {
  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");

  const { state, login } = useAuth();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    const res = await login(email, password);

    setAlerta(res);
  };

  const { msg } = alerta;

  return (
    <>
      <form className="contain2" onSubmit={handleSubmit}>
        <div className=" previousPage" onClick={handleToPreviousPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="alingicon icon-tabler icon-tabler-arrow-narrow-left"
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

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(evt) => setPassword(evt.target.value)}
        />

        <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
        <input className="button" type="submit" value="LOG IN" />

        <label className="text" htmlFor="reset-password">
          Forgot password?
        </label>
        <Link className="button" to="/reset-password">
          RESET PASSWORD
        </Link>

        <label className="text" htmlFor="reset-password">
          Don't have an account?
        </label>
        <Link className="button " to="/register">
          SIGN UP
        </Link>
      </form>
    </>
  );
};

export default Login;
