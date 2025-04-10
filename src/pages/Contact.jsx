import React from "react";
import ContactsOuakkaha from "../components/contacts/ContactsOuakkaha.Jsx";
import ContactsAlfiseen from "../components/contacts/ContactsAlfiseen";



export default function Contact() {
  return (
    <>
    <h1 className="container contact-heading" style={{marginTop:"6rem"}}>Contact & Support</h1>
    <ContactsOuakkaha/>
    <ContactsAlfiseen/>
   
    
    </>
  );
}
