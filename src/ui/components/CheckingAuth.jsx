import React from 'react'
import { MDBCard,MDBCardBody, MDBContainer,  MDBCol,  MDBRow,MDBSpinner } from 'mdb-react-ui-kit';

export const CheckingAuth = () => {
  return (
    <>
        <div className='maxconteinerform'>
            <MDBContainer>
            <img src='/img/Pokemon-cropped.svg' alt='Pikachu' className='imgpikachu'/>
              <MDBCard className='card'>

                <MDBRow className='g-0 d-flex align-items-center'>                

                  <MDBCol md='15'>

                    <MDBCardBody>
              
                    <MDBSpinner grow className='mx-2' style={{ width: '15rem', height: '15rem' }} color='warning'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                    <h1>Loading...</h1>

                  </MDBCardBody>

                  </MDBCol>

                </MDBRow>

              </MDBCard>
            </MDBContainer>
          </div>
        
    </>
  )
}
