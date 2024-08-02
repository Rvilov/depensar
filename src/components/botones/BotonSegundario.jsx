import { useNavigate } from "react-router-dom"
import "../../styles/botones/BotonSecundario.css"

const handleClick = (ruta , navigate ) => {
       

    if (ruta === "servicios"){
        window.scrollTo({
            top: 0,
          }); 
       return( 
        navigate("/depensar/servicios")
           )
       
    }
    else if (ruta === "sobremi"){
        window.scrollTo({
            top: 0,
          });
        return( navigate("/depensar/sobre_mi"))
    }
    else if(ruta === "whatsapp"){
        
        window.open("https://api.whatsapp.com/send?phone=584247449166&text=%C2%A1Hola!%20Estoy%20interesad%40%20en%20recibir%20informaci%C3%B3n%20acerca%20de%20las%20consultas%20psicol%C3%B3gicas.", "_blank");
           
        
    }

   
}
// eslint-disable-next-line react/prop-types
export const BotonSecundario = ({frase,ruta} ) => {
    const navigate = useNavigate();

    return(
        <button  onClick={() => handleClick(ruta, navigate)} className="boton-secundario">
            {frase}
        </button>
    )
}
// eslint-disable-next-line react/prop-types
export const BotonSecundarioWhite = ({frase,ruta}) => {

    const navigate = useNavigate();
   
    return(
        <button  onClick={() => handleClick(ruta, navigate)} className="boton-secundario-white">
            {frase}
        </button>
    )
}