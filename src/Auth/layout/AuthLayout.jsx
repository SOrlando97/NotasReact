import {  MDBContainer,  MDBCol,  MDBRow} from 'mdb-react-ui-kit';
export const AuthLayout = ({children, title=""}) => {
  return (
    <>
        <div id='contenedor'>
            <MDBContainer fluid className="p-3 my-5">
                <MDBRow>

                <MDBCol col='10' md='5'>
                    <img src='/img/Pokemon.svg' className="img-fluid" alt="Pikachu imagen"/>
                </MDBCol>
            
                {children}

                </MDBRow>

            </MDBContainer>
        </div>
    </>
  )
}
