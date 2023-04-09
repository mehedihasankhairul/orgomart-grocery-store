import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Products from "./components/Products";
import CategorySlider from "./components/CategorySlider";

const App = () => (
  <div>
    <NavBar />
    <div className=" z-10 fixed right-0">
      <Cart />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categories" element={<CategorySlider />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default App;
