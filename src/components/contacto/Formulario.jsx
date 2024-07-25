
import "../../styles/contacto/formulario.css"
import correo from "../../assets/Contactame/icons8-correo-32.png"

import { SideCard } from "./FormularioSideCard"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (event) => {
      event.preventDefault();
  
      // Estos IDs y Public Key se deben obtener de tu cuenta en EmailJS
      emailjs.sendForm('service_r38xc3s', 'template_bgwa0bb', form.current, '7wVwYdrBaiGxu4aj0')
        .then((result) => {
          alert("Enviado" + result)
        }, (error) => {
          alert("No enviado" + error)
        });
    };

    return(
        <div className="formulario">
            
            <div className="formulario-principal">
               <form className="formulario-datos" action="" ref={form} onSubmit={sendEmail}>
                    
                    <div className="formulario-datos-top">
                        <h3>Enviame un Mensaje</h3>
                        <img src={correo} alt=""/>
                    </div>
                    

                    <input type="text" name="user_name" id="nombre" placeholder="Nombre" className="formulario-input"/>
                    <input type="text" name="" id="apellido" placeholder="Apellido"className="formulario-input"/>

                    <input type="text" name="user_phone" id="telefono"placeholder="Numero de telefono" className="formulario-input"/>
                    <input type="email" name="user_email" id="correo" placeholder="Correo" className="formulario-input"/>

                    <textarea id="mensaje"placeholder="¿Como puedo ayudarte?" name="message"></textarea>
                    <div className="formulario-datos-bottom">
                         <input type="submit" value="Enviar"className="formulario-button" />
                    </div>
                    
                </form>
               <SideCard/>
            </div>
        </div>



    )
    
}

export default ContactForm;