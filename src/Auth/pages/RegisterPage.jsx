import { MDBBtn,   MDBInput} from 'mdb-react-ui-kit';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startCreateUser } from '../../store/auth';
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email : '',
  password: '',
  displayName: '',
}

export const RegisterPage = () => {
  const dispatch = useDispatch();   
  const [formSubmitted, setFormSubmitted] = useState(false); 
  
  const formValidations = {

    email : [(value)=>value.includes('@'),'El correo debe tener una @'],
    password:[(value)=>value.length>= 6,'El password debe tener mas de 6 letras'],
    displayName: [(value)=>value.length>= 1,'El nombre es obligatorio'],

  }

  const {status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo ( ()=> status === ' checking' , [status])

  const { 
    displayName,email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } =  useForm( formData, formValidations);

  const onSubmit = ( event ) => {
    
    event.preventDefault();    
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    dispatch( startCreateUser(formState));

  }
  return (
    <>
      <form onSubmit={ onSubmit }>
        <AuthLayout>
              <MDBInput 
                wrapperClass='mb-4' 
                label='Nombre'  
                type='name' 
                name='displayName'
                value={ displayName }
                onChange= { onInputChange }
                size='lg'/>

                {displayNameValid && formSubmitted && <div className='diverror'><h6 className='errorregisterinput'>{displayNameValid}</h6></div>}
              <MDBInput 
                wrapperClass='mb-4' 
                label='Direccion de correo'  
                type='email' 
                name='email'
                value={ email }
                onChange= { onInputChange }
                size='lg'/>

                {emailValid && formSubmitted && <div className='diverror'><h6 className='errorregisterinput'>{emailValid}</h6></div>}
              <MDBInput 
                wrapperClass='mb-4' 
                label='Contraseña'  
                type='password' 
                name='password'
                value={ password }
                onChange= { onInputChange }
                size='lg'/>
                
                {passwordValid && formSubmitted && <div className='diverror'><h6 className='errorregisterinput'>{passwordValid}</h6></div>}
                  

              {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}  
              <MDBBtn disabled = {isCheckingAuthentication} type='submit' className="mb-1 w-100">Registrate</MDBBtn>  
              
              <Link to="/auth/login">Ya tienes cuenta? Inicia Sesión</Link>
          </AuthLayout>
      </form>
      
    </>
  )
}
