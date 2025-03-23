import { Routes, Route } from "react-router-dom";
import "./App.css";
import Acceuil from "./pages/Acceuil";
import Ouakkaha from "./pages/Ouakkaha";
import Alfissen from "./pages/Alfissen";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";



function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/ouakkaha" element={<Ouakkaha/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/alaf-issen" element={<Alfissen />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
