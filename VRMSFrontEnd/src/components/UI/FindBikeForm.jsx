import React, { useEffect, useState } from "react";
import "../../styles/find-bike-form.css";
import "../../styles/find-bike-form.css";
import { Form, FormGroup } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllServiceLocation } from "../../services/user";
import { toast } from "react-toastify";

const FindBikeForm = () => {
    const navigate = useNavigate();

    const [locations,setLocations] = useState([]);
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [locationId,setLocationId] = useState("")
    
    var searchBike = (e) => {
        e.preventDefault()


        if (startDate.length == '') {
            toast.error('Please enter start date')
        } else if (endDate.length == '') {
            toast.error('Please enter end date')
        }
        else if (Math.ceil(new Date(startDate) - new Date()) / (1000 * 60 * 60 * 24)<-1) {
            
            toast.error('Start date should be on or after ')
        }
        else if (Math.ceil(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)<=0) {
            toast.error('End date should be after start date ')
        }
        else {
            
        sessionStorage.setItem("locationId",locationId)
        sessionStorage.setItem("startDate",startDate)
        sessionStorage.setItem("endDate",endDate)
        

        navigate('/bikes');
        }
    }

    useEffect(()=>{

        getLocations()

    },[])

    const getLocations = async()=>{

        const response = await getAllServiceLocation()
        console.log(response);
        if(response !== null){
        setLocations(response)
        setLocationId(response[0].id)
    }
        
    }

  

    return (
        <Form className="form">
            <div className=" d-flex align-items-center justify-content-between flex-wrap">

                <FormGroup className="select__group">
                    <div className='mb-3'>
                        <label htmlFor=''>Area</label>
                        <select onChange={(e) => {
                                        setLocationId(e.target.value)
                                    }}>
                        
                        {locations.map((l)=>{
                            return <option value={l.id} >{l.adrLine1}</option> 
                        })}
                        </select>
                    </div>
                </FormGroup>

                <FormGroup className="form__group">
                    <div className='mb-3'>
                        <label htmlFor=''>Start Date</label>
                        <input type="date" placeholder="start date" onChange={(e) => {
                                        setStartDate(e.target.value)
                                    }} />
                    </div>
                </FormGroup>

                <FormGroup className="form__group">
                    <div className='mb-3'>
                        <label htmlFor=''>End Date</label>
                        <input type="date" placeholder="end date"
                        onChange={(e) => {
                            setEndDate(e.target.value)
                        }}
                         />
                    </div>
                </FormGroup>

                

                <FormGroup className="form__group">
                    <button className="btn find__bike-btn" onClick={searchBike}>Find bike</button>
                </FormGroup>
            </div>
        </Form>
    );
};

export default FindBikeForm;
