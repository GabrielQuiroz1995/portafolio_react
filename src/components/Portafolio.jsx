import React from 'react'
import '../components/style/portafolio.css'

export const Portafolio = () => {
  return (
    <div className='portafolio'>
      <h1 className='titulo'>Portafolio</h1>
      <h3>Pronto se subirán los siguientes proyectos:</h3><br/>
      <p className='parrafo'>
        1-. Clon de una red social montada con ReactJS donde se aplican distintos Hook, programación funcional, redux y algunos otros.<br/>
        2-. CRUD con TypeScript, aplicando programación orientada a objetos, trabajando con clases, herencia, interfaces y tipos de datos.<br/>
        3-. Consumo de API rest aplicando distinto conceptos como promesas, programación asíncrona, fetch, librerías como axio, entre otros.<br/>
        </p>
    </div>
  )
}
