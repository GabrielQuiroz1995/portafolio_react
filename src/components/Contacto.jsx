import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style/contacto.css'

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4ppcyl', 'template_v2q3436', e.target, 'aG16uleZG9XNLGPyN')
      .then((result) => {
          alert("Mensaje enviado correctamente, Saludos !!");
      }, (error) => {
          alert("Error: "+ error +" al enviar mensaje, estoy trabajando en ello, Saludos !!");
      });
  };

  return (
    <div className="container">
        <h1 className="titulo contacto">Contacto</h1>
        <form className="contact" ref={form} onSubmit={sendEmail}>
            <input className='input' type="text" name="nombre" placeholder="Nombre" required/>
            <input className='input' type="email" name="email" placeholder="Email" required/>
            <textarea className='input' name="motivo" placeholder="Motivo de contacto" required/>
            <input id="btn" type="submit" value="Enviar"/>
      </form>
  </div>
  )
};
