import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <>
      
        <AuthLayout tittle="login">
          
            <MDBCol col='4' md='6'>

              <MDBInput wrapperClass='mb-4' label='Direccion de correo'  type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Contraseña'  type='password' size="lg"/>

              <MDBBtn className="mb-4 w-100" size="lg">Logear</MDBBtn>

              <div className="divider  align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">O</p>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
              <MDBIcon fab icon="google" className="mx-2"/>
              Continua Con Google
              </MDBBtn>              
              <a href='/auth/register'>No tienes cuenta? registrate</a>
            </MDBCol>
           
        </AuthLayout>
   
    </>
  )
}
