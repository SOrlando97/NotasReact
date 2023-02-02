import React from 'react'
import {  MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
export const PopUp = ({popupclose, titulo,formdir}) => {
  return (
    <>
        <div className="popupbox">
        <div className="popup">
          <div className="contenido">
            <header>
                <p>{titulo}</p>
                <i onClick={ popupclose }className='uil uil-times'></i>                          
            </header>
          <form>
            <MDBInput id='title' wrapperClass='mb-4' label='Titulo' />
            <MDBTextArea wrapperClass='mb-4' id='description' rows='4' label='Descripcion' />
            <p>Eliga la prioridad</p>
            <div className='seleccion'>
              <div className='opcion'>
                <input type="radio" id="baja" name="prioridad" value="baja" />
                <label htmlFor="baja">baja</label>
                <img className="prioridad" htmlFor="baja" src=".\img\bullbasaur.png" alt="baja" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" id="media" name="prioridad" value="media" />
                <label htmlFor="media">media</label>
                <img className="prioridad" htmlFor="media" src=".\img\psyduck.png" alt="media" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" id="alta" name="prioridad" value="alta" />
                <label htmlFor="alta">alta</label>
                <img className="prioridad" htmlFor="alta" src=".\img\charmander.png" alt="alta" />
              </div>              
              
            </div>
            
            <MDBBtn type='submit' className='mb-4' block>
              Aceptar
            </MDBBtn>            
          </form>

          </div>
        </div>
      </div>
    </>
  )
}
