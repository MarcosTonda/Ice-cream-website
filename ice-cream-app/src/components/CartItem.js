const CartItem = ({ data, deleteFromCart, addToCart }) => {
    const { id, name, price, quantity } = data;
    return (
      <div className="relative flex mr-4 bg-yellow-500 border-8 w-96 h-28 ">
        <div>
          <div className="ml-4 text-lg font-semibold ">
            <h4>{name}</h4>
          </div>
          <div className="ml-4">
            <h5>
              ${price}.00 x {quantity} = {price * quantity}
            </h5>
          </div>
          <div className="absolute bottom-0 mt-2 right-40 ">
            <button
              onClick={() => addToCart(id)}
              className="px-6 py-1 mb-1 mr-2 rounded-full hover:bg-slate-500 bg-slate-200 place-self-end"
            >
              + 1
            </button>
          </div>
          <div className="absolute bottom-0 mt-2 right-24">
            <button
              onClick={() => deleteFromCart(id)}
              className="px-6 py-1 mb-1 rounded-full hover:bg-slate-500 bg-slate-200 place-self-end"
            >
              - 1
            </button>
          </div>
          <div className="absolute bottom-0 right-0 mt-2">
            <button onClick={()=> deleteFromCart(id, true)}
            className="px-4 py-1 mb-1 mr-2 rounded-full hover:bg-slate-500 bg-slate-200 place-self-end">
              Limpiar
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default CartItem;