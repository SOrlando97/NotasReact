import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAddNote, startDeleteNote, startEditNote } from '../../../store/notas/thunks';
import { orderbypriority, orderbypriority2 } from './order';
import { noscroll } from './scroll';

export const functions = () => {
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
        noscroll();
        setTitle('Añade una nota nueva');
        setform({ title: '', description: '', priority: 'baja'});
        setPopupstate(true);
    };
    // Abrir popup editar nota
    const popuponclickedit = (nota) => {   
        noscroll();     
        setTitle('Editar Nota');
        setform(nota);
        setPopupstate(true);
    };
    //Cerrar Popup
    const popupoffclick = () =>{
        scroll();
        setPopupstate(false);
    };
    // borrar nota
    const deletenote = ({id}) =>{
      dispatch( startDeleteNote({id}));
    }
    //cambiar order notas
    const orderbypriori = (priori) =>{
      dispatch( startOrderNotes(orderbypriority(priori,notes)));
    }
  return (
    <div>functions</div>
  )
}
