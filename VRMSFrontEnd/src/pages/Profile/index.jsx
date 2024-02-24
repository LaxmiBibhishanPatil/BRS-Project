
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUrl, log } from '../../utils/utils'
function Profile() {

    const navigate= useNavigate();
    const id = sessionStorage.getItem("uid");

  const [ firstName , setFirstName ] = useState('');
  const [ lastName , setLastName ] = useState('');
  const [ email , setEmail ] = useState('');
  
  const [ mobileNo , setMobileNo ] = useState('');
  const [ gstNo , setGstNo ] = useState('');
  

 const changePass =()=>{
    navigate("/AdminChangePassword")
 }
 
  useEffect(() => {
    axios.get(createUrl('/admin/'+id))
      .then(response => {
          // Handle successful response
          console.log('Response data:', response.data);
          setFirstName(response.data.firstName);  
          setLastName(response.data.lastName);  
          setEmail(response.data.email);  
          
          setMobileNo(response.data.mobileNo);  
          setGstNo(response.data.gstNo);  
          
      })
      .catch(error => {
          // Handle error
          console.error('An error occurred:', error);
      });

  },[]);



    return (
        <>


          
            
            
            
        
           <body>
            <form style={{ width: "30%", height:"100%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "50px"   }}>
                <div class="profile-container">
                    <h1 class="profile-name">My Profile</h1>
                    <br />
                    <div class="profile-field" >
                        <label for="firstname">First Name:</label>
                        <p id="firstname" style={{fontSize:"20px"}}>{firstName}</p>
                    </div>
                    <div class="profile-field">
                        <label for="lastname">Last Name:</label>
                        <p id="lastname" style={{fontSize:"20px"}}>{lastName}</p>
                    </div>
                    <div class="profile-field">
                        <label for="email">Email:</label>
                        <p id="email" style={{fontSize:"20px"}}>{email}</p>
                    </div>
                    <div class="profile-field">
                        <label for="mobile">Mobile Number:</label>
                        <p id="mobile" style={{fontSize:"20px"}}>{mobileNo}</p>
                    </div>
                    <div class="profile-field">
                        <label for="mobile">GST NO.:</label>
                        <p id="mobile" style={{fontSize:"20px"}}>{gstNo}</p>
                    </div>

                    <button className="btn btn-primary" onClick={changePass }> Change Password </button>
                </div>

            </form>
            </body>
        </>
    );

}
export default Profile;