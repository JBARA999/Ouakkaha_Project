import React from "react";
import { Check } from "lucide-react";
import "../styles/quality-section.css";

export default function QualitySection() {
  return (
    <section className="quality-section">
      <div className="container">
        <div className="quality-header">
          <h2 className="quality-title">La Qualité,</h2>
          <p className="quality-subtitle">Une priorité du Groupe Ouakkaha</p>
          
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="star" style={{color:"#f55b09"}}>★</div>
            ))}
          </div>
        </div>

        <div className="quality-content">
          <div className="quality-text">
            <p>
              Le groupe OUAKKAHA est engagé en faveur de la qualité et de la sécurité alimentaire. Pour 
              cela, il s'appuie sur son système de management de la qualité des denrées alimentaires basé
              sur la norme ISO 22000 version 2018, pour satisfaire les exigences de ses clients et 
              s'améliorer en continu.
            </p>
            <p>
              L'obtention du certificat ISO 22000 version 2018 est un gage de qualité qui vous assure une 
              traçabilité complète et vous garantie la sécurité alimentaire des produits.
            </p>
            
            <div className="quality-features">
              <div className="feature">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Traçabilité complète</span>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Sécurité alimentaire</span>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Amélioration continue</span>
              </div>
            </div>
          </div>
          
          <div className="certification-logos">
            <div className="logo-card">
              <img src="/imgs/iso.jpg" alt="Certification ISO 22000" />
              <span>ISO 22000:2018</span>
            </div>
            <div className="logo-card">
              <img src="/imgs/ukas.jpg" alt="UKAS Management Systems" />
              <span>UKAS Certifié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}