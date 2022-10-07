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
            src="https://media-exp1.licdn.com/dms/image/D4E03AQEZarA2ALh07A/profile-displayphoto-shrink_200_200/0/1663038767457?e=1670457600&v=beta&t=r3sDS2t3ynKmTc0sGS6B05vww5ll3nQDHgZqXbeHqM0"
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
            👋 Hola, soy Gabriel Quiroz Analista Programador de Valparaíso de
            Chile.
          </h1>
          <h2>
            Curse estudios tecnicos superiores en INACAP,
            continué mi formación de forma autodidacta  en distintas plataformas y bootcamp. <br/><br/>

            Actualmente trabajo en el area de soporte como analista funcional y
            aspiro algun día a formar parte de un equipo de desarrollo.
            <span className="span-3">
            <br/><br/>
            Me encanta el mundo del desarrollo web y las tecnologias en general, en mis ratos libre realizo deportes y me entrentengo con algunos videojuegos.
            </span>
            <br />
          </h2>
          <h1 className="titulo">Skill</h1>
          <p className="skill">
          ✨ HTML5, CSS, JavaScript, ReactJS, TypeScript, GitHub, Git, NodeJS
          </p>
          <h1 className="titulo">Experiencia</h1>
          <div className="experiencia">
            <h3>⚡️ Analista Funcional N2 • Coasin Logicalis.</h3>
            <p>
            <span>Febrero 2022 – Actualidad</span><br/>
              Participacion en equipo resolutor donde se analizan las
              diferentes problemáticas de banco de chile, mediante consultas
              SQL, Instalaciones y conexiones a bases de datos.
              <br />
            </p>
          </div>
          <div className="experiencia">
            <h3>⚡️ Analista Funcional Jr en KONEXA Talent</h3>
            <p>
            <span>Marzo 2021 – diciembre 2021</span><br/>
              Formo parte de una mesa de ayuda donde se gestiona los
              requerimientos de usuarios con JIRA, participo en el
              modelamiento de las bases de datos para poder gestionar y
              solucionar problemas mediante la utilización de SQL server.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
