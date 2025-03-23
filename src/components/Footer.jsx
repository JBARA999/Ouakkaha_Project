import { Facebook, Headset, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column contact-column">
          <h3 className="footer-title">OUAKKAHA MOHAMED</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <Phone className="contact-icon" />
              <span>+212 6 61 18 64 16</span>
            </li>
            <li className="contact-item">
              <Phone className="contact-icon" />
              <span>+212 6 61 20 95 16</span>
            </li>
            <li className="contact-item">
              <Headset className="contact-icon" />
              <span>+212 5 28 21 68 65</span>
            </li>
            <li className="contact-item">
              <Headset className="contact-icon" />
              <span>+212 5 28 21 62 62</span>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" />
              <span>oukkaha.med1@gmail.com</span>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" />
              <span>livraisonouk@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-column contact-column">
          <h3 className="footer-title">ALF ISSEN</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <Phone className="contact-icon" />
              <span>+212 6 61 18 64 16</span>
            </li>
            <li className="contact-item">
              <Phone className="contact-icon" />
              <span>+212 6 61 20 95 16</span>
            </li>
            <li className="contact-item">
              <Headset className="contact-icon" />
              <span>+212 5 28 21 68 65</span>
            </li>
            <li className="contact-item">
              <Headset className="contact-icon" />
              <span>+212 5 28 21 62 62</span>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" />
              <span>oukkaha.med1@gmail.com</span>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" />
              <span>service.commercial.alfissen@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-column info-column">
          <div className="social-section">
            <h3 className="footer-title">Suivez-Nous</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Youtube">
                <Youtube className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="address-section">
            <h3 className="footer-title">Adresse</h3>
            <div className="address-container">
              <MapPin className="address-icon" />
              <div className="address-details">
                <p>Zaouiate Issen, Commune Rurale Eddir-Ouled Teima, Taroudant - Maroc</p>
                <p>B.P. N° 617 Hay Mohamadi Ouled Teima, Taroudant - Maroc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">Société Nouvelle de Volaille | Tous droits réservés © 2025</p>
      </div>
    </footer>
  );
}