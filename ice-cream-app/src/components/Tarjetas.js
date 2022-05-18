import React from "react";
import fresas from "../assets/fresas.jpg";
import linda from "../assets/linda.jpg";
import crema from "../assets/crema.jpg";
import varios from "../assets/varios.jpg";
import * as stylesMM from "./stylesMM";
import { useModalHookState } from "./useModalHookState";
import Modal from "./Modal";

const Tarjetas = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  return (
    <>
      <div className="mt-4 mb-10 text-6xl text-center">
        <h1>Para todos los gustos</h1>
      </div>

      <div className={stylesMM.MAIN_CONTAINER}>
        
          <div className="m-4 bg-white rounded-lg shadow-lg w-72 md-flex">
            <img
              className="object-cover rounded-t-lg h-52 w-72"
              src={fresas}
              alt="fresas"
            />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
                Para Vegan@s
              </h5>

              <p className="mb-4 text-base text-blue-700">
                Si sos vegan@ no dejes de probar nuestro delicioso chocolate
                fondente, no lo vas a poder creer!
              </p>

              <div className="flex justify-between">
                <button
                  type="button"
                  className={stylesMM.CARD_BUTTON}
                  onClick={openModal}
                >
                  Mas Info
                </button>
                <a href="http://localhost:3001/ShoppingCart">
                  <button type="button" className={stylesMM.CARD_BUTTON}>
                    ¡Compra ahora!
                  </button>
                </a>
              </div>
            </div>
          </div>
       
        <div className="m-4 bg-white rounded-lg shadow-lg w-72 md-flex">
          <img
            className="object-cover rounded-t-lg h-52 w-72"
            src={linda}
            alt="galgo tomando helado"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Para Mascotas
            </h5>

            <p className="mb-4 text-base text-blue-700">
              No solo somos una heladería petfriendly, también tenemos un sabor
              para los reyes de casa. Sin azúcares añadidos
            </p>

            <div className="flex justify-between">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={openModal}
              >
                Mas Info
              </button>
              <a href="http://localhost:3001/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Compra ahora!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="m-4 bg-white rounded-lg shadow-lg w-72">
          <img
            className="object-cover rounded-t-lg h-52"
            src={crema}
            alt="crema"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Para Celíac@s
            </h5>

            <p className="mb-4 text-base text-blue-700">
              Como queremos que tod@s puedan disfrutar de nuestros helados,
              tenemos gustos sin gluten.
            </p>

            <div className="flex justify-between">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={openModal}
              >
                Mas Info
              </button>
              <a href="http://localhost:3001/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Compra ahora!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="m-4 bg-white rounded-lg shadow-lg w-72">
          <img
            className="object-cover rounded-t-lg h-52"
            src={varios}
            alt="varios sabores"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
              Ofertas Especiales
            </h5>

            <p className="mb-4 text-base text-blue-700">
              Todas las semanas tenemos nuevas ofertas, te recomendamos
              consultar esta sección antes de hacer tu pedido.
            </p>

            <div className="flex justify-between">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={openModal}
              >
                Mas Info
              </button>
              <a href="http://localhost:3001/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Compra ahora!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
