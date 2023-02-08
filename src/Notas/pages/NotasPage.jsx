import { useDispatch, useSelector } from 'react-redux';
import { useState,} from 'react';
import { startAddNote, startDeleteNote, startEditNote, startOrderNotes } from '../../store/notas/thunks';
import { PopUp } from './components/PopUp'
import { Notas } from './components/Notas';
import { orderbypriority } from './functions/order';

export const NotasPage = () => {
    const [form, setform] = useState({title : '', description : '', priority: "baja" });
    const  {notes}  = useSelector( state => state.notas);
    const [popupstate, setPopupstate] = useState(false);
    const [title, setTitle] = useState('');    
    const dispatch = useDispatch ();
    //Boton popup Formulario Nueva nota
    const onClickNewNote = (title,description,priority) =>{
        dispatch (startAddNote({title,description,priority}));
        popupoffclick();
    };
    //Boton popup Formulario editar nota ----------- no hecho
    const onClickEditNote = (id,title, description, priority) =>{
      dispatch (startEditNote({id,title,description,priority}))
      popupoffclick();
    }
    // Abrir popup para nueva nota
    const popuponclick = () => {
        setTitle('Añade una nota nueva');
        setform({ title: '', description: '', priority: 'baja'});
        setPopupstate(true);
    };
    // Abrir popup editar nota
    const popuponclickedit = (nota) => {        
        setTitle('Editar Nota');
        setform(nota);
        setPopupstate(true);
    };
    //Cerrar Popup
    const popupoffclick = () =>{
        setPopupstate(false);
    };
    // borrar nota
    const deletenote = ({id}) =>{
      dispatch( startDeleteNote({id}));
    }
    const orderbypriori = (priori) =>{
      dispatch( startOrderNotes(orderbypriority(priori,notes)));
    }
    
    return (
      <>
        {popupstate && <PopUp popupclose={ popupoffclick }
                              startnewnote={ onClickNewNote }
                              editnote={onClickEditNote}
                              titulo={title}
                              formData={form}/> }
        <Notas popuponclick={ popuponclick } 
                popuponclickedit={ popuponclickedit }
                deletenote = { deletenote }
                order = { orderbypriori }/>
      </>      
    )
}
