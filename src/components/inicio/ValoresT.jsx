import "../../styles/inicio/valores.css"

export const Valores = () => {
    return(
        <div className="valores">

        <h1 className="titulo">
            Mis valores en terapia
        </h1>  
        <div className="valores-div">
            <div className="div1 valor"> 
                <h3>Empatia</h3>
                <p>La empatía guía nuestro trabajo. Nos esforzamos por comprender tu perspectiva y experiencias. A través de una escucha atenta y una respuesta compasiva, te ofrecemos un espacio donde te sientas verdaderamente escuchado y comprendido.</p>
            </div>
            <div className="div2 valor">
                <h3>Amabilidad</h3>
                <p>La amabilidad es esencial en nuestra práctica. Nos aseguramos de que cada cliente sea recibido con comprensión y respeto, creando un ambiente seguro y acogedor. Queremos que te sientas apoyado y valorado en cada sesión.</p> 
            </div>
            <div className="div3 valor"> 
                <h3>Seguridad</h3>
                <p>Tu seguridad es nuestra prioridad. Proveemos un entorno donde puedes explorar tus emociones con confianza. Nos comprometemos a mantener prácticas profesionales que aseguren tu bienestar durante todo el proceso terapéutico.</p>
                
            </div>
            <div className="div4 valor"> 
                <h3>Privacidad</h3>
                <p>La privacidad es fundamental. Garantizamos la confidencialidad de todo lo que compartas. Cumplimos con los más altos estándares éticos para proteger tu información, permitiéndote hablar con total honestidad y sin preocupaciones.</p>
            </div>
        
        </div>
        </div>
    )
}