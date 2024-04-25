import '../../styles/inicio/headerP.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export function Header(){
    window.onload=function(){
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu = document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-visible")
    })
    }
return (

    
    <header className='header'>
        
        <nav id='nav'>
                    
                    <span className="logo"><img src='https://i.ibb.co/9bJrpZ6/Para-Fondos-Oscuros-Version-3-Logo-Depensar.png' alt="dplogo"/></span>
                    <button className='nav-toggle'>
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className='nav-menu'>
                            <li className='nav-menu-item'><a href="">Inicio</a></li>
                            <li className='nav-menu-item'><a href="">Sobre mi</a></li>
                            <li className='nav-menu-item'><a href="">Servicios</a></li>
                            <li className='nav-menu-item'><a href="">Contacto</a></li>
                            
                    </ul> 
                    
                
        </nav>  
    </header>
)

}

