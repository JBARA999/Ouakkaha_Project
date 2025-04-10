import React, { useState } from "react";
import "../styles/Header.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isAlafIssen = location.pathname.includes("alaf-issen");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <nav className="navbar">
              <div>
                {isAlafIssen ? (
                  <img className="logo" src="imgs/logo-issen.png" alt="logo" />
                ) : (
                  <img className="logo" src="imgs/Logo.png" alt="logo" />
                )}
              </div>

              <div className={`lienks ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={closeMenu}>Acceuil</NavLink>
                <NavLink to="/ouakkaha" onClick={closeMenu}>Ouakkaha Mohammed</NavLink>
                <NavLink to="/alaf-issen" onClick={closeMenu}>Alaf Isenn</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </div>

              <div className={`burger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}
