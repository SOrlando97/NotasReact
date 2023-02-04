import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDBh } from '../../firebase/config';
import { loadNotas } from '../../helpers';
import { addNote, setNotes } from './notasSlice';
export const startAddNote = ({title,description, priority}) =>{
    return async ( dispatch, getState ) =>{        
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
        dispatch (addNote({id,title,description,priority}));
    }
}
export const startLoadingNotas = () =>{
    return async ( dispatch, getState ) =>{

        const { uid } = getState().auth;
        const notes = await loadNotas( uid );
        dispatch ( setNotes( notes ));

    }
}