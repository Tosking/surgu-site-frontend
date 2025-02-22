"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import edro from "../../../assets/Edro.png";
import gazprom from "../../../assets/Gazprom.png";
import khanty from "../../../assets/Khanty.png";
import school21 from "../../../assets/School21.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div></div>;
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div>
      {/* <Image style={{ transform: "rotate(180deg)" }} src={nextArrow} alt="" /> */}
    </div>
  );
}
const companies = [
  edro,
  gazprom,
  khanty,
  school21,
  edro,
  gazprom,
  khanty,
  school21,
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container  ">
      <Slider className="w-full" {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="carousel-item">
            <div className="company-logo">
              <Image width={120} height={120} src={company} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
