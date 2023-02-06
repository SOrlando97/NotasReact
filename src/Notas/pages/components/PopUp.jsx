import React from 'react'
import {  MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useForm } from '../../../hooks';

export const PopUp = ({popupclose, startnewnote, titulo,formData,editnote}) => {

  const {title,description,priority,onInputChange} = useForm(formData);

  const [priori, setPriority] = useState(priority);

  const cambioprio = e =>{
    setPriority(e.target.value);
  };
  const submit = (event)=> {
      event.preventDefault();
      titulo == "Añade una nota nueva"
      ?startnewnote( title,description,priority)
      :editnote( title, description, priority )
  }
  return (
    <>
        <div className="popupbox">
        <div className="popup">
          <div className="contenido">
            <header>
                <p>{titulo}</p>
                <i onClick={ popupclose }className='uil uil-times'></i>                          
            </header>
          <form onSubmit={ submit }>
          
            <MDBInput id='title' 
                      wrapperClass='mb-4' 
                      label='Titulo' 
                      name='title'
                      value={ title }
                      onChange={ onInputChange } />
            <MDBTextArea wrapperClass='mb-4' 
                      id='description' 
                      rows='4' 
                      label='Descripcion'
                      name='description'
                      value={ description }
                      onChange={ onInputChange } />

            <p>Eliga la prioridad</p>
            <div className='seleccion'>
              <div className='opcion'>
                <input type="radio" 
                        id="baja" 
                        name="priority" 
                        value="baja"
                        checked = {priori == "baja"? true:false}
                        onChange = { cambioprio }
                        />
                <label htmlFor="baja">baja</label>
                <img className="priority" htmlFor="baja" src=".\img\bullbasaur.png" alt="baja" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" 
                        id="media" 
                        name="priori" 
                        value="media" 
                        checked = {priori == "media"? true:false}
                        onChange = { cambioprio }/>
                <label htmlFor="media">media</label>
                <img className="priority" htmlFor="media" src=".\img\psyduck.png" alt="media" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" 
                        id="alta" 
                        name="priori" 
                        value="alta" 
                        checked = {priori == "alta"? true:false}
                        onChange = { cambioprio }/>
                <label htmlFor="alta">alta</label>
                <img className="priority" htmlFor="alta" src=".\img\charmander.png" alt="alta" />
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
