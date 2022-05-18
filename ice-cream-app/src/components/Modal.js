import React from "react";
import "./Modal.css";


const Modal = ({ children, modalIsOpen, closeModal }) => {
  return (
    <div
      className={
        (modalIsOpen ? "flex-wrap" : "hidden") +
        " bg-transparent opacity-100  fixed inset-0 z-50 flex items-center justify-center"
      }
    >
      <div className="">
      <div className="h-screen overflow-auto border-4 rounded-lg border-cyan-500 bg-zinc-200">
        <div className="flex justify-end ">
          <button
            className="px-2 m-2 font-sans text-white bg-gray-800 border-2 rounded border-cyan-500"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  
    </div>
  );
};
export default Modal;