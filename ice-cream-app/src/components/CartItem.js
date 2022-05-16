const CartItem = ({ data, deleteFromCart, addToCart }) => {
    const { id, name, price, quantity, totalProducto=price*quantity } = data;
    
    return (
      <div className="relative flex mr-4 bg-orange-200 border-8 w-96 h-28 ">
        <div>
          <div className="ml-4 text-base font-normal ">
            <h4>{name}</h4>
          </div>
          <div className="ml-4 text-sm font-thin">
            <h5>
             ${price} x {quantity} = ${totalProducto}
            </h5>
          </div>
          <div className="absolute bottom-0 mt-2 right-44 ">
            <button
              onClick={() => addToCart(id)}
              className="px-6 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end"
            >
              + 1
            </button>
          </div>
          <div className="absolute bottom-0 mt-2 right-24">
            <button
              onClick={() => deleteFromCart(id)}
              className="px-6 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end"
            >
              - 1
            </button>
          </div>
          <div className="absolute bottom-0 right-0 mt-2">
            <button onClick={()=> deleteFromCart(id, true)}
            className="px-4 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end">
              Limpiar
            </button>
            <br/>
          </div>
        </div>
      </div>
    );
  };
  export default CartItem;