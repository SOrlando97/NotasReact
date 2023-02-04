import React from 'react'
import { useSelector } from 'react-redux'
import { Cardnota } from './';
export const Notas = ({popuponclick}) => {
  const  {notes}  = useSelector( state => state.notas);
  return (
    <>
    <div className="notas">
        <div onClick={ popuponclick } className="añadir">
          <div className="icon"><i className="uil uil-plus"></i></div>
        </div>
        {
        notes.map( nota => (          
          <Cardnota key={nota.id} nota={ nota }/>          
        ))
        }
      </div>
    </>
  )
}
