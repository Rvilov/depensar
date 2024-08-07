import "../../styles/contacto/formularioSideCard.css"

import correo from "../../assets/Contactame/correo.png"
import telefono from "../../assets/Contactame/telefono24.png"
import direccion from "../../assets/Contactame/direccion.png"
export function SideCard(){
    return( 
    <div className="formulario-info">
        <h3>Informacion de contacto</h3>

        <span >
        <img src={telefono} alt="" />
            +58 0424 - 7449166
        </span>
        <span >
            <img src={correo} alt="" />
            psicderlislobo@gmail.com
        </span>
        <span >
            <img src={direccion} alt="" />
            Direccion
        </span>
       
    </div> )
}