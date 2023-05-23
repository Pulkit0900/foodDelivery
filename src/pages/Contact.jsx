import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import img1 from '../assets/images/contact-1.jpg'
import img2 from '../assets/images/contact-2.jpg'
import img3 from '../assets/images/contact-3.jpg'
import img4 from '../assets/images/contact-4.jpg'
import '../styles/contact.css'

export default function Contact() {
  return (
    
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={img1}
            alt='...'
            position='top'
            className='imgAll'
          />
          <MDBCardBody>
            <MDBCardText>
            Our Most trusted and 5 star rated delivery partner who deliver food in limited time.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={img2}
            alt='...'
            position='top'
            className='imgAll'
          />
          <MDBCardBody>
            <MDBCardText>
            Our Most trusted and 5 star rated delivery partner who deliver food in limited time.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={img3}
            alt='...'
            position='top'
            className='imgAll'
          />
          <MDBCardBody>
            <MDBCardText>
            Our Most trusted and 5 star rated delivery partner who deliver food in limited time.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={img4}
            alt='...'
            position='top'
            className='imgAll'
          />
          <MDBCardBody>
            <MDBCardText>
            Our Most trusted and 5 star rated delivery partner who deliver food in limited time.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}