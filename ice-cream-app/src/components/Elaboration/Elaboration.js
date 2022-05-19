import React from 'react'
import elaboration from './Images/elaboration.jpg'
import tilde from './Images/tilde.png'
import * as stylesMM from '../stylesMM'



const Elaboration = () => {
  return (

    <div className='container grid h-auto max-w-full py-5 md:px-5 grid-row-2 lg:grid lg:grid-cols-2 lg:gap-x-5'>

        <div className='flex flex-col mx-2 container-text gap-y-5 md:mx-0'>        

          <div className="flex flex-wrap font-sans:'Roboto' text-xl font-semibold container-title md:text-2xl xl:text-3xl">

            <p className="pr-2 text-green-700 pb-7">Elaboracion de</p><p>Nuestros Productos</p>
            
          </div>          

          <div className='flex flex-wrap mb-3 containter-text gap-y-6'>

            <div className='flex flex-nowrap '>

            <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p className='text-justify'>Nuestra misión es hacerte feliz a ti y ayudar a nuestra comunidad.  De qué manera?</p>               

            </div>  

            <div className='flex flex-nowrap '>

              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p className='text-justify'>Haciendo helados que disfrutarás comer como ninguna otra cosa en el mundo.</p>                       

            </div>        

            <div className='flex flex-nowrap '>
              
              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Creando sabores únicos que soprenden a todas las personas que los prueban.</p>            

            </div>
         
            <div className='flex flex-nowrap'>
              
              <img className='w-6 h-6 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Siendo inclusivos al crear alternativas para todos, desde personas con intolerancias alimentarias hasta que por cuestiones éticas no desean comer productos hechos con componentes animales.</p>                        

            </div>           

            <div className='flex flex-nowrap'>
              
              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Siendo inclusivos al crear alternativas para todos, desde personas con intolerancias alimentarias hasta que por cuestiones éticas no desean comer productos hechos con componentes animales.</p>            

            </div>

          </div>       

          <div className='mb-4'>

            <button className={stylesMM.CARD_BUTTON} >Descubre Nuestros Productos</button>

          </div>

        </div>

        <div className='container-image'>

          <img className='object-cover object-center w-11/12 h-5/6'src={elaboration} alt="Elaboracion de Nuestros Productos" />

        </div>        

    </div>

  )
}

export default Elaboration