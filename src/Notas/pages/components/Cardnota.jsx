import React from 'react'
import Swal from 'sweetalert2'
import { fecha } from '../functions'
const priority = {
  baja: ["./img/bullbasaur.png","bullbasaurcaja"],
  media:["./img/psyduck.png","psyduckcaja"] ,
  alta: ["./img/charmander.png","charmandercaja"]
}
export const Cardnota = ({ nota,clickedit, deletenote}) => {  
  const deleten = ( nota ) =>{
    Swal.fire({
      title: 'Seguro?',
      text: "Si borra la nota no se podra restaurar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminarla'
    }).then((result) => {
      if (result.isConfirmed) {
        deletenote( nota );
        Swal.fire(
          'Eliminada',
          'La nota ha sido eliminada',
          'success'
        )
      }
    })
  }
  return (
    <>
        <div className={`caja ${priority[nota.priority][1]}`}>
          <div className="detallesaltos">
            <p>{nota.title}</p>
            
            {
              nota.description.length >= 260
              ?<div className='descriptionscroll'><span>{nota.description}</span></div>
              
              :<span>{nota.description}</span>
            }
            
            
          </div>
          <div className="detallesbajos">
            <span>{fecha(nota)}</span>
            <img className="priority" src={priority[nota.priority][0]} alt={nota.priority} />
            <div className="botones">
              <i onClick={ ()=> clickedit( nota ) } className="uil uil-edit-alt"></i>
              <i onClick={ ()=> deleten( nota ) }className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
    </>
  )
}
