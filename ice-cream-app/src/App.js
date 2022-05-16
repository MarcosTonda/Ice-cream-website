// import Modal from "./components/Modal";
// import { useModalHookState } from "./components/useModalHookState";
//import Pic1 from "./components/pictures/pic01.jpg";

import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"  
import Banner from "./components/Banner";

const App = () => {
  //const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  return (
    <>
     <div className="sticky top-0">
     <Banner/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ShoppingCart' element={<ShoppingCart />}/>
        </Routes>
      </BrowserRouter>  
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default App;