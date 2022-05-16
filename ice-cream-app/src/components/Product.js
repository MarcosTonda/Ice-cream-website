import { useEffect, useState } from "react";
import axios from "axios";
import * as stylesMM from "./stylesMM";

// const Product = ({data, addToCart}) => {
//     const {id, name, price} = data;

const Product = ({ data, addToCart }) => {
  const [productos, setProductsList] = useState({
    products: [],
  });
  const { id, name, price, imagen } = data;

  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios.get(url).then((response) => {
      setProductsList({
        products: response.data,
      });
    });
  }, productos);

  return (
    <div className="w-48 h-32 border-4 border-orange-600 bg-cyan-300">
      <div>
        {productos.products.map((producto) => (
          <div className="" key={id}>
            <img src={imagen} />
            <h4 className="text-lg font-semibold text-center">{name}</h4>
            <h5 className="ml-2 text-center">$ {price}.00</h5>
         
            <div className="mt-2 ml-2">
        <button
          onClick={() => addToCart(id)}
          className="p-2 rounded-full hover:bg-slate-500 bg-slate-200"
        >
          Agregar
        </button>
      </div>
         
         
          </div>
        ))}
      </div>
      
      
    </div>
  );
};
export default Product;
