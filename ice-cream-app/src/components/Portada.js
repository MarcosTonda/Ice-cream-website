import React from "react";
import portadaimg from "./assets/portadaimg.jpg";

const Portada = () => {
  return (
    <div className="bg-fixed h-96 bg-slate-700">
      <img  src={portadaimg} alt="helados" className="object-cover object-center w-full h-full" />
    </div>
  );
};

export default Portada;
