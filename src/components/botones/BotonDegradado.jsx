import "../../styles/botones/BotonDegradado.css"

// eslint-disable-next-line react/prop-types
export const BotonDegradado = ({frase, link}) =>{
    return  (
        <span className="portada-a">
            <a href={link} target="_blank" rel="noreferrer noopener">{frase}</a>
        </span>
    )
        
    
}