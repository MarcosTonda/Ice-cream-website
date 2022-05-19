import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home"  
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
     <div className="">
     <Banner/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ShoppingCart' element={<ShoppingCart />}/>
        </Routes>
      </BrowserRouter>  
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default App;
