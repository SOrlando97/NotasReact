import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout>
          <MDBInput wrapperClass='mb-4' label='Nombre'  type='name' size='lg'/>
          <MDBInput wrapperClass='mb-4' label='Direccion de correo'  type='email' size='lg'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña'  type='password' size='lg'/>
              
          <MDBBtn className="mb-1 w-100">Registrate</MDBBtn>  
          <a href='/auth/login' >Ya tienes cuenta? Inicia Sesión</a>
      </AuthLayout>
    </>
  )
}
