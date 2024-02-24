import {
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBRow
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, roleCustomer } from '../features/authSlice';
import { forgotPasswordApi, loginUser as loginUserApi } from '../services/user';
import '../styles/Login.css';

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const updateUser = async () => {
        if (email.length == '') {
            toast.error('Please enter email')
        } else if (password.length == '') {
            toast.error('Please enter password')
        } else {
            // call register api
            const response = await forgotPasswordApi(email, password)


            if (response !== null) {
                toast.success("password updated succesfully");
                navigate("/login")

            }
            else {

                toast.error("password updation failed")
            }
        }
    }

    return (
        <MDBContainer fluid>



            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Update Password</h2>


                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            {/* <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/> */}

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
                                <label htmlFor=''>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>

                            {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}




                            <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={updateUser}>UpdatePassword</button>

                           
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>


    );
}

export default ForgotPassword;


