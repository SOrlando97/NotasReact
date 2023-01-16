import { chekingCredentials } from "./"

export const checkingAuthentication = ( email, password ) => {

    return async ( dispatch ) =>{

        dispatch ( chekingCredentials());

    }
}

export const startGoogleSignIn = () =>{
    return async (dispatch ) =>{
        dispatch (chekingCredentials());
    }
}