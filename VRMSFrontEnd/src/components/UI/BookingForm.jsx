import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { createUrl, log } from '../../utils/utils'
const BookingForm = (props) => {

    const { id } = useParams();
    console.log(id);
   const [bookingState, setBookingState] = 
   useState({Amount: 0.0,startdate: sessionStorage.getItem("startDate"),enddate: sessionStorage.getItem("endDate")});

  
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("uid");
    
    const addBookingHandler = (e)=>{
      e.preventDefault();

      if(userId== undefined){
            toast.error("Please log in before booking the vehicle")
            navigate("/login")
      }
      else{
        const bookingData = {
            amount: parseInt(props.bookingAmount),
            startDate: bookingState.startdate,
            endDate: bookingState.enddate,
            extraCharge: 0.0,
            totalAmount: bookingState.Amount,
            vehicleId : parseInt(id)
          };
          console.log(userId);
    
          axios.post(createUrl('/booking/addbooking/'+userId),bookingData)
          .then(response => {
              // Handle successful response
              console.log('Response data:', response.data);
              console.log(response.data)
    
              sessionStorage.setItem("bookingId",response.data.id)
    
              navigate("/payment");
              
          })
          .catch(error => {
              // Handle error
              console.error('An error occurred:', error);
          });
      }
    }

 
  return (
    <Form onSubmit={addBookingHandler}>
     
      <div className="row">
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Amount" value={props.bookingAmount} readOnly />
      </FormGroup>
      </div>

     
      
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" readOnly value={bookingState.startdate}/> 
      </FormGroup>
     

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" placeholder="Journey Date" readOnly value={bookingState.enddate}/>
      </FormGroup>

    
        <FormGroup>
        <button className="booking-button text-white btn-lg mb-3" onClick={addBookingHandler}>Pay Now</button>
        </FormGroup>


    </Form>

    
  );
};

export default BookingForm;
