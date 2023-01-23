import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { logout } from "../store/auth";
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

export const loginWithEmailPass = async ({ email, password })=>{

    try {
        const resp = await signInWithEmailAndPassword ( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return{
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        let mensaje
        error.message ='Firebase: Error (auth/user-not-found).'? mensaje = 'Cuenta no Encontrada': mensaje = error.message;
        
        return{
            ok: false,
            errorMessage: mensaje
        }
    }

}
export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();
    dispath ( logout() );
}