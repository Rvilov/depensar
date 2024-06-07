import "../../styles/inicio/portada.css"
import { BotonDegradado } from "../botones/BotonDegradado"

export function Portada (){
    return(
        <div className="portada">
           
           <div className="portada-cabecera">
               
                <p className="portada-p">Servicios de Psicologia para Adultos y Niños</p>
               <BotonDegradado
                frase="Agenda ahora"
                link="https://api.whatsapp.com/send?phone=584247449166&text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20informaci%C3%B3n%20acerca%20de%20las%20consultas%20psicol%C3%B3gicas."
               ></BotonDegradado>
                         
               
            </div>

        </div>
    )
    }
