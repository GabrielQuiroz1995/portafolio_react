import React from 'react';
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Estudios } from '../components/Estudios';
import { Inicio } from '../components/Inicio';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portafolio } from '../components/Portafolio';
import { Proyecto } from '../components/Proyecto';

export const Rutas = () => {
  return (
    <BrowserRouter>
        {/* Header y navegacion */}
        <HeaderNav></HeaderNav>
        {/* Contenido Central */}
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to ="/inicio"/>}></Route>
              <Route index path='/inicio' element={<Inicio/>}></Route>
              <Route path='/estudios' element={<Estudios/>}></Route>
              <Route path='/curriculum' element={<Curriculum/>}></Route>
              <Route path='/portafolio' element={<Portafolio/>}></Route>
              <Route path='/contacto' element={<Contacto/>}></Route>
              <Route path='/proyecto/:id' element={<Proyecto/>}></Route>
              <Route path='*' element={
                  <div>
                    <h1>Error 404</h1>
                    <span>Ruta invalida</span>
                  </div>
              }></Route>
          </Routes>
        </section>
        {/* footer */}
        <Footer></Footer>
    </BrowserRouter>
  )
}
