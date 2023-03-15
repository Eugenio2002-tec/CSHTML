import React from 'react';
import '../StyleSheets/Seccion.css';
 
function Seccion() {
  return (
    <div className='contenedor-seccion'>
      <img className='imagen-seccion'
      src={require('../imagenes/Catálogo.png')}
      alt='Icono de Catálogo'/>
      <div className= 'contenedor-texto-seccion'>
        <p className='nombre-testimonio'>Catálogo</p>
      </div>
    </div>


  );
}

export default Seccion;