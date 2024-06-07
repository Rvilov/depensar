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
            <BotonDegradado  frase="Agenda ahora"
               link="https://api.whatsapp.com/send?phone=584247449166&text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20informaci%C3%B3n%20acerca%20de%20las%20consultas%20psicol%C3%B3gicas.">
            </BotonDegradado>
        </div>
    )
}