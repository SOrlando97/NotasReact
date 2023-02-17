import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { startForgotPass } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
    email: '',
  }


export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { errorMessage } = useSelector ( state => state.auth);
    const { email, onInputChange } =  useForm (formData);
    const onSubmit = ( event ) =>{
        event.preventDefault();
        dispatch (startForgotPass({ email }));
    }
  return (
    <>
        <AuthLayout>
            <form onSubmit={ onSubmit } >
            <MDBInput wrapperClass='mb-4' 
                label='Direccion de correo'  
                type='email' 
                name='email'
                value={ email }
                onChange={ onInputChange }
                size='lg'/>
            {errorMessage && errorMessage!="Correo Enviado" && <div className='alert alert-danger'>{errorMessage}</div>}
            {errorMessage=="Correo Enviado" && <div className='alert alert-success'>{errorMessage}</div>}
            <MDBBtn type='submit' className="mb-1 w-100" >Enviar Correo</MDBBtn>
            
            <div className="FormLinks">
              <Link to="/auth/login">Inicia Sesión</Link>
              <Link to="/auth/register">Registrate!</Link>
            </div>

            </form>           
        </AuthLayout>
    </>
  )
}
