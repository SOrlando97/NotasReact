import React from 'react'
const priority = {
  baja: "./img/bullbasaur.png",
  media: "./img/psyduck.png",
  alta: "./img/charmander.png"
}
export const Cardnota = ({ nota }) => {
  return (
    <>
        <div className="caja" >
          <div className="detallesaltos">
            <p>{nota.title}</p>
            <span>{nota.description}</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="priority" src={priority[nota.priority]} alt="media" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
    </>
  )
}
