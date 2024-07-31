import "../../styles/inicio/sobreMi.css";

import { BotonSecundario } from "../botones/BotonSegundario";


export const SobreMi = () =>{
    return(

        
       
            <div className="sobremi-div">
                
                
                <div className="sobremi-foto">
                  
                </div>
                               
                <div className="sobremi-texto">
                    <h3>
                        Sobre mi
                    </h3>
                    <p>
                    ¡Hola! Soy Derlis Lobo, psicóloga y fundadora de Depensar. Graduada en la Universidad Yacambú, me especialicé en detección, intervención y tratamiento psicológico. Desde 2019, me dedico a ayudar a personas a superar problemas emocionales. En 2024, inicié mi propia consulta, enfocándome en el bienestar emocional de adultos, adolescentes y niños. Mi objetivo es proporcionarte herramientas para afrontar desafíos y lograr un equilibrio emocional. 
                    </p>
                    <BotonSecundario frase={"Saber mas"} ruta={"sobremi"}></BotonSecundario>
                </div>
            </div>
        
    )




}