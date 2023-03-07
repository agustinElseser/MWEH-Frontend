import { useState } from "react";
import Alerta from "../components/Alerta.jsx";
import clienteAxios from "../config/axios";
const Contacto = () => {
  const [alerta, setAlerta] = useState({});
  const [consulta, setConsulta] = useState({
    name: "",
    email: "",
    tel: "",
    coment: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setConsulta({ ...consulta, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { name, email } = consulta;

    if ([name, email].includes("")) {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/users/send-consulta", {
        consulta,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });
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

    setConsulta({
      name: "",
      email: "",
      tel: "",
      coment: "",
    });
  };

  const { msg } = alerta;

  return (
    <form className="contacto">
      <p className="text6" htmlFor="name">
        NAME
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={consulta.name}
        onChange={handleChange}
      />
      <p className="text6" htmlFor="email">
        EMAIL
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={consulta.email}
        onChange={handleChange}
      />
      <p className="text6" htmlFor="email">
        PHONE
      </p>
      <input
        placeholder="Enter your phone"
        type="tel"
        id="tel"
        name="tel"
        value={consulta.tel}
        onChange={handleChange}
      />
      <p className="text6" htmlFor="email">
        COMMENT
      </p>
      <textarea
        placeholder="Write your comment"
        cols={5}
        rows={10}
        name="coment"
        value={consulta.coment}
        onChange={handleChange}
      ></textarea>

      <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
      <input
        type="submit"
        className="button3 text6"
        value="CONTACT US"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Contacto;
