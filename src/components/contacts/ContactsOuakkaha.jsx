import React from "react";
import { Phone, PhoneCall, Mail, MapPin } from "lucide-react";
import "../../styles/Contact.css"



function ContactsOuakkaha () {
    return(
        <>
          <div className="logoOuakkaha">
        <img src="/imgs/Logo.png" alt="" />
      </div>

      <div className="contact">
        <div className="contenu">
          <h1>Contactez OUAKKAHA</h1>
          <h5>
            {" "}
            <MapPin size={18} /> Adresse :
          </h5>
          <p>
            Zaouiate Issen, Commune Rurale Eddir-Ouled Teima, Taroudant – Maroc
          </p>
          <div>
            <p>
              <strong>
                {" "}
                <Phone size={16} /> Téléphone :
              </strong>
              <span> +212 6 61 18 64 16</span>
              <br />
              <span> +212 6 61 20 95 16</span>
            </p>
          </div>

          <div>
            <p>
              <strong>
                {" "}
                <PhoneCall size={16} />  Fixe :
              </strong>
              <span> +212 5 28 21 68 65</span>
              <br />
              <span> +212 5 28 21 62 62</span>
            </p>
          </div>

          <div>
            <p>
              <strong>
                <Mail size={16} /> Emails :
              </strong>
              <span>oukkaha.med1@gmail.com</span>
              <span>livraisonouk@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="form">
          <p>
            Contactez-nous pour plus d’informations ou laissez un message
            ci-dessous et nous vous répondrons dès que possible.
          </p>
          <form action="">
            <label htmlFor="Nom">Nom :</label>
            <input type="text" placeholder="Nom" />
            <label htmlFor="Prénom"> Prénom :</label>
            <input type="text" placeholder="Prenom" />
            <label htmlFor="Email">Email :</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="Tél">Tél :</label>
            <input type="number" placeholder="Tél" min="0" />

            <label htmlFor="messege">Messege</label>
            <textarea
              name="messege"
              placeholder="Écrivez votre message "
            ></textarea>
            <button type="submit" className="buttonOuakkaha">Envoyer</button>
          </form>
        </div>
      </div>
        </>
    )
}
export default ContactsOuakkaha;