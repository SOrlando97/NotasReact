import React from 'react'
import { useSelector } from 'react-redux';
import { Cardnota, Cardnotealone } from './';
export const Notas = ({popuponclick, popuponclickedit, deletenote,notes}) => {
  const  {isSaving}  = useSelector( state => state.notas);  
  
  return (
    <>      
    <div className="notas"> 
    
        <div onClick={ popuponclick } className="añadir">
          <div className="icon"><i className="uil uil-plus"></i></div>
        </div> 
      {
        notes.length == 0
        ? (!isSaving && <Cardnotealone title={"Soledad"} description={"Este lugar está muy solo"}/>)
        :notes?.map( nota => (          
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
