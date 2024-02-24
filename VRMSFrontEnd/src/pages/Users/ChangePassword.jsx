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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUrl, log } from '../../utils/utils'
function ChangePassword() {

  const id = sessionStorage.getItem("uid");

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
const navigate = useNavigate()
  const changePasswordHandler = ()=>{
    if (oldPassword.length == '') {
        toast.error('Please enter old password')
    } else if (newPassword.length == '') {
        toast.error('Please enter new password')
    }
    else{
    const passwordObj = { id, oldPassword, newPassword}
    // validation remaining
    axios.post(createUrl('/user/changePassword'),passwordObj)
    .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);
        toast.success("password changed succesfullly")
        navigate("/viewProfile")
    })
    .catch(error => {
        // Handle error
        console.error('An error occurred:', error);
        toast.error("password changed failed")
    });
}
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Change Password</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

            
              <MDBInput wrapperClass='mb-4 w-100' label='Enter Old Password' id='formControlLg' type='password' size="lg" onChange={(e) => {
                                        setOldPassword(e.target.value)
                                    }}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Enter New Password' id='formControlLg' type='password' size="lg" onChange={(e) => {
                                        setNewPassword(e.target.value)
                                    }}/>
              
            
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={changePasswordHandler}>Update Password</button>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default ChangePassword;


