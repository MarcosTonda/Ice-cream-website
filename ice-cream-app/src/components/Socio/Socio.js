import React from 'react'
import bluecow from './Images/bluecow.png'

const Socio = () => {
  return (
    <div className='grid content-center max-w-full text-center bg-blue-300 gap-y-10 h-80 grid-row-3 '>          

        <div className='flex flex-wrap justify-center text-xl font-bold container-title md:text-2xl xl:text-3xl'>

            <p className='font-extrabold text-black uppercase'>principal socio de luna ice</p>
            
        </div> 

        <div className='flex justify-center gap-5 flex-nowrap'>

            <img className='w-24 h-24 rounded-full'src={bluecow} alt="bluecow"></img>
            
            
        </div> 

        <div>

        <button className='p-3 mb-3 font-extrabold text-white bg-blue-700 border-2 border-none rounded-xl hover:bg-purple-600'>Visitar Sitio Web</button>

        </div>

    </div>
  )
}

export default Socio