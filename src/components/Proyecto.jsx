import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { estudios } from '../data/estudios'
import '../components/style/proyecto.css'

export const Proyecto = () => {

    const [estudiosState, setEstudiosState] = useState({});
    const params = useParams();

    useEffect(()=>{
        let datos = estudios.filter(estudio => estudio.img === params.id);
        setEstudiosState(datos[0])
    }, []);

  return (
    <div>
        <div className='presentacion'>
            <img src={"/img/"+estudiosState.img+".jpg"} alt="Cargando.."/>
            <Link to="/estudios"><img id='back' src='/img/back.png' alt='atras'/></Link>
        </div>

        {/* <h3>Tipo de cetificacion: {estudiosState.tipo}</h3>
        <h1>Titulo: {estudiosState.titulo}</h1>
        <h3>Institucion: {estudiosState.intitucion}</h3>
        <h3>Tiempo de duracion: {estudiosState.duracion}</h3> */}
    </div>
            // 'img':'AIEP-HTML',
            // 'tipo':'Curso',
            // 'titulo':'Html y Css',
            // 'intitucion':'AIEP',
            // 'duracion': "30hrs"
  )
}
