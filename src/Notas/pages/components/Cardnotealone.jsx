import React from 'react'

export const Cardnotealone = ({title,description}) => {
  return (
    <>
        <div className="caja cubone">
          <div className="detallesaltos">
            <p>{title}</p>
            <span>{description}</span>
          </div>
          <div className="detallesbajos">
            <span>???</span>
            <img className="priority" src="/img/cubone.png" alt="cubone" />
          </div>
        </div>
    </>
  )
}
