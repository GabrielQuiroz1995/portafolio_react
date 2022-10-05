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
        //react-hooks/exhausting-deps
    }, [params]);

  return (
    <div>
        <div className='presentacion'>
            <img src={"/img/"+estudiosState.img+".jpg"} alt="Cargando.."/>
            <Link to="/estudios"><img id='back' src='/img/back.png' alt='atras'/></Link>
        </div>
    </div>
  )
}
