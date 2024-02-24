import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { addServiceLocation as addServiceLocationApi } from '../../services/adminService'
import { useNavigate } from 'react-router-dom';
function AddServiceLocation() {

    const [adrLine1, setAdrLine1] = useState('')
    const [adrLine2, setAdrLine2] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const navigate = useNavigate()
  
    const addServiceLocation = async () => {
      if (adrLine1.length == '') {
        toast.error('Please enter address')
      } 
     else if (city.length == '') {
        toast.error('Please enter city')
      } 
     else  if(zipCode.length == '') {
        toast.error('Please enter zip code')
      } 
      else {
        const response = await addServiceLocationApi(
            adrLine1,
            adrLine2,
            city,'Maharashtra','India',zipCode
        )
        toast.success('Service location added successfully')
       navigate('/ServiceLocations')
        console.log(response);
      }
    }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Add Service Location</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Mobile Number' id='formControlLg' type='number' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Licence Number' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg"/>
              
            
            <div className='mb-3'>
              <label htmlFor=''>Address Line1</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setAdrLine1(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Address Line2</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setAdrLine2(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>City</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setCity(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Zip Code</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setZipCode(e.target.value)
                }}
              />
            </div>
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={addServiceLocation}>Add Service Location</button>




            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default AddServiceLocation;