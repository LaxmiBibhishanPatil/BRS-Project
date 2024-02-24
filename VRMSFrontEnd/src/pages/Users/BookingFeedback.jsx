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
  MDBCheckbox,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUrl, log } from '../../utils/utils'
function BookingFeedback() {

  const bookingId = sessionStorage.getItem("bookingId");

  const [bookingFeedback, setBookingFeedback] = useState('');
  const [rating , setRating] = useState("*");
  


  const navigate = useNavigate()

  const addFeedBackHandler = ()=>{
    if (bookingFeedback.length == '') {
        toast.error('Please enter feedback')
    }
    else if (rating === '') {
        toast.error('Please enter rating')
    } 
    else {
    const addFeedbackObj = { bookingId, bookingFeedback, rating}
    console.log(addFeedbackObj);
    
    axios.put(createUrl('/booking/addfeedbacktobooking'),addFeedbackObj)
    .then(response => {
       
        console.log('Response data:', response.data);
        toast.success('Feedback added successfully')
        navigate('/myBooking')
    })
    .catch(error => {
        toast.error("Feedback can't be added")
        console.error('An error occurred:', error);
    });
    sessionStorage.removeItem('bookingId');
}
  }
  

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Add Feedback</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

            
              <MDBTextArea wrapperClass='mb-4 w-100' label='Enter Feedback' id='formControlLg' type='text-area' size="lg" onChange={(e) => {
                                        setBookingFeedback(e.target.value)
                                    }}/>

{/* <MDBInput
  wrapperClass='mb-4 w-100'
  label='Enter Rating'
  id='formControlLg'
  type='text'
  size='lg'
  onChange={(e) => {
    const inputValue = e.target.value;
    // Check if the input value is either an asterisk (*) or a number from 1 to 5
    if (inputValue === '*' || (parseInt(inputValue) >= 1 && parseInt(inputValue) <= 5)) {
      setRating(inputValue);
    }
  }} 
/>*/}
                     
            <MDBInput wrapperClass='mb-4 w-100' label='Enter Rating' id='formControlLg' type='text' size="lg" onChange={(e) => {
                                        setRating(e.target.value)
                                    }}/>


              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={addFeedBackHandler}>Give Feedback</button>

              
 
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default BookingFeedback;

