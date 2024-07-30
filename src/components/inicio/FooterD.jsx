import "../../styles/inicio/footerD.css"
import { BotonSecundarioWhite } from "../botones/BotonSegundario"
import whatsapp from "../../assets/Redes/whatsappblanco.svg"
import linkedin from "../../assets/Redes/linkedinblanco.svg"
import instagram from "../../assets/Redes/instagramblanco.svg"
import tiktok from "../../assets/Redes/tik-tok.svg"

export const FooterD = () =>{
    return(
        <div className="footerD">

<div className="footer-div-agendar">
                <h2>
                    Agenda ahora mismo una consulta de 15 minutos
                </h2>
               <BotonSecundarioWhite frase="Agenda ahora"
               ></BotonSecundarioWhite>
            </div>

          
            <div className="footer-div-logo">

            </div>
            <div className="footer-div-datos">
                <h2>
                    Psic. Derlis Lobo
                </h2>
                <span>
                    dalc2324@gmail.com
                </span>
                <span>
                    041212345678
                </span>

                <div className="footer-div-redes">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=584247449166&text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20informaci%C3%B3n%20acerca%20de%20las%20consultas%20psicol%C3%B3gicas."><img src={whatsapp} alt="Whatsapp" /></a>
                   <a target="_blank" href="https://www.instagram.com/depensar_"><img src={instagram} alt="instagram" /></a>
                    <a target="_blank" href="https://www.tiktok.com/@depensar_"><img src={tiktok} alt="tik-tok"/></a>
                   <a target="_blank" href=""><img src={linkedin} alt="linkedin" /></a>

                </div>
            </div>
            
        </div>
    )

}