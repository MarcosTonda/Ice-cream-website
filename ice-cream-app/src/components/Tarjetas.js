import React from "react";
import fresas from "../assets/fresas.jpg";
import linda from "../assets/linda.jpg";
import crema from "../assets/crema.jpg";
import varios from "../assets/varios.jpg"
import * as stylesMM from "./stylesMM"
import { useModalHookState } from "./useModalHookState";
import Modal from "./Modal";




const Tarjetas = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  return (
    <>
    <div className='mt-4 mb-10 text-6xl text-center'>
      <h1>
        Para todos los gustos
      </h1>
    </div>
    <div class={stylesMM.MAIN_CONTAINER}>
      <div class={stylesMM.CARD_CONTAINER}>
        
          <img class={stylesMM.IMAGE} src={fresas} alt="fresas" />
      
        <div class="p-6">
          <h5 class={stylesMM.CARD_TITLE}>
            Para Vegan@s
          </h5>
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <p class={stylesMM.CARD_TEXT}>
            Si sos vegan@ no dejes de probar nuestro delicioso chocolate fondente, no lo vas a poder creer!
          </p>
          </Modal>
          <div className="flex justify-between">
          <button 
            type="button"
            class={stylesMM.CARD_BUTTON} 
            onClick={openModal}
            > 
            Mas Info
          </button>
          <a href="http://localhost:3001/ShoppingCart">
          <button
            type="button"
            class={stylesMM.CARD_BUTTON}
          >
            ¡Compra ahora!
          </button>
          </a>
          </div>
        </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72 md-flex">
       
          <img class="rounded-t-lg h-52 w-72 object-cover" src={linda} alt="galgo tomando helado" />
        
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Mascotas
          </h5>
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <p class="text-blue-700 text-base mb-4">
            No solo somos una heladería petfriendly, también tenemos un sabor para los reyes de casa. Sin azúcares añadidos
          </p>
          </Modal>
          <div className="flex justify-between">
          <button 
            type="button"
            class={stylesMM.CARD_BUTTON} 
            onClick={openModal}
            >
            Mas Info
          </button>
          <a href="http://localhost:3001/ShoppingCart">
          <button
            type="button"
            class={stylesMM.CARD_BUTTON}
          >
            ¡Compra ahora!
          </button>
          </a>
          </div>
          </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72">
        
          <img class="rounded-t-lg h-52 object-cover" src={crema} alt="crema" />
       
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Celíac@s
          </h5>
          <Modal> modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <p class="text-blue-700 text-base mb-4">
            Como queremos que tod@s puedan disfrutar de nuestros helados, tenemos gustos sin gluten.
          </p>
          </Modal>
        
         <div className="flex justify-between">
          <button 
            type="button"
            class={stylesMM.CARD_BUTTON} 
            onClick={openModal}
            >
            Mas Info
          </button>
          <a href="http://localhost:3001/ShoppingCart">
          <button
            type="button"
            class={stylesMM.CARD_BUTTON}
          >
            ¡Compra ahora!
          </button>
          </a>
        </div>
        </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72">
      
          <img class="rounded-t-lg h-52 object-cover" src={varios} alt="varios sabores" />
       
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Ofertas Especiales
          </h5>
          <Modal> modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <p class="text-blue-700 text-base mb-4">
            Todas las semanas tenemos nuevas ofertas, te recomendamos consultar esta sección antes de hacer tu pedido.
          </p>
          </Modal>
         
         
         <div className="flex justify-between">
          <button 
            type="button"
            class={stylesMM.CARD_BUTTON} 
            onClick={openModal}
            >
            Mas Info
          </button>
          <a href="http://localhost:3001/ShoppingCart">
          <button
            type="button"
            class={stylesMM.CARD_BUTTON}
          >
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
