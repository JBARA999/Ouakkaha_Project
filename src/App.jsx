import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Ouakkaha from "./pages/Ouakkaha";
import Contact from "./pages/Contact";
import Alfissen from "./pages/Alfissen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ouakkaha" element={<Ouakkaha />} />
        <Route path="/alaf-issen" element={<Alfissen />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
