import {  MDBCard,MDBCardBody, MDBContainer,  MDBCol,  MDBRow} from 'mdb-react-ui-kit';
export const AuthLayout = ({children}) => {
  return (
    <>          
          <div className='maxconteinerform animate__animated animate__bounceIn' >
            <MDBContainer>
            <img src='/img/Pokemon-cropped.svg' alt='Pikachu' className='imgpikachu'/>
              <MDBCard className='card'>

                <MDBRow className='g-0 d-flex align-items-center'>                

                  <MDBCol md='15'>

                    <MDBCardBody>
              
                      {children}

                  </MDBCardBody>

                  </MDBCol>

                </MDBRow>

              </MDBCard>
            </MDBContainer>
          </div>
    </>
  )
}