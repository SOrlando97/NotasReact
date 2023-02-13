import { MDBBtnGroup, MDBRadio } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buttonorder } from '../functions';
import { Cardnota } from './';
export const Notas = ({popuponclick, popuponclickedit, deletenote,order}) => {
  const  {notes}  = useSelector( state => state.notas);
  const [priori, setpriori] = useState("")
  const [btnorder, setBtnorder] = useState();
  const cambioprio = e =>{
    setpriori(e.target.value);
    setBtnorder(e.target);
    buttonorder(btnorder,e.target);
  };
  useEffect(() => {
    order(priori)
  }, [priori])
  
  return (
    <>    
    <div className='divorderpriori'>
      <p>Orden:</p>
      <div>
      <button 
          id='alta' 
          value='alta'
          name='priori'
          className='btnorderpriori btni'
          onClick = { cambioprio }
          >Alta</button>
      <button 
          id='media' 
          value='media'
          name='priori'
          className='btnorderpriori'
          onClick = { cambioprio }
          >Media</button>
      <button 
          id='baja' 
          value='baja'
          name='priori'
          className='btnorderpriori btnd'
          onClick = { cambioprio }
          >Baja</button>
      </div>
    </div>    

    <div className="notas">      
        <div onClick={ popuponclick } className="añadir">
          <div className="icon"><i className="uil uil-plus"></i></div>
        </div>
        {
        notes?.map( nota => (          
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
