import { useContext } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { AppContext } from "../src/context";

const SimpleSlider = () => {
  const { state } = useContext(AppContext);
  const params = useParams();

  const proyect = state.proyects.find((proyect) => proyect._id === params.id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <>
      <p className="text12">
        <br /> ARQ : <b>{proyect.arquitect}</b> <br /> SITE :
        <b> {proyect.site} </b>
        <br /> AREA : <b>{proyect.area} </b>
        <br /> YEAR :<b> {proyect.year}</b>
      </p>
      <Slider {...settings}>
        {proyect.proyectImg.map((imagen, index) => (
          <div>
            <img key={index} src={imagen} alt={`Imagen ${index}`} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SimpleSlider;
