import "../../styles/inicio/portada.css"
import { BotonDegradado } from "../botones/BotonDegradado"

export function Portada (){
    return(
        <div className="portada">
           
           <div className="portada-cabecera">
               
                <p className="portada-p">Servicios de Psicologia para Adultos y Niños</p>
               <BotonDegradado
                frase="Agenda Ahora"
               ></BotonDegradado>
                         
               
            </div>

        </div>
    )
    }
