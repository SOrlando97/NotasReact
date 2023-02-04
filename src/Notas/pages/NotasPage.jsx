import { useDispatch } from 'react-redux';
import { useState,} from 'react';
import { startAddNote } from '../../store/notas/thunks';
import { PopUp } from './components/PopUp'
import { Notas } from './components/Notas';

export const NotasPage = () => {
    const [popupstate, setPopupstate] = useState(false);
    const [title, setTitle] = useState('');
    
    const dispatch = useDispatch ();

    const popuponclick = () => {
        setTitle('Añade una nota nueva')
        setPopupstate(true);
    };
    const popupoffclick = () =>{
      setPopupstate(false);
    };
    const onClickNewNote = (title,description,priority) =>{
      dispatch (startAddNote({title,description,priority}));
      popupoffclick();
    };
    return (
      <>
        {popupstate && <PopUp popupclose={popupoffclick}
                              startnewnote={ onClickNewNote }
                              titulo={title}/> }
        <Notas popuponclick={ popuponclick }/>
      </>
      
    )
}
