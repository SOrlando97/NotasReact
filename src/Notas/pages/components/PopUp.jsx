import React from 'react'
import {  MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useForm } from '../../../hooks';

export const PopUp = ({popupclose, startnewnote, titulo,formData,editnote}) => {
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const formValidations = {
    title : [(value)=>value.length<= 50,'el titulo no debe ser tan largo'],
    //description:[(value)=>value.length<= 300,'La descripcion debe ser menor a 300 caracteres'],
  }
  const {title,description,priority,isFormValid,titleValid,descriptionValid,onInputChange} = useForm(formData,formValidations);

  const [priori, setPriority] = useState(priority);

  const cambioprio = e =>{
    setPriority(e.target.value);
  };
  const submit = (event)=> {
      event.preventDefault();
      setFormSubmitted(true);
      if ( !isFormValid ) return;
      titulo == "Añade una nota nueva"
      ?startnewnote( title,description,priori)
      :editnote( formData.id,title, description, priori )
  }
  
  return (
    <>
        <div className="popupbox noscroll ">
        <div className="popup ">
          <div className="contenido animate__animated animate__fadeIn">
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
                      onChange={ onInputChange } 
                      />
            {titleValid && formSubmitted && <div className='diverror'><h6 className='errorregisterinput'>{titleValid}</h6></div>}
            <MDBTextArea wrapperClass='mb-4' 
                      id='description' 
                      rows='4' 
                      label='Descripcion'
                      name='description'
                      value={ description }
                      onChange={ onInputChange } />
            {descriptionValid && formSubmitted && <div className='diverror'><h6 className='errorregisterinput'>{descriptionValid}</h6></div>}
            <p>Eliga la prioridad</p>
            <div className='seleccion'>
              <div className='opcion'>
                <input type="radio" 
                        id="baja" 
                        name="priori" 
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
