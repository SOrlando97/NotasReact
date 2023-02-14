import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Notas } from '.';
import { buttonorder } from '../functions';

export const Order = ({popuponclick, popuponclickedit, deletenote,order}) => {
    const  {notes}  = useSelector( state => state.notas);
    const  {orderby}  = useSelector( state => state.notas);
    const [priori, setpriori] = useState(orderby)
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
            <p>Ordenar:</p>
            <div>
            <button 
                id='alta' 
                value='alta'
                name='priori'
                className='btnorderpriori btnui'
                onClick = { cambioprio }
                >Alta</button>
            <button 
                id='media' 
                value='media'
                name='priori'
                className='btnorderpriori btnum'
                onClick = { cambioprio }
                >Media</button>
            <button 
                id='baja' 
                value='baja'
                name='priori'
                className='btnorderpriori btnud'
                onClick = { cambioprio }
                >Baja</button>
            </div>
            <div>
            <button 
                id='nuevas' 
                value='nuevas'
                name='priori'
                className='btnorderpriori btndi'
                onClick = { cambioprio }
                >Nuevas</button>
            <button 
                id='default' 
                value='default'
                name='priori'
                className='btnorderpriori btndm'
                onClick = { cambioprio }
                >Default</button>
            <button 
                id='viejas' 
                value='viejas'
                name='priori'
                className='btnorderpriori btndd'
                onClick = { cambioprio }
                >Viejas</button>
            </div>
        </div>
        <Notas popuponclick={ popuponclick } 
                popuponclickedit={ popuponclickedit }
                deletenote = { deletenote }
                notes = {notes} />
    </>
  )
}
