import "../../styles/sobreMi/experiencia.css"
import {BotonDegradado} from "../../components/botones/BotonDegradado.jsx"

export function Experiencia(){

    return(
        <div className="experiencia">
            <div className="experiencia-div">

                <div className="experiencia-titulo-div">
                    
                    <h3>
                        Educacion y Experiencia
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic animi eum molestiae quibusdam! Assumenda enim deserunt, deleniti eligendi quaerat consequatur itaque molestiae illo ipsa, minus porro mollitia vitae officia!
                        
                    </p>
                    <BotonDegradado 
                    
                    frase="Agenda ahora" 
                    link="https://api.whatsapp.com/send?phone=584247449166&text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20informaci%C3%B3n%20acerca%20de%20las%20consultas%20psicol%C3%B3gicas.">
                    </BotonDegradado>
                </div>
                
                <div className="experiencia-detalles-div">
                <div className="detalle">
                        <h2>+ 6</h2>
                        <span>Años de experiencia</span>
                    </div> 
                    <div className="detalle">
                        <h2>+ 500</h2>
                        <span>Sesiones Completas</span>
                    </div> 
                    <div className="detalle">
                        <h2>+ 1000</h2>
                        <span>Cafesitos</span>
                    </div> 
                    
                </div>
            </div>
        </div>
    )

}
