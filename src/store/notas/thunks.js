import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDBh } from '../../firebase/config';
export const startAddNote = () =>{
    return async ( dispatch, getState ) =>{

        const { uid } = getState().auth;

        const newNote ={
            title: '',
            description: '',
            priority: '',
            date: new Date().getTime(),

        }

        const newDoc = doc( collection( FirebaseDBh, `notasaplication/${ uid}/notas/notes`) );
        const setDocResp = await setDoc( newDoc, newNote);

        console.log({newDoc, setDocResp});

    }
}