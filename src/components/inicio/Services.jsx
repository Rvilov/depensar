import "../../styles/inicio/services.css"
import { BotonSecundarioWhite } from "../botones/BotonSegundario"

import terapiaNinos from "../../assets/inicio/terapia_para_niños.png"
import terapiaParejas from "../../assets/inicio/terapia_para_parejas.png"
import terapiaAdultos from "../../assets/inicio/terapia_para_adultos.png"

export function Servicios(){
    return(
        <div className="servicios-div">
            

            <div className="servicios-div-tipos">

                <div className="servicios-tipos-titulo">
                    <span>
                        Mis servicios
                    </span>
                    <h3>
                        ¿Que estas buscando?
                    </h3>
                </div>
                
                <div className="servicios-tipos">

                    <div className="tipo">
                        <img src={terapiaParejas} alt="Terapia para niños" />
                        <span>Terapia de pareja</span>
                        
                        <p>
                        La terapia de pareja se enfoca en ayudar a las parejas a resolver conflictos, mejorar la comunicación y fortalecer su relación. 
                        </p>
                    </div>
                    <div className="tipo">
                        <img src={terapiaNinos} alt="Terapia para parejas" />
                        <span>Terapia para niños</span>
                        
                        <p>
                        La terapia infantil o psicoterapia infantil tiene como objetivo potenciar el bienestar emocional y social de los niños. 
                        </p>
                    </div>
                    <div className="tipo">
                        <img src={terapiaAdultos} alt="Terapia para adolecentes y adultos" />
                        <span> Terapia para adolecentes y adultos </span>
                        
                        <p>
                        La psicoterapia para adolescentes y adultos se dedica al tratamiento de malestares psicológicos.
                        </p>
                    </div>                
                </div>

                <BotonSecundarioWhite className=".servicios-button" frase={"Ver mas"} ruta={"servicios"}></BotonSecundarioWhite>
            </div>

           
        </div>
    )
}