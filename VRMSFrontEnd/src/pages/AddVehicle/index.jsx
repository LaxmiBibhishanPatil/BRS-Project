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
import { addVehicle as addVehicleApi } from '../../services/adminService'
import { getServiceLocations } from '../../services/adminService';
import { useEffect } from "react";
import { getAllVehicleBrands, getAllVehicleTypes } from '../../services/user'
import { useNavigate} from 'react-router-dom';


function AddVehicle() {


    const [vehicleNo, setVehicleNo] = useState([])
    const [fuelType, setFuelType] = useState([])
    const [passingYear, setPassingYear] = useState([])
    const [type, setType] = useState([])
    const [brand, setBrand] = useState([])
    const [serviceLocation, setServiceLocation] = useState([])
    const [typeId,setTypeId] = useState([])
    const [brandId,setBrandId] = useState([])
    const [serviceLocationId,setServiceLocationId] = useState([])
    const navigate = useNavigate();


    useEffect(() => {

      getVehicleTypes()
      getVehicleBrands()
      getAllServiceLocations()
  }, []);
  
    const addVehicle = async () => {
      if (vehicleNo.length == '') {
        toast.error('Please enter vehicle number')
      } else if (fuelType.length == '') {
        toast.error('Please enter fuel type')
      } else if (passingYear.length == '') {
        toast.error('Please enter passing year')
      } else if (type.length == '') {
        toast.error('Please enter vehicle type')
      } else if (brand.length == '') {
        toast.error('Please enter brand name')
      } else if (serviceLocation.length == '') {
        toast.error('Please enter service location')
      } else {
        const response = await addVehicleApi(
          vehicleNo,fuelType,passingYear,typeId,brandId,serviceLocationId
        )
        if(response!=null){
            toast.success("Vehicle added successfully")
        
        navigate('/AllVehicles');
          
    }
    else toast.error("Vehicle can't be added")
        console.log(response);
      }
    }

    const getVehicleBrands = async () => {
      const response = await getAllVehicleBrands()

      setBrand(response)
      setBrandId(response[0].id)
      console.log(response)
  }

  const getVehicleTypes = async () => {
      const response = await getAllVehicleTypes()

      setType(response)
      setTypeId(response[0].id)
      console.log(response)
  }

  const getAllServiceLocations = async () => {
    const response = await getServiceLocations()

    setServiceLocation(response.data)
    setServiceLocationId(response.data[0].id)
    console.log(response.data)
}



  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Add Vehicle</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Mobile Number' id='formControlLg' type='number' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Licence Number' id='formControlLg' type='text' size="lg"/>
              {/* <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg"/> */}
              
            
            
            <div className='mb-3'>
              <label htmlFor=''>Vehicle Number</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setVehicleNo(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Fuel Type</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFuelType(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Passing Year</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setPassingYear(e.target.value)
                }}
              />
            </div>

                         
            <div className='mb-3'>
                <label htmlFor=''>bike Type</label>
                <select onChange={(e) => {
                                setTypeId(e.target.value)
                            }}>
                
                {type.map((l)=>{
                    return <option value={l.id} >{l.type}</option> 
                })}
                </select>
            </div>

                        

            <div className='mb-3'>
                <label htmlFor=''>bike Brand</label>
                <select onChange={(e) => {
                                setBrandId(e.target.value)
                            }}>
                
                {brand.map((l)=>{
                    return <option value={l.id} >{l.brandName}</option> 
                })}
                </select>
            </div>

            <div className='mb-3'>
                <label htmlFor=''>Service Location</label>
                <select onChange={(e) => {
                                setServiceLocationId(e.target.value)
                            }}>
                
                {serviceLocation.map((l)=>{
                    return <option value={l.id} >{l.adrLine1}</option> 
                })}
                </select>
            </div>
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={addVehicle}>Add Vehicle</button>




            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default AddVehicle;