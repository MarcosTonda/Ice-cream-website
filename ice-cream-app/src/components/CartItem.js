const CartItem = ({ data, deleteFromCart, addToCart }) => {
    const {name, price, quantity, totalProducto=price*quantity } = data;
    
    return (
      <div className="relative flex mr-4 border-8 shadow-xl bg-cyan-100 w-96 h-28 ">
        <div>
          <div className="ml-4 font-sans text-lg ">
            <h4>{name}</h4>
          </div>
          <div className="ml-4 text-sm font-normal ">
            <h5>
             ${price} x {quantity} = ${totalProducto}
            </h5>
          </div>
          <div className="absolute bottom-0 mt-2 right-44 ">
            <button
              onClick={() => addToCart(data)}
              className="px-6 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end"
            >
              + 1
            </button>
          </div>
          <div className="absolute bottom-0 mt-2 right-24">
            <button
              onClick={() => deleteFromCart(data)}
              className="px-6 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end"
            >
              - 1
            </button>
          </div>
          <div className="absolute bottom-0 right-0 mt-2">
            <button onClick={()=> deleteFromCart(data, true)}
            className="px-4 py-1 mb-1 mr-2 border-2 rounded-full hover:bg-slate-300 bg-slate-200 border-cyan-300 place-self-end">
              Quitar
            </button>
            <br/>
          </div>
        </div>
      </div>
    );
  };
  export default CartItem;