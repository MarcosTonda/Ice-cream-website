import React from 'react'
import Tarjetas from "./Tarjetas";
import Columnas from "./Columns";
import Elaboration from "./Elaboration/Elaboration";
import Socio from "./Socio/Socio";
import Delivery from "./Delivery/Delivery";
import Portada from "./Portada";
import Nav from './Nav';
import Carrusel from './Carousel';


const Home = () => {
  return (
    <div>

<div className="">
       <div className="bg-white border-b-2 border-cyan-500">
       <Nav/>
       </div>
      <Portada />
      </div>
      
      <div className="mt-20">
        <Tarjetas />
      </div>
     
      <div>
        <Columnas />
      </div>
      <div className="mt-20">
        <Elaboration />
      </div>
      <div className="mt-20">
        <Socio />
      </div>
      <div className="mt-20">
        <Delivery />
      </div>
      <div className="mt-20">
        <Carrusel />
      </div>
    </div>
  )
}

export default Home