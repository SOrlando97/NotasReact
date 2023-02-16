import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Notas } from '.';

export const Order = ({popuponclick, popuponclickedit, deletenote,order}) => {
    const  {notes}  = useSelector( state => state.notas);
    const  {orderby}  = useSelector( state => state.notas);
    const [priori, setpriori] = useState(orderby)
    const [btnorder, setBtnorder] = useState();
    const cambioprio = e =>{
        setpriori(e.target.value);
        // setBtnorder(e.target);
        // buttonorder(btnorder,e.target);
    };
    
    useEffect(() => {
        order(priori)
    }, [priori])
  return (
    <>
        <div className='divorderpriori'>
        <p>Ordenar:</p>
        <select onChange={ cambioprio }  value={ priori } name="select" className='selectpriority'>
            <option value="nuevas" >Fechas Nuevas</option>
            <option value="viejas">Fecha Viejas</option>
            <option value="alta">Prioridad Alta</option>
            <option value="media">Prioridad Media</option>
            <option value="baja">Prioridad Baja</option>
        </select>
        </div>        
        <Notas popuponclick={ popuponclick } 
                popuponclickedit={ popuponclickedit }
                deletenote = { deletenote }
                notes = {notes} />
    </>
  )
}
