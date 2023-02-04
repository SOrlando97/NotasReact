import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDBh } from "../firebase/config";

export const loadNotas = async ( uid = '') => {
  
    if (!uid) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDBh,`notasaplication/${uid}/notes` );
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach( doc =>{
        notes.push({id:doc.id,...doc.data()});
    });
    return notes;

}