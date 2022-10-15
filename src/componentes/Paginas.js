
import React from 'react';
import {  Route,Routes } from "react-router-dom";
import Historial from './Historial';
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";
import Puntuanos from './Puntuanos';


export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/productos" element={<ProductosLista/>} />
                <Route path= "/rating" element ={<Puntuanos/>}/>
                <Route path= "/historial" element ={<Historial/>}/>

            </Routes>
        </section>
    )
}