import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
import { useForm } from '../../hooks';
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {

  const formData = {
    email : 'orlando@correo.com',
    password: '123456',
    displayName: 'Orlando',
  }
  

  const formValidations = {

    email : [(value)=>value.includes('@'),'El correo debe tener una @'],
    password:[(value)=>value.length>= 6,'El password debe tener mas de 6 letras'],
    displayName: [(value)=>value.length>= 1,'El nombre es obligatorio'],

  }

  const { 
    displayName,email, password, onInputChange, formState,
    inFormValid, displayNameValid, emailValid, passwordValid,
  } =  useForm( formData, formValidations);

  const onSubmit = ( event ) => {
    
    event.preventDefault();
    console.log ( formState );

  }
  const emailerror = 'a'
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

                {displayNameValid && <div className='diverror'><h6 className='errorregisterinput'>{displayNameValid}</h6></div>}
              <MDBInput 
                wrapperClass='mb-4' 
                label='Direccion de correo'  
                type='email' 
                name='email'
                value={ email }
                onChange= { onInputChange }
                size='lg'/>

                {emailValid && <div className='diverror'><h6 className='errorregisterinput'>{emailValid}</h6></div>}
              <MDBInput 
                wrapperClass='mb-4' 
                label='Contraseña'  
                type='password' 
                name='password'
                value={ password }
                onChange= { onInputChange }
                size='lg'/>
                
                {passwordValid && <div className='diverror'><h6 className='errorregisterinput'>{passwordValid}</h6></div>}
                  
              <MDBBtn type='submit' className="mb-1 w-100">Registrate</MDBBtn>  
              <a href='/auth/login' >Ya tienes cuenta? Inicia Sesión</a>
          </AuthLayout>
      </form>
      
    </>
  )
}
