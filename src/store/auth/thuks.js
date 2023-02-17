import { async } from "@firebase/util";
import { forgotpassword, loginWithEmailPass, logoutFirebase, registerUser, singInWithGoogle, } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./"


export const startGoogleSignIn = () =>{
    return async (dispatch ) =>{
        dispatch (chekingCredentials());
        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch ( logout( result ) )

        dispatch( login( result ) )
    }
}
export const  startCreateUser = ({ email, password , displayName}) =>{
    return async ( dispatch ) =>{

        dispatch (chekingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUser({ email, password, displayName });
        
        if ( !ok ) return dispatch( logout({ errorMessage }));

        dispatch( login({ uid, displayName, email, photoURL }));
    }
}
export const startLoginEmailPass =({ email, password }) =>{
    return async ( dispatch )=>{

        dispatch ( chekingCredentials());

        const resp = await loginWithEmailPass({ email, password });

        if( !resp.ok) return dispatch ( logout ( resp));
        dispatch ( login ( resp ))

    }
}
export const startLogout =()=>{
    return async ( dispatch ) =>{
        await logoutFirebase ();
        dispatch( logout({}));
    }
}
export const startForgotPass =({email})=>{
    return async ( dispatch ) =>{
        const {errorMessage} = await forgotpassword({email})
        return dispatch( logout({ errorMessage }));
    }
}