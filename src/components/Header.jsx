import React from "react";
import "../styles/Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  // console.log(window.location.href.);
  const location = useLocation(); // React Hook
const isAlafIssen = location.pathname.includes("alaf-issen");
  return (
    <header>
      <div className="container">
        <div className="header">
          <nav className="navbar">
            <div>
              {isAlafIssen ?<img className="logo" src="imgs/logo-issen.png" /> : <img className="logo" src="imgs/Logo.png" alt="" />}
              
            </div>

            <div className="lienks">
              <NavLink to="/">Acceuil</NavLink>
              <NavLink to="/ouakkaha">Ouakkaha Mohammed</NavLink>
              <NavLink to="/alaf-issen">Alaf Isenn</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
