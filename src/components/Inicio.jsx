import React from "react";
import { Link } from "react-router-dom";
import "./style/inicio.css";

export const Inicio = () => {
  return (
    <div className="content">
    <h1 className="titulo">Sobre mi ✨</h1>
    <div className="home">
      <div className="img">
        <img alt="Cargando..." src="https://media-exp1.licdn.com/dms/image/D4E03AQEZarA2ALh07A/profile-displayphoto-shrink_200_200/0/1663038767457?e=1670457600&v=beta&t=r3sDS2t3ynKmTc0sGS6B05vww5ll3nQDHgZqXbeHqM0"></img>
        <h4>Front-End Dev</h4>
        <div className="redes">
          <img className="icons" src="../img/icons/in.png" alt="instagram"></img>
          <img className="icons" src="../img/icons/li.png" alt=""></img>
          <img className="icons" src="../img/icons/contacto.png" alt=""></img>
        </div>
      </div>
      <div className="text">
        <h1>
          👋 Hola, soy Gabriel Quiroz Analista Programador de Valparaíso de
          Chile.
        </h1>
        <h2>
          Actualmente trabajo en el area de soporte como analista funcional y
          aspiro algun día a formar parte de un equipo de desarrollo.
          <br />
          <strong>Mis herramientas preferidas son JavaScript y ReactJS.</strong>
        </h2>
        <p>
          Estoy en
          <a
            href="https://www.linkedin.com/in/gabriel-quiroz-ponce-9320691b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Linkedin
          </a>{" "}
          ,{" "}
          <a
            href="https://www.instagram.com/1.9.9.5.shhh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          o tambien puedes contactarme directamente.{" "}
          <Link id="contacto" to="/contacto">
            Contacto
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};
