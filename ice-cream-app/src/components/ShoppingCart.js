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

  const addToCart = async (data) => {
    let newItem = state.products.find((product) => product.id === data.id);
    let itemInCart = state.cart.find((item) => item.id === newItem.id);

    if (itemInCart) {
      let endpoint = `http://localhost:3000/cart/${data.id}`;

      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...data, quantity: itemInCart.quantity + 1 }),
      };

      let res = await axios(endpoint, options);
      let itemData = await res.data;
      dispatch({ type: TYPES.ADD_TO_CART, payload: { itemData } });
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...data, quantity: 1 }),
      };

      let res = await axios("http://localhost:3000/cart", options);
      let itemData = await res.data;

      dispatch({ type: TYPES.ADD_TO_CART, payload: { itemData } });
    }
  };

  const deleteFromCart = async (data, all = false) => {
    if (all) {
      let endpoint = `http://localhost:3000/cart/${data.id}`;

      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(endpoint, options);
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: data.id });
    } else {
      let itemInCart = state.cart.find((item) => item.id === data.id);

      if (itemInCart.quantity > 1) {
        let endpoint = `http://localhost:3000/cart/${data.id}`;
        let options = {
          method: "PUT",
          headers: { "content-type": "application/json" },
          data: JSON.stringify({ ...data, quantity: itemInCart.quantity - 1 }),
        };
        let res = await axios(endpoint, options);
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id });
      } else {
        let endpoint = `http://localhost:3000/cart/${data.id}`;
        let options = {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        };
        let res = await axios(endpoint, options);
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id });
      }
    }
  };

  const totalCart = cart.reduce(
    (itemPrevius, itemNext) => itemPrevius + itemNext.quantity * itemNext.price,
    0
  );
  const cantidadItemns = cart.reduce(
    (itemPrevius, itemNext) => itemPrevius + itemNext.quantity,
    0
  );

  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);

  return (
    <>
      <div className="flex justify-between mt-4 mr-4 align-middle">
        <div className="mt-3">
          <a href="http://localhost:3006/" className="ml-4">
            <button className="p-5 rounded-full bg-cyan-400 hover:bg-cyan-300">
              <ChevronDoubleLeftIcon className="w-6 text-gray-800" />
            </button>
          </a>
        </div>
        <h1 className="mt-4 mb-4 text-5xl font-sans:'Roboto' font-semibold align-middle">
          Bienvenido, comienza{" "}
          <span className="font-sans:'Roboto' text-5xl font-semibold text-cyan-500">
            a llenar tu carrito!
          </span>
        </h1>
        <div className="mt-3">
          <button
            className="p-5 rounded-full bg-cyan-400 hover:bg-cyan-300"
            onClick={openModal}
          >
            <ShoppingCartIcon className="text-gray-800 w-7" />
          </button>
        </div>
      </div>

      <div>
        <div className="grid gap-10 mt-10 ml-2 mr-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} data={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="">
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <div className="mt-2 w-96">
            <h2 className="mt-2 font-sans:'Roboto' text-3xl font-semibold text-center text-black w-96">
              Este es{" "}
              <span className="font-sans:'Roboto' text-3xl font-semibold text-cyan-600">
                {" "}
                tu carrito!
              </span>
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
            <div className="relative flex mr-4 border-8 shadow-xl bg-cyan-200 w-96 h-28 ">
              <div className="mt-4 ml-4 font-sans:'Roboto' text-lg">
                <h4>Cantidad de productos en tu carrito: {cantidadItemns}</h4>
                <h4 className="mt-2 mb-2">
                  Total de tu compra = $ {totalCart},00
                </h4>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ShoppingCart;
