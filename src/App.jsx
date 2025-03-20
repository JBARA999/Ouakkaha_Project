<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Ouakkaha from "./pages/Ouakkaha";
import Contact from "./pages/Contact";
import Alfissen from "./pages/Alfissen";
import Header from "./components/Header";
import Footer from "./components/Footer";
=======
import { Route, Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
>>>>>>> 4bbc495ceb0da0139b8ea7bb09817b7f9bf89eaa

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ouakkaha" element={<Ouakkaha />} />
        <Route path="/alaf-issen" element={<Alfissen />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
=======
     <Header/>
>>>>>>> 4bbc495ceb0da0139b8ea7bb09817b7f9bf89eaa
    </>
  );
}

export default App;
