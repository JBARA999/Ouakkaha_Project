import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer>
      <div>
        <span>OUAKKAHA MOHAMED</span>
        <ul>
          <li>
            <Phone />
            <span>+212 6 61 18 64 16</span>
          </li>
          <li>
            <Phone />
            <span>+212 6 61 20 95 16</span>
          </li>
          <li>
            <Headset />

            <span>+212 5 28 21 68 65</span>
          </li>
          <li>
            <Headset />

            <span>+212 5 28 21 62 62</span>
          </li>
          <li>
            <Mail />
            <span> oukkaha.med1@gmail.com</span>{" "}
          </li>
          <li>
            <Mail />
            <span>livraisonouk@gmail.com</span>
          </li>
        </ul>
      </div>
      <div>
        <span>ALF ISSEN</span>
        <ul>
          <li>
            <Phone />
            <span>+212 6 61 18 64 16</span>
          </li>
          <li>
            <Phone />
            <span>+212 6 61 20 95 16</span>
          </li>
          <li>
            <Headset />
            <span>+212 5 28 21 68 65</span>
          </li>
          <li>
            <Headset />
            <span>+212 5 28 21 62 62</span>
          </li>
          <li>
            <Mail />
            <span>oukkaha.med1@gmail.com</span>
          </li>
          <li>
            <Mail />
            <span>service.commercial.alfissen@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className="suiver-address">
        <div className="suiver">
          <span>Suivez-Nous</span>
          <div />
          <div className="social-media">
            <div style={{ display: "flex", gap: "1rem" }}>
              <Facebook />

              <Twitter />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>
        <div className="address">
            <span>Adress</span>
          <p>
            Zaouiate Issen, Commune Rurale Eddir-Ouled Teima, Taroudant - Maroc
          </p>

          <p>B.P. N° 617 Hay Mohamadi Ouled Teima, Taroudant - Maroc</p>
        </div>
      </div>
      <p>Société Nouvelle de Volaille | Tous droits réservés © 2025</p>
    </footer>
  );
}
