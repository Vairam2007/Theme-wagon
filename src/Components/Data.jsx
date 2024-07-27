import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Data.css"; // Make sure Data.css is defined and applied correctly

import Img1 from "../assets/client.png";

const Data = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const forms = [
    {
      img: Img1,
      head: "BELIEVABLE",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you",
    },
    {
      img: Img1,
      head: "BELIEVABLE",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you",
    },
    {
      img: Img1,
      head: "BELIEVABLE",
      para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center bg-yellow-300">
        <Slider {...settings}>
          {forms.map((form, index) => (
            <div key={index} className="bg-gray-400 w-full h-[500px]">
              <h2 className= "text-white bg-neutral-600">{form.head}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Data;
