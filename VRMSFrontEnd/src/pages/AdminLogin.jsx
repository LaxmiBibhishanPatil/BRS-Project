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
import { login, roleAdmin } from '../features/authSlice';
import '../styles/Login.css';
import { adminLoginUser } from '../services/user';

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const loginAdmin = async () => {
        if (email.length == '') {
            toast.error('Please enter email')
        } else if (password.length == '') {
            toast.error('Please enter password')
        } else {
            // call register api
            const response = await adminLoginUser(email, password)


            if (response !== null) {
                toast.success("Admin Login successfull")
                dispatch(login())

                //    toast.success(`Welcome ${name} to store application`)

                sessionStorage.setItem("jwt", response.jwt)
                sessionStorage.setItem("uid",response.userId)
                sessionStorage.setItem("uName",response.userName)
                sessionStorage.setItem("role","Admin")
                dispatch(roleAdmin())
                navigate("/Profile")

            }
            else {
                toast.error("login failed")
            }
        }
    }

    return (
        <MDBContainer fluid>



            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>


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




                            <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={loginAdmin}>Login</button>

                           
                             <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Login as an <Link to="/login" style={{ color: '#393f81' }}>User</Link></p>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>


    );
}

export default AdminLogin;


