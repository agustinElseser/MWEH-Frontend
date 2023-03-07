import React from "react";
import Slider from "react-slick";

const SimpleSlider2 = () => {
  const img = [];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678102170/Proyects/xbpeark3cq9yt8vrcka5.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678104220/Proyects/seumxnisgeee3tgrpyri.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678103802/Proyects/d64zhc6ek3tcoznnvvgn.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678102416/Proyects/anunidp6x58svfaxosmn.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678102583/Proyects/lqmetdvr6hsvfc3iyldl.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678103013/Proyects/lfdwxlevb84qg1lgj4ue.jpg"
          }
        />

        <img
          src={
            "https://res.cloudinary.com/mostarq/image/upload/v1678103501/Proyects/zfkphighwij7gwvzlnva.jpg"
          }
        />
      </Slider>
    </div>
  );
};
export default SimpleSlider2;
