import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cardnota } from './';
export const Notas = ({popuponclick, popuponclickedit, deletenote,order}) => {
  const  {notes}  = useSelector( state => state.notas);
  const [priori, setpriori] = useState('baja')
  const cambioprio = e =>{
    setpriori(e.target.value);
  };
  useEffect(() => {
    order(priori)
  }, [priori])
  
  return (
    <>
    <p>Seleccione el ordenamiento de las notas</p>
    <select name="priori" onChange = { cambioprio } defaultValue='seleccione'>
      <option disabled value='seleccione'>--Seleccione--</option>
      <option name='priori'value='baja'>Baja</option>
      <option name='priori'value="media">Media</option>
      <option name='priori' value="alta">Alta</option>
    </select>

    <div className="notas">      
        <div onClick={ popuponclick } className="añadir">
          <div className="icon"><i className="uil uil-plus"></i></div>
        </div>
        {
        notes.map( nota => (          
          <Cardnota key={nota.id} 
                    nota={ nota }
                    clickedit={ popuponclickedit }
                    deletenote= { deletenote } />          
        ))
        }
      </div>
    </>
  )
}
