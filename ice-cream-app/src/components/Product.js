import { useEffect, useState } from "react";
import axios from "axios";
import * as stylesMM from "./stylesMM";

const Product = ({ data, addToCart }) => {
  const [productos, setProductsList] = useState({
    products: [],
  });
  const {name, price, imagen } = data;

  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios.get(url).then((response) => {
      setProductsList({
        products: response.data,
      });
    });
  }, [productos]);

  return (
    <div className="shadow-2xl shadow-cyan-300">
    <div className={stylesMM.CARD_CONTAINER}>
          <img src={imagen} alt="foto"
          className={stylesMM.IMAGE}
          />
      
        <div class="p-6">
        <h4 class={stylesMM.CARD_TITLE}>{name}</h4>
            <h5 className="ml-2 text-center">$ {price}.00</h5>
         </div>
         <div className="flex justify-center mb-4">
        <button type="button"
            onClick={()=>addToCart(data) }
            className="p-2 text-xs font-medium text-white bg-blue-700 rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" 
            >
          Comprar!
        </button>
        </div>
      </div>  
      </div> 
  );
};
export default Product;
