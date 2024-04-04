import "../../styles/botones/BotonSecundario.css"

// eslint-disable-next-line react/prop-types
export const BotonSecundario = ({frase}) => {
    return(
        <button className="boton-secundario">
            {frase}
        </button>
    )
}