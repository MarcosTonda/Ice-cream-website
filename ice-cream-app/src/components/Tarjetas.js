import React, { useState } from "react";
import fresas from "../assets/fresas.jpg";
import linda from "../assets/linda.jpg";
import crema from "../assets/crema.jpg";
import varios from "../assets/varios.jpg";
import * as stylesMM from "./stylesMM";
import { useModalHookState } from "./useModalHookState";
import Modal from "./Modal";

const Tarjetas = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  const [item, setItem] = useState("prueba");
  const handleModal = (data) => {
    setItem(data);
    openModal(!modalIsOpen);
  };
  const veganos =
    "Si sos vegan@ no dejes de probar nuestro delicioso chocolate fondente, no lo vas a poder creer!";
  const mascotas =
    "No solo somos una heladería petfriendly, también tenemos un sabor para los reyes de casa. Sin azúcares añadidos";
  const celiacos =
    "Como queremos que tod@s puedan disfrutar de nuestros helados, tenemos gustos sin gluten.";
  const ofertas =
    "Todas las semanas tenemos nuevas ofertas, te recomendamos consultar esta sección antes de hacer tu pedido.";

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

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(veganos)}
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

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(mascotas)}
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

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(celiacos)}
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
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(ofertas)}
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

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="object-center">
          <div className="mt-2 ml-12 w-96">
            <h2 className="justify-center mt-2 font-sans text-3xl font-semibold text-black ml-14 w-96">
              Lo que tenés{" "}
              <span className="font-serif text-3xl font-semibold text-cyan-600">
                {" "}
                que saber!
              </span>
            </h2>
            <p className="mt-10 ml-20 text-black texttext-xl h-2/3">{item}</p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048__340.jpg"
              alt="base"
              className="w-2/3 mt-32 ml-20 h-2/3"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Tarjetas;
