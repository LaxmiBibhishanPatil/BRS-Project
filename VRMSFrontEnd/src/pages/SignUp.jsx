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
import { registerUser as registerUserApi } from '../services/user'
import { useNavigate } from 'react-router-dom';
function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [age, setAge] = useState(0)
    const [aadharNo, setAadhar] = useState('')
    const [licenseNo, setLicenseNo] = useState('')
    // get the navigation object
    const navigate = useNavigate()
  
    const registerUser = async () => {
      if (firstName.length == '') {
        toast.error('Please enter first name')
      } else if (lastName.length == '') {
        toast.error('Please enter last name')
      } else if (email.length == '') {
        toast.error('Please enter email')
      } else if (mobileNo.length == '') {
        toast.error('Please enter mobile')
      } else if (password.length == '') {
        toast.error('Please enter password')
      } else if (confirmPassword.length == '') {
        toast.error('Please confirm password')
      } else if (age.length == '') {
        toast.error('Please confirm password')
      }else if (aadharNo.length == '') {
        toast.error('Please confirm password')
      }else if (licenseNo.length == '') {
        toast.error('Please confirm password')
      }else if (password !== confirmPassword) {
        toast.error('Password does not match')
      } else {
        console.log(mobileNo + " "+ licenseNo);
        // call register api
        const response = await registerUserApi(
          firstName,
          lastName,
          email,
          password,
          age,
          mobileNo,
          aadharNo,
          licenseNo
        )
        
        if (response !== null) {
            toast.success('Successfully registered a new user')
    
            // go back to login
            navigate('/')
          } else {
            toast.error('Error while registering a new user, please try again')
          }
        
      }
    }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

             
            
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Age</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setAge(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Aadhar Number</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setAadhar(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Licence Number</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setLicenseNo(e.target.value)
                }}
              />
            </div>
            

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>


              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={registerUser}>Sign Up</button>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already Registered? <a href="/login" style={{color: '#393f81'}}>Login here</a></p>



            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;