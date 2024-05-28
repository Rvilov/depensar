import "../../styles/inicio/inicia.css"
import { BotonDegradado } from "../botones/BotonDegradado"
export const Inicia = () => {
    return(
        <div className="inicia">
            <h1>
                Inicia ya!
            </h1>
            <span id="inicia-texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio eos sint, provident quasi eveniet?  
            </span>
            <BotonDegradado  frase="Agenda ahora">
            </BotonDegradado>
        </div>
    )
}