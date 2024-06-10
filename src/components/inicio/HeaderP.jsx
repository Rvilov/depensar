import '../../styles/inicio/headerP.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

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
                    
                    <span className="logo"></span>
                    <button className='nav-toggle'>
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className='nav-menu'>
                            <li className='nav-menu-item'><NavLink to="depensar/inicio">INICIO</NavLink></li>
                            <li className='nav-menu-item'><NavLink to="depensar/sobre_mi">SOBRE MI</NavLink></li>
                            <li className='nav-menu-item'><NavLink to="depensar/servicios">SERVICIOS</NavLink></li>
                            <li className='nav-menu-item'><NavLink to="depensar/contacto">CONTACTO</NavLink></li>
                            
                    </ul> 
                    
                
        </nav>  
    </header>
)

}

