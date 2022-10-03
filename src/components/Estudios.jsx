import React from 'react'
import { estudios } from '../data/estudios'
import '../components/style/estudios.css'
import { Link } from "react-router-dom";

export const Estudios = () => {
  return (
    <div>
      <h1 className='titulo'>Estudios</h1>
      <section className='estudios'>
        {
          estudios.map((estudio,indice) => (
            <article key={indice} className="item">
                <div className='mask'>
                <Link to={"/proyecto/"+estudio.img}><img src={"/img/"+estudio.img+".jpg"} alt="Cargando.."/></Link>
                </div>
                <span>Tipo de certificacion: {estudio.tipo}</span>
                {/* <h1>{estudio.tipo}</h1> */}
                <h2><Link to={"/proyecto/"+estudio.img}>{estudio.titulo}</Link></h2>
                <h3>{estudio.intitucion}, tiempo de duracion: {estudio.duracion}</h3>
            </article>
          ))
        }
      </section>
    </div>
  )
}
