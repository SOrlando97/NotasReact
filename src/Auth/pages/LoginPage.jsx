import {  MDBContainer,  MDBCol,  MDBRow,  MDBBtn,  MDBIcon,  MDBInput,  MDBCheckbox} from 'mdb-react-ui-kit';
export const LoginPage = () => {
  return (
    <>
    <div id='contenedor'>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>

          <MDBCol col='10' md='5'>
            <img src='/img/Pokemon.svg' className="img-fluid" alt="Pikachu imagen"/>
          </MDBCol>

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

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
            
    </>
  )
}
