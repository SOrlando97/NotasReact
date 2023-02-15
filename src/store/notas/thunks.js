import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDBh } from '../../firebase/config';
import { loadNotas } from '../../helpers';
import { orderbypriority } from '../../Notas/pages/functions';
import { addNote, changepriority, deleteNote, ordernotes, setNotes, setSaving, updateNote } from './notasSlice';
export const startAddNote = ({title,description, priority}) =>{
    return async ( dispatch, getState ) =>{
        dispatch(setSaving());
        const { uid } = getState().auth;      

        const newNote = {
            title: title,
            description: description,
            priority: priority,
            date: new Date().getTime(),

        }  
        const newDoc = doc( collection( FirebaseDBh, `notasaplication/${ uid }/notes`) );
        const setDocResp = await setDoc( newDoc, newNote);
        const id = newDoc.id;
        const date = new Date().getTime();
        dispatch (addNote({id, title, description, priority, date}));
        
        dispatch(startOrderNotes());
    }
}
export const startLoadingNotas = () =>{
    return async ( dispatch, getState ) =>{
        dispatch(setSaving());
        const { uid } = getState().auth;
        const notes = await loadNotas( uid );
        dispatch ( setNotes( notes ));

        dispatch(startOrderNotes());
    }
}
export const startEditNote = (note) =>{
    return async (dispatch, getState) =>{
        dispatch(setSaving());
        const { uid } = getState().auth;
        const notetobd = {...note};
        delete notetobd.id, notetobd.date;
        notetobd.date = new Date().getTime();

        const newDoc = doc(  FirebaseDBh, `notasaplication/${ uid }/notes/${ note.id }`) ;
        await setDoc( newDoc, notetobd,{ merge:true });
        dispatch(updateNote(note));
    }
}
export const startDeleteNote = ({id})=>{
    return async (dispatch, getState) =>{
        dispatch(setSaving());
        const { uid } = getState().auth;

        const Refnota = doc(  FirebaseDBh, `notasaplication/${ uid }/notes/${ id }`) ;
        await deleteDoc( Refnota );
        dispatch(deleteNote( id ));
    }
}
export const startchangepriority = (priority) =>{
    return async (dispatch,getState) =>{
        dispatch(changepriority(priority));
    }
}
export const startOrderNotes = () =>{
    return async (dispatch,getState) =>{
        const {orderby,notes} = getState().notas;
        const newnotes  = orderbypriority(orderby,notes);
        dispatch(ordernotes(newnotes));
    }
    
}