import React from 'react'
import {  MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useForm } from '../../../hooks';
const formData = {
  title:'',
  description:'',
}
export const PopUp = ({popupclose, startnewnote, titulo, formdir}) => {
  const {title,description,onInputChange} = useForm(formData);
  const [priority, setPriority] = useState("baja");
  const cambioprio = e =>{
    setPriority(e.target.value);
  };
  return (
    <>
        <div className="popupbox">
        <div className="popup">
          <div className="contenido">
            <header>
                <p>{titulo}</p>
                <i onClick={ popupclose }className='uil uil-times'></i>                          
            </header>
          <form onSubmit={(event)=>{ event.preventDefault();
            startnewnote( title,description,priority)}}>
          
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
                        checked = {priority == "baja"? true:false}
                        onChange = { cambioprio }
                        />
                <label htmlFor="baja">baja</label>
                <img className="priority" htmlFor="baja" src=".\img\bullbasaur.png" alt="baja" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" 
                        id="media" 
                        name="priority" 
                        value="media" 
                        checked = {priority == "media"? true:false}
                        onChange = { cambioprio }/>
                <label htmlFor="media">media</label>
                <img className="priority" htmlFor="media" src=".\img\psyduck.png" alt="media" />
              </div>              
              
              <div className='opcion'>
                <input type="radio" 
                        id="alta" 
                        name="priority" 
                        value="alta" 
                        checked = {priority == "alta"? true:false}
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
