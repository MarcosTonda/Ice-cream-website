import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../components/pictures/pic01.jpg";
import img2 from "../components/pictures/pic02.jpg";
import img3 from "../components/pictures/pic03.jpg";
import img4 from "../components/pictures/pic04.jpg";
import img5 from "../components/pictures/pic05.jpg";
import img6 from "../components/pictures/pic06.jpg";
import img7 from "../components/pictures/pic07.jpg";
import img9 from "../components/pictures/pic09.jpg";
import img10 from "../components/pictures/pic10.jpg";
import img11 from "../components/pictures/pic11.jpg";
import img12 from "../components/pictures/pic12.jpg";
import varios from "../components/pictures/varios.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="justify-center mt-40">
        <h2 className="mt-4 font-sans:'Roboto' text-4xl font-semibold text-center">
          @Luna_Ice{" "}
          <span className="font-serif text-4xl font-semibold text-center text-cyan-400">
            on Instagram
          </span>{" "}
        </h2>

        <div className="w-full mt-10 h-96">
          <Slider {...settings}>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img1}
                alt="cucurucho"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img2}
                alt="palta"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img3}
                alt="variados"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img4}
                alt="bochas"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img5}
                alt="sabores"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img6}
                alt="niños"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img7}
                alt="gourmet"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={varios}
                alt="chef"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img9}
                alt="compartir"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img10}
                alt="cuchara"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img11}
                alt="chica"
              ></img>
            </div>
            <div>
              <img
                className="h-40 mt-8 ml-12 border-2 rounded-lg border-cyan-500 w-60"
                src={img12}
                alt="heladero"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
