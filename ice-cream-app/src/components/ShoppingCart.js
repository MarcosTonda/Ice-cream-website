import { TYPES } from "./actions/shoppingActions";
import { useReducer, useEffect } from "react";
import { useModalHookState } from "./useModalHookState";
import {
  shoppingReducer,
  shoppingInitialState,
} from "./reducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";
import {
  ShoppingCartIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/outline";
import Modal from "./Modal";

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

  // const total= cart.reduce(
  //   ) => previousValue + currentValue,
  //   0
  // );

  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);

  return (
    <>
      <div className="flex justify-between mt-4 mr-4 bg-orange-400">
        
          <a href="http://localhost:3001/" className="ml-4">
            <button className="p-2 bg-blue-300 rounded-full hover:bg-blue-400">
              <ChevronDoubleLeftIcon className="w-6 text-gray-800" />
            </button>
          </a>
        
        <p className="text-4xl font-thin to container-title md:text-2xl xl:text-3xl">
          Bienvenido a tu carrito
        </p>
        <div className="p-0 text-xs font-bold text-white bg-red-700 rounded-full mb-7 overflow-clip ">
          <div className="">0</div>
        </div>
        <div className="">
          
            <button
              className="p-2 mr-20 bg-blue-300 rounded-full hover:bg-blue-400"
              onClick={openModal}
            >
              <ShoppingCartIcon className="text-gray-800 w-7"/>
            </button>
        
        </div>
      </div>

      <h3 className="p-4 mt-10 font-sans text-xl font-semibold text-left bg-orange-500 text-zinc-700">
        Productos
      </h3>
      <div className="flex flex-row gap-4 mt-6">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="mt-2 w-96">
          <h2 className="mt-2 font-sans text-2xl font-bold text-center text-blue-900 bg-orange-500 w-96 font">
            Tu carrito:
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
          {/* <h3 className="mt-2 font-sans text-2xl font-bold text-center text-blue-900 bg-orange-500 w-96 font">
            Total de tus compras: $ {total}.00
          </h3> */}
        </div>
      </Modal>
    </>
  );
};

export default ShoppingCart;
