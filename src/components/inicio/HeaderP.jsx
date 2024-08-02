
import { useEffect } from 'react';
import '../../styles/inicio/headerP.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export function Header() {
  // Hook de efecto para manejar la adición y eliminación de eventos
  useEffect(() => {
    // Obtener los elementos necesarios del DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuItems = document.querySelectorAll('.nav-menu-item a');

    


    // Función para alternar la visibilidad del menú
    const toggleMenuVisibility = () => {
      navMenu.classList.toggle('nav-visible');
    };

    // Función para manejar el scroll al top
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Esto asegura un scroll suave
      });

           // Ocultar el menú
           navMenu.classList.remove('nav-visible');
    };

    // Añadir el evento al botón de menú
    navToggle.addEventListener('click', toggleMenuVisibility);

    // Añadir el evento a cada enlace de menú
    navMenuItems.forEach((item) => {
      item.addEventListener('click', handleScrollToTop);
      navMenu.classList.toggle('nav-visible');
      
    });

    // Limpiar los event listeners al desmontar el componente
    return () => {
      navToggle.removeEventListener('click', toggleMenuVisibility);
      navMenuItems.forEach((item) => {
        item.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    
    <header className='header'>
      <nav id='nav'>
        <span className='logo'></span>
        <button className='nav-toggle'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <NavLink to='/inicio'>INICIO</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink to='/sobre_mi'>SOBRE MI</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink to='/servicios'>SERVICIOS</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink to='/contacto'>CONTACTO</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}