import React from "react";
import helados from "./Images/ice-cream-cone.png";
import * as stylesMM from "../stylesMM";

const Delivery = () => {
  return (
    <div>
      <div className="grid h-auto max-w-full py-5 md:px-5 grid-row-2 lg:grid lg:grid-cols-2 lg:gap-x-5">
        <div className="">
          <img
            className="object-cover object-center w-11/12 h-full"
            src={helados}
            alt="Hace tu pedido ONLINE"
          />
        </div>

        <div className="flex flex-col font-sans:'Roboto'content-center pt-6 mx-2 container-text lg:mx-0 gap-y-5 lg:gap-y-8">
          <div className="text-xl font-semibold container-title md:text-2xl xl:text-3xl">
            <p className="text-green-700">Hace tu Pedido Online!</p>
            <p className="pb-3">Delivery Gratis!</p>
          </div>

          <div className="container-p md:text-lg">
            <p className="text-justify">
              Sorprende a alguien que esté haciendo Homeoffice
            </p>
            <br />

            <p className="text-justify">
              Te imaginas estar trabajando desde casa, haces una pausa para
              almorzar, te suena el timbre y cuando abres te encuentras con
              nuestra caja especial home?
            </p>
            <br />

            <p className="text-justify">
              Puedes pedir el peso y sabores que desees, nosotros los
              acompañaremos con unos deliciosos cucuruchos, chocolates, salsas y
              otros topping. También podrás mandar un mensaje personalizado para
              darle un mejor impacto a la sorpresa.
            </p>
            <br />
          </div>

          <div>
            <button className={stylesMM.CARD_BUTTON}>
              Hacer Pedido Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
