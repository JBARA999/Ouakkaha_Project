import React from "react";
import "../styles/Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src="imgs/Logo.png" alt="" />
        </div>

        <div className="lienks">
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="/ouakkaha">Ouakkaha Mohammed</NavLink>
          <NavLink to="/alaf-issen">Alaf Isenn</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
