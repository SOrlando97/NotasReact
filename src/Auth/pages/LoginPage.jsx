import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <>      
        <AuthLayout tittle="login">


              <MDBInput wrapperClass='mb-4' label='Direccion de correo'  type='email'/>
              <MDBInput wrapperClass='mb-4' label='Contraseña'  type='password'/>
                  
              <MDBBtn className="mb-1 w-100">Logear</MDBBtn>

              <div className="divider  align-items-center my-1">
                <p className="text-center fw-bold mx-1 mb-0">O</p>
              </div>

              <MDBBtn className="mb-4 w-100"style={{backgroundColor: '#3b5998'}}>
              <MDBIcon fab icon="google" className="mx-2"/>
              Continua Con Google
              </MDBBtn>              
              <a href='/auth/register'>No tienes cuenta? registrate</a>
 
           
        </AuthLayout>
   
    </>
  )
}
