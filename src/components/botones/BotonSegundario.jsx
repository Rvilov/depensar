import { useNavigate } from "react-router-dom"
import "../../styles/botones/BotonSecundario.css"

const handleClick = (ruta , navigate) => {
       

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