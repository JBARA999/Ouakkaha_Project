import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src="imgs/Logo.png" alt="" />
        </div>

        <div className="lienks">
          <a href="">Acceuil</a>
          <a href="">Ouakkaha Mohammed</a>
          <a href="">Alaf Isenn</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
}
