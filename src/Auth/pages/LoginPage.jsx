import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange }=  useForm({
    email:'orlando@correo.com',
    password: '123456'
  });

  const onSubmit = ( event ) =>{
    event.preventDefault();
    console.log({email,password});
    dispatch (checkingAuthentication());
  }

  const onGoogleSignIn = ()=>{
    console.log ('onGoogleSign');
    dispatch (startGoogleSignIn());
  }



  return (
    <>      
        <AuthLayout>

            <form onSubmit={ onSubmit }>
              <MDBInput wrapperClass='mb-4' 
                  label='Direccion de correo'  
                  type='email' 
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  size='lg'/>
              <MDBInput wrapperClass='mb-4' 
                  label='Contraseña'  
                  type='password'
                  name='password'
                  value={ password }
                  onChange={ onInputChange }
                  size='lg'/>
                  
              <MDBBtn type='submit' className="mb-1 w-100" >Logear</MDBBtn>

              <div className="divider  align-items-center my-1">
                <p className="text-center fw-bold mx-1 mb-0">O</p>
              </div>
            </form>
              <MDBBtn onClick={onGoogleSignIn} className="mb-4 w-100" style={{backgroundColor: '#3b5998'}} >
              <MDBIcon fab icon="google" className="mx-2"/>
              Continua Con Google
              </MDBBtn>              
              <a href='/auth/register'>No tienes cuenta? registrate</a>
            
              
 
           
        </AuthLayout>
   
    </>
  )
}
