import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'

export const HeaderNav = () => {

    useEffect(() => {
        document.title = "Portafolio GabrielDev"
     }, []);

  return (
    
    <header className='header'>
        <title>Portafolio GQDev</title>
        <div className='logo'>
            <h2 className='title-logo'>Portafolio</h2>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive})=> isActive ? "active":""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/estudios">Estudios</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/curriculum">Experiencia</NavLink>
                </li> */}
                <li>
                    <NavLink to="/portafolio">Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
