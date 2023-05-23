import React from 'react';
import { useSelector } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Basic() {
  const cardTotalAmount = useSelector(state => state.cart.totalAmount);
   const shippingCost = 30;

  const totalAmount = cardTotalAmount + Number(shippingCost);
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Billing details</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' type='text' required />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Last name' type='text' required />
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Company name' type='text' className="mb-4" required />
                <MDBInput label='Address' type='text' className="mb-4" required />
                <MDBInput label='Email' type='text' className="mb-4" required />
                <MDBInput label='Phone' type='text' className="mb-4" required />
                <MDBTextArea label='Additional information' rows={4} className="mb-4"  />

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>{cardTotalAmount}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping Cost
                  <span>{shippingCost}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>{totalAmount}</strong></span>
                </MDBListGroupItem>
              </MDBListGroup>

              <MDBBtn>
              <Link to='/payment'>
                Make purchase</Link>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}