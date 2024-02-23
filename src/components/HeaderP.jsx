import '../styles/headerP.css' 
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
                
                    <a href="" className="logo">Logo</a>
                    <button className='nav-toggle'>
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className='nav-menu'>
                            <li className='nav-menu-item'>Texto 1</li>
                            <li className='nav-menu-item'>Texto 2</li>
                            <li className='nav-menu-item'>Texto 3</li>
                            <li className='nav-menu-item'>Texto 4</li>
                            
                    </ul> 
                
        </nav>  
    </header>
)

}