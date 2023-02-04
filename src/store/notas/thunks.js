import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDBh } from '../../firebase/config';
import { addNote } from './notasSlice';
export const startAddNote = ({title,description, priority}) =>{
    return async ( dispatch, getState ) =>{        
        const { uid } = getState().auth;        
        dispatch (addNote({title,description,priority}));
        const newNote = {
            titulo: title,
            description: description,
            priority: priority,
            date: new Date().getTime(),

        }      
        const newDoc = doc( collection( FirebaseDBh, `notasaplication/${ uid }/notes`) );
        const setDocResp = await setDoc( newDoc, newNote);


        console.log({newDoc, setDocResp});
        

    }
}