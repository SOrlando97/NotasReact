import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () =>{

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email,photoURL,uid} = result.user;
        return{
            ok:true,
            displayName,email,photoURL,uid
        }

    } catch (error) {       
        
            const errorCode = error.code;
            const errorMessage = error.message;
            return{
                ok:false,
                errorMessage,
            }
        
    }

}

export const registerUser = async ({email, password, displayName}) =>{
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        await updateProfile( FirebaseAuth.currentUser,{ displayName } );
        return{
            ok:true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        let mensaje
        error.message ='Firebase: Error (auth/email-already-in-use).'? mensaje = 'Email Actualmente en Uso.': mensaje = error.message;
        
        return{
            ok: false,
            errorMessage: mensaje
        }
    }
}