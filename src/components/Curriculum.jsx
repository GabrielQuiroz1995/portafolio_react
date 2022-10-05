import React from 'react'
import '../components/style/curriculum.css'


export const Curriculum = () => {
  return (
    <div className='contenedor-experiencia'>
        <h1 className='titulo'>Experiencia</h1>
        <div className='experiencia'>
          <h3>✨ Analista Funcional N2 • Coasin Logicalis.</h3>
          <span>Febrero 2022 – Actualidad</span>
          <p>
            -Participación en proyecto con banco de chile, en donde se toman los requerimientos de los usuarios, se informan y se resuelven.<br/>
            -Se forma parte de un equipo resolutor donde se analizan las diferentes problemáticas de banco de chile, mediante consultas SQL, Instalaciones y conexiones a bases de datos.<br/>
          </p>
        </div>
        <div className='experiencia'>
          <h3>Analista Funcional Jr en KONEXA Talent</h3>
          <span>Marzo 2021 – diciembre 2021</span>
          <p>
            -Se trabaja mediante la metodología agile SCRUM donde se colabora con un equipo para realizar entregas regulares y parciales del trabajo final, en estas entregas se enviaba la documentación del avance semanal del proyecto.<br/>
            -Se forma parte de una mesa de ayuda donde se gestiona los requerimientos de usuarios con JIRA, es aquí donde participo en el modelamiento de las bases de datos para poder gestionar y solucionar problemas mediante la utilización de SQL.<br/>
          </p>
        </div>
    </div>
  )
}
