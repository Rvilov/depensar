import "../styles/services.css"
import { BotonSecundarioWhite } from "./botones/BotonSegundario"

export function Servicios(){
    return(
        <div className="servicios-div">
            <span className="servicios-titulo1">
                Mis Servicios
            </span>
            <h3 className="servicios-titulo2">
                ¿Que estas buscando?
            </h3>

            <div className="servicios-tipos">
                <div className="tipo">
                    <span>
                        
                        Terapia de pareja    
                       
                    </span>

                    <p>
                    La terapia de pareja se enfoca en ayudar a las parejas a resolver conflictos, mejorar la comunicación y fortalecer su relación. Los objetivos pueden incluir evaluar y mejorar aspectos como la comunicación, el afecto, la sexualidad, los conflictos y más. Los terapeutas trabajan con ambos miembros de la pareja para establecer un nuevo vínculo y modificar actitudes y patrones de comportamiento
                    </p>
                </div>
                <div className="tipo">
                    <span>Terapia para niños</span>
                    <p>
                    La terapia infantil o psicoterapia infantil tiene como objetivo potenciar el bienestar emocional y social de los niños. Se diferencia de la terapia de adultos en que utiliza el juego como elemento clave. Los terapeutas también involucran a la familia en el proceso. Las técnicas se adaptan a la etapa evolutiva de cada niño y se centran en áreas como emociones, conductas y habilidades sociales
                    </p>
                </div>
                <div className="tipo">
                   <span> Terapia para adolecentes y adultos </span>
                   <p>
                   La psicoterapia para adolescentes y adultos se dedica al tratamiento de malestares psicológicos. Puede adoptar diversas formas, como la reestructuración cognitiva, que identifica y cambia patrones de pensamiento disfuncionales. Otra técnica es el entrenamiento asertivo, que ayuda a gestionar relaciones personales y mantener una autoestima adecuada. Además, la exposición controlada es útil para tratar problemas de ansiedad
                   </p>
                </div>
            </div>

            <BotonSecundarioWhite className=".servicios-button" frase={"Ver mas"}></BotonSecundarioWhite>
        </div>
    )
}