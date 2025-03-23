import React from "react";
import "../styles/hero.css";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="hero container">
      <div >
        <h1 className="animate-fade">
          Notre Metier Est De preparer <span>L'avenir</span>
        </h1>
        <p>
          Nous sommes spécialisés dans la fourniture de solutions d’alimentation
          de haute qualité pour les bovins, les ovins et les vaches laitières au
          Maroc
        </p>
        <div className="links">
          <button>Découvrir notre histoire Voir </button>
          <button className="products">
            Voir nos produits
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="image">
        <img src="imgs/background.webp" alt="" />
      </div>
    </div>
  );
}
