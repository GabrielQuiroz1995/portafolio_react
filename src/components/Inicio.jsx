import React from "react";
import { Link } from "react-router-dom";
import "./style/inicio.css";

export const Inicio = () => {
  return (
    <div className="content">
      <h1 className="titulo inicio">Sobre mi ✨</h1>
      <div className="home">
        <div className="img">
          <img
            className="portada"
            alt="Cargando..."
            src="https://media.licdn.com/dms/image/D4E03AQHi3-6AhlaSPg/profile-displayphoto-shrink_200_200/0/1671453746204?e=1677110400&v=beta&t=0mDAnNzLfWrzVCEdXjaXxMb52JokjQcgbXI4wN0-2OY"
          ></img>
          <h4>Front-End Dev</h4>
          <div className="redes">
              <a href="https://www.instagram.com/1.9.9.5.shhh/" target="_blank" rel="noopener noreferrer">
                <img
                className="icons"
                src="../img/icons/in.png"
                alt="instagram"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-quiroz-ponce-9320691b9" target="_blank" rel="noopener noreferrer">
                <img className="icons" src="../img/icons/li.png" alt=""></img>
              </a>
            <Link to="/contacto">
              <img className="icons" src="../img/icons/contacto.png" alt=""></img>
            </Link>
          </div>
        </div>
        <div className="text">
          <h1>
            👋 Hola, soy Gabriel Quiroz Analista Programador de Valparaíso, Chile.
          </h1>
          <h2>
            Cursé estudios técnicos superiores en INACAP y luego
            continué mi formación de manera autodidacta en plataformas digitales como udemy, platzi, bootcamp, entre otras. <br/><br/>

            Actualmente, trabajo en el área de soporte como Analista funcional y tengo la
            aspiración de lograr en un futuro formar parte de un equipo de desarrollo.
            <br/>
            <hr/>
          </h2>
          <h1 className="titulo">Skill</h1>
          <p className="skill">
          ✨ JavaScript, Java, ReactJS, TypeScript, GitHub, Git, NodeJS, MongoDB, SQL
          </p>
          <h1 className="titulo">Experiencia</h1>
          <div className="experiencia">
            <h3>⚡️ Analista Funcional N2 • Coasin Logicalis.</h3>
            <p>
            <span>Febrero 2022 – Actualidad</span><br/>
            • Documentación técnica de requerimientos funcionales según estándares de la empresa.<br/>
            • Utilización de metodologías agiles, Scrum.<br/>
            • Control de versiones con Git.<br/>
            • Mantención al código de los productos generados por la empresa, utilizando lenguajes tales como 
            Java, JavaScript (ReactJS), CSS, entre otros
              <br />
            </p>
          </div>
          <div className="experiencia">
            <h3>⚡️ Desarrollador Full-Stack • Freelance</h3>
            <p>
            <span>Marzo 2019 – Actualidad</span><br/>
            • Red social y API rest, utilizando; ReactJS / NodeJS / Express / MongoDB.<br/>
            • Landing page estática, utilizando; tailwindCSS / JavaScript / Html5<br/>
            • Administración de libros, utilizando: JAVA y MySQL.<br/>
            • E-commerce, utilizando; ReactJS / SASS / JAVA.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
