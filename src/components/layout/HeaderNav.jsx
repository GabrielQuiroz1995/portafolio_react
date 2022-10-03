import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'

export const HeaderNav = () => {
  return (
    <header className='header'>

        <div className='logo'>
            <div className='cubo1 cubo'>
                <div className='cubo2 cubo'>
                    <div className='cubo3 cubo'>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive})=> isActive ? "active":""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/estudios">Estudios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Experiencia</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
