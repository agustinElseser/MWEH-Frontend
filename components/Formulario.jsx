import { useState, useContext, useEffect } from "react";
import { ProyectsContext } from "../src/context/ProyectsContext";
import Alerta from "../components/Alerta.jsx";
import UploadIMG from "./UploadIMG.jsx";
import { AppContext } from "../src/context";

const Formulario = () => {
  const { state } = useContext(ProyectsContext);
  const { guardarProyect } = useContext(AppContext);

  const [alerta, setAlerta] = useState({});
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [proyectImg, setProyectImg] = useState([]);
  const [proyect, setProyect] = useState({
    name: "",
    arquitect: "",
    area: "",
    site: "",
    year: "",
    id: "",
    proyectImg: [],
  });

  useEffect(() => {
    const { name, arquitect, area, site, year, _id, proyectImg } =
      state.proyect;
    setProyect({
      name,
      arquitect,
      area,
      site,
      year,
      id: _id,
      proyectImg: proyectImg,
    });
  }, [state.proyect]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setProyect({ ...proyect, [name]: value });
  };

  async function uploadProyect() {
    if (
      [
        proyect.name,
        proyect.arquitect,
        proyect.area,
        proyect.site,
        proyect.year,
      ].includes("")
    ) {
      setAlerta({ msg: "THERE ARE EMPTY FIELDS", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    if (isNaN(proyect.area) | isNaN(proyect.year)) {
      setAlerta({
        msg: "WRONG AREA OR YEAR",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    setAlerta({ msg: "UPLOADING IMAGES..." });

    setLoading(true);

    const arrayimg = [...proyect.proyectImg];
    const files = img;

    const url = "https://api.cloudinary.com/v1_1/mostarq/image/upload";
    const formData = new FormData();

    for (let i = 0; i < img.length; i++) {
      let file = img[i];
      formData.append("file", file);
      formData.append("upload_preset", "arquitectura");

      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((response) => {
          arrayimg.push(response.secure_url);
        });
    }

    const res = await guardarProyect({
      ...proyect,
      proyectImg: arrayimg,
    });

    setAlerta(res);

    setTimeout(() => {
      setAlerta({});
      setLoading(false);
    }, 2000);

    setProyect({
      name: "",
      arquitect: "",
      area: "",
      site: "",
      year: "",
      proyectImg: [],
    });
  }

  const { msg } = alerta;

  return (
    <form className="contain10">
      <label className="text2" htmlFor="name">
        NAME
      </label>
      <input
        type="text"
        placeholder="Name of proyect"
        name="name"
        value={proyect.name}
        onChange={handleChange}
      />
      <label className="text2" htmlFor="email">
        ARQUITECT
      </label>
      <input
        type="text"
        placeholder="Name of arquitect"
        name="arquitect"
        value={proyect.arquitect}
        onChange={handleChange}
      />
      <label className="text2" htmlFor="password">
        AREA
      </label>
      <input
        type="text"
        placeholder="Builded surface"
        name="area"
        value={proyect.area}
        onChange={handleChange}
      />
      <label className="text2" htmlFor="password">
        SITE
      </label>
      <input
        type="text"
        placeholder="Location of proyect"
        name="site"
        value={proyect.site}
        onChange={handleChange}
      />
      <label className="text2" htmlFor="password">
        YEAR
      </label>
      <input
        type="text"
        placeholder="Building date"
        name="year"
        value={proyect.year}
        onChange={handleChange}
      />
      <label className="text2">IMG</label>
      <input type="file" multiple onChange={(e) => setImg(e.target.files)} />
      <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>

      <input
        type="button"
        className="button"
        disabled={loading ? true : false}
        value={state.proyect._id ? "EDIT PROYECT" : "SEND PROYECT"}
        onClick={uploadProyect}
      />
    </form>
  );
};

export default Formulario;
