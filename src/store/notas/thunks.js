import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDBh } from '../../firebase/config';
import { loadNotas } from '../../helpers';
import { addNote, deleteNote, ordernotes, setNotes, setSaving, updateNote } from './notasSlice';
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
    }
}
export const startLoadingNotas = () =>{
    return async ( dispatch, getState ) =>{

        const { uid } = getState().auth;
        const notes = await loadNotas( uid );
        dispatch ( setNotes( notes ));

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
        console.log(id)

        const Refnota = doc(  FirebaseDBh, `notasaplication/${ uid }/notes/${ id }`) ;
        await deleteDoc( Refnota );
        dispatch(deleteNote( id ));
    }
}
export const startOrderNotes = (notes) =>{
    return async (dispatch,getState) =>{
        dispatch(ordernotes(notes));

    }
    
}