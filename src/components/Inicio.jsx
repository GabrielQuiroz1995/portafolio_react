import React from "react";
import { Link } from "react-router-dom";
import "./style/inicio.css";

export const Inicio = () => {
  return (
    <div className="home">
        <h1>👋 Hola, soy Gabriel Quiroz
          Analista Programador de Valparaíso de Chile.
        </h1> 
        <h2>Actualmente trabajo en el
        area de soporte como analista funcional y aspiro a formar parte de un
        equipo de desarrollo. En mi tiempo libre disfruto del deporte, los
        juegos de mesa y la construcción de proyectos personales.
        <br />
        <strong>Mis herramientas preferidas son JavaScript y ReactJS.</strong>
        </h2>
        <p>
          Estoy en
          <a href="https://www.linkedin.com/in/gabriel-quiroz-ponce-9320691b9" target="_blank" rel="noopener noreferrer">
            {" "}
            Linkedin
          </a>{" "}
          , <a href="https://www.instagram.com/1.9.9.5.shhh/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {" "} o tambien puedes contactarme directamente. <Link id="contacto" to="/contacto">Contacto</Link>
        </p>
    </div>
  );
};
