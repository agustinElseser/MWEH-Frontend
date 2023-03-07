import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const OlvidePassword = () => {
  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlerta({ msg: "EL EMAIL ES OBLIGATORIO", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    try {
      const { data } = await clienteAxios.post("/users/reset-password", {
        email,
      });
      setAlerta({ msg: data.msg });
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

  const { msg } = alerta;
  return (
    <>
      <form className="contain2">
        <div className="contain3">
          <label className="text2" htmlFor="reset-password">
            EMAIL
          </label>
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
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
        <label className="text" htmlFor="reset-password">
          We will send the instructions to your email
        </label>
        <Link onClick={handleSubmit} className="button " to="/register">
          RESET PASSWORD
        </Link>
      </form>
    </>
  );
};

export default OlvidePassword;
