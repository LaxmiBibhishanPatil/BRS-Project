
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import '../../styles/mybooking.css'
import { getAllMyBookings } from "../../services/user";
import { useNavigate } from "react-router-dom";
function MyBookings() {
    
    const [bookings,setBookings] = useState([])
    const uid = sessionStorage.getItem("uid")
    const navigate = useNavigate();

    useEffect(()=>{
        getMyBookings();
    },[])

    const getMyBookings = async ()=>{

        const response = await getAllMyBookings(uid)

        if(response!=null){
            setBookings(response)
        }

    }

    const handleAddFeedback = (bookingId)=>{
        sessionStorage.setItem('bookingId',bookingId);
        navigate('/bookingFeedback');
    }

    const handleCancelBooking = (bookingId)=>{
        sessionStorage.setItem('bookingId',bookingId);
        navigate('/cancelBooking');
    }

    const handlePayBooking = (bookingId,bookingAmount)=>{
        sessionStorage.setItem('bookingId',bookingId);
        sessionStorage.setItem("bookingAmount",bookingAmount)
        navigate('/payment');
    }

    return (


     

        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '90%' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                        
                        <h3 className="fw-bold mb-5 text-center">My Bookings</h3>
                        
                        <table className="table table-hover" >
                   
                        <tr>
                        <td scope="col">Booking Id</td>
                        <td scope="col">Book Date</td>
                        <td scope="col">Start Date</td>
                        <td scope="col">End Date</td>
                        <td scope="col">Amount</td>
                        
                        <td scope="col">Booking Status</td>
                        <td scope="col"></td>
                        </tr>
                   
                        {bookings.map(booking =>
                        <tr key={booking.id}>

                      <td>{booking.id}</td>
                        <td>{booking.bookDate}</td>
                        <td>{booking.startDate}</td>
                        <td>{booking.endDate}</td>
                        <td>{booking.amount}</td>
                        
                        <td>{booking.status}</td>
                        {booking.status=="Successful"
                        ?
                        <>
                        <td><button className="btn btn-danger" style={{color:"red"}} onClick={()=>{handleCancelBooking(booking.id)}}>Cancel Booking</button></td>
                        <td><button className="btn btn-primary" style={{color:"blue"}} onClick={()=>{ handleAddFeedback(booking.id)}}>FeedBack</button></td>
                        </>
                        :
                        <>
                        <td><button className="btn btn-primary" style={{color:"blue"}} onClick={()=>{handlePayBooking(booking.id,booking.amount)}} >Pay Now Here</button></td>
                        <td></td>
                        </>
                        
                    
                    }
                        
                        </tr>
                        )}
                 
                    </table>
                           
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
       


    );
}

export default MyBookings;