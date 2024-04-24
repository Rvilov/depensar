import "../styles/footerD.css"
import { BotonSecundarioWhite } from "./botones/BotonSegundario"

export const FooterD = () =>{
    return(
        <div className="footerD">
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
            </div>
            <div className="footer-div-logo">

            </div>
            <div className="footer-div-agendar">
                <h2>
                    Agenda ahora mismo una consulta de 15 minutos
                </h2>
               <BotonSecundarioWhite frase="Agenda Ahora"></BotonSecundarioWhite>
            </div>
            
        </div>
    )

}