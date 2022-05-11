
const Product = ({data, addToCart}) => {
    const {id, name, price} = data;
    
      return (
      <div className="w-48 h-32 border-4 border-orange-600 bg-cyan-300">
        <h4 className="text-lg font-bold text-center">{name}</h4>
        <h5 className="ml-2">$ {price}.00</h5>
        <div className="mt-2 ml-2">
          <button onClick={()=>addToCart(id) } 
          className="p-2 rounded-full hover:bg-slate-500 bg-slate-200">
            Agregar
          </button>
        </div>
      </div>
    );
  };
  export default Product;