import { TYPES } from "./actions/shoppingActions";
import { useReducer, useEffect } from "react";
import { useModalHookState } from "./useModalHookState";
import { shoppingReducer, shoppingInitialState} from "./reducer/shoppingReducer"
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Modal from "./Modal";
import Nav from "./Nav";
import Portada from "./Portada";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const productsURL = "http://localhost:3000/products";
    const cartURL = "http://localhost:3000/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    dispatch({ type: TYPES.READ_STATE, payload: { newProduct, newCartItem } });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = (id) => {
     dispatch({ type: TYPES.ADD_TO_CART, payload: id });
   };


   const deleteFromCart = (id, all = false) => {
     if (all) {
       dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
     } else {
       dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
     }
   };


  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  return (
    <>
      
        <div>
          <button className="" onClick={openModal}>
            <Nav>
              <ShoppingCartIcon className="w-12 text-slate-500 hover:text-cyan-500" />
            </Nav>
          </button>
        </div>
        <div>
          <Portada />
        </div>   
    
      <h3 className="p-4 mt-10 font-sans text-xl font-semibold text-left bg-orange-500 text-zinc-700">
        Productos
      </h3>
      <div className="flex flex-row gap-4 mt-6">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} >
        <div className="mt-2 w-96">
          <h2 className="mt-2 font-sans text-2xl font-bold text-center text-blue-900 bg-orange-500 w-96 font">
            Tus compras:
          </h2>

          <div className="flex-col mt-6 w-96 ">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                data={item}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShoppingCart;