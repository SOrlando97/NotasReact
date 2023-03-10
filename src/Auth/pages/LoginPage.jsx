import { MDBBtn,  MDBIcon,  MDBInput} from 'mdb-react-ui-kit';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginEmailPass } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: ''
}
export const LoginPage = () => {

  const { status, errorMessage } = useSelector ( state => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } =  useForm (formData);

  const isAuthenticating = useMemo ( () => status === 'checking', [status] );

  const onSubmit = ( event ) =>{
    event.preventDefault();
    dispatch (startLoginEmailPass({ email, password}));
  }

  const onGoogleSignIn = ()=>{
    dispatch (startGoogleSignIn());
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
              <MDBInput wrapperClass='mb-4' 
                  label='Contraseña'  
                  type='password'
                  name='password'
                  value={ password }
                  onChange={ onInputChange }
                  size='lg'/>
              {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}    
              <MDBBtn disabled= {isAuthenticating} type='submit' className="mb-1 w-100" >Logear</MDBBtn>

              <div className="divider  align-items-center my-1">
                <p className="text-center fw-bold mx-1 mb-0">O</p>
              </div>
            </form>
              <MDBBtn disabled= {isAuthenticating} onClick={onGoogleSignIn} className="mb-4 w-100" style={{backgroundColor: '#3b5998'}} >
              <MDBIcon fab icon="google" className="mx-2"/>
              Continua Con Google
              </MDBBtn>
              <div className="FormLinks">
                <Link to="/auth/register">No tienes cuenta? registrate</Link>
                <Link to="/auth/forgotpass">Olvidaste tu contraseña?</Link>
              </div>            
              
        </AuthLayout>
   
    </>
  )
}
