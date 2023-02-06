import React from 'react'
const priority = {
  baja: "./img/bullbasaur.png",
  media: "./img/psyduck.png",
  alta: "./img/charmander.png"
}
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
export const Cardnota = ({ nota,clickedit }) => {  
  const fecha = ()=>{
    const fechita = new Date(nota.date);
    const mes = meses[fechita.getMonth()];
    const año = fechita.getFullYear();
    const dia = fechita.getDate();
    return `${dia}/${mes}/${año}`;
  }
  fecha();
  return (
    <>
        <div className="caja" >
          <div className="detallesaltos">
            <p>{nota.title}</p>
            <span>{nota.description}</span>
          </div>
          <div className="detallesbajos">
            <span>{fecha()}</span>
            <img className="priority" src={priority[nota.priority]} alt={nota.priority} />
            <div className="botones">
              <i onClick={ ()=> clickedit( nota ) } className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
    </>
  )
}
