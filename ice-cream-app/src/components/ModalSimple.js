import Pic1 from '../components/pictures/pic01.jpg'

const ModalSimple = ({ setModalOn, setChoice }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="fixed inset-0 z-50  bg-zinc-200 opacity-80">

            <div className="flex items-center justify-center h-screen ">

                <div className="flex-col justify-center px-24 py-12 bg-white border-4 border-sky-500 rounded-xl ">

                    <div className="flex mb-10 text-lg text-zinc-600" >
                        <img src={Pic1} className='h-auto max-w-sm' alt='Helado'></img>
                    </div>
                    <div>
                    <p className='items-center justify-center mb-4 text-2xl text-black-800'>Características Producto A</p>
                    </div>
                    <div className='mb-4'>
                        <ul className='items-center justify-center text-lg font-medium text-black-800'>
                            <li>Precio $:</li>
                            <li>Contenido Kg:</li>
                            <li>Sabores:</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <button onClick={handleOKClick} className="items-center justify-center px-4 py-2 text-white bg-green-800 rounded ">Comprar</button>
                        <button onClick={handleCancelClick} className="items-center justify-center px-4 py-2 ml-4 text-white bg-blue-800 rounded ">Volver</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalSimple