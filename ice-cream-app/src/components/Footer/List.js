import React from 'react'
import logo from './Images/logo.png'



const List = () => {
  
    return (
    <div className='flex flex-col justify-between max-w-full mx-10 my-4 container-footer md:mx-0 lg:mx-10 md:flex-row'>
        
        <div className='h-40 container-logo-footer w-80'>

            <img className='w-40 h-40 rounded-full xl:flex 2xl:ml-20'src={logo} alt="Logo" />

        </div>
        <br />    

        <div className='mr-20 font-bold container-list lg:mt-2 lg:flex gap-x-1 xl:flex xl:gap-x-3 2xl:gap-x-12'>           

            <div>
            <ul>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Todas las Categorias</a></li>
                <br />
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Ocasiones</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Trabajando Desde Casa</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Hora de la Merienda</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Desayuno</a></li>            
            </ul>
            </div>
            <br />  
            <br />   

            <div>
            <ul>
                <li><a className='font-sans font-semibold hover:bg-slate-300 'href=".">Productos Destacados</a></li>
                <br />
                
                <li><a className='font-sans font-semibold hover:bg-slate-300'href='.'>Helados de Agua</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Helados de Crema</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Helados Veganos</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Helados Celiacos</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Drinks</a></li>            
            </ul>
            </div>
            <br />    
            <br />

            <div>
            <ul>                   
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Regalos y Promociones</a></li>
                <br />
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Gifts cards</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">2x1 Miercoles y Jueves</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Descuento Pedidos Online</a></li>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Sorteos</a></li>              
            </ul>
            </div>
            <br />
            <br /> 

            <div>
            <ul>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Nuestras Especializaciones</a></li>
            </ul>
            </div>
            <br />
            <br />   
            
            <div>
            <ul>
                <li><a className='font-sans font-semibold hover:bg-slate-300'href=".">Sobre Nosotros</a></li>                  
            </ul>
            </div>
            <br />
            <br />          

        </div>
    
    </div>
  )
}


export default List
