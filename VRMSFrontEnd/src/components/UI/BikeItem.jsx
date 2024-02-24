import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/bike-item.css";
import { createUrl, log } from '../../utils/utils'

const BikeItem = (props) => {
  const {id,imageFile, fuelType, brand, passingYear} = props.item;
  
  const navigate = useNavigate();

    var goToVehicleDetails =()=>{
        navigate('/bikes/'+id);
        sessionStorage.setItem("bookingAmount",props.selectedPlans* brand.pricingPerKm)
    }


//   const arrayBufferToBase64=(buffer)=> {
//     var binary = '';
//     var bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => binary += String.fromCharCode(b));
//     return window.btoa(binary);
// };

// const imageUrl =  URL.createObjectURL(new Blob([imageFile]));

//     useEffect(() => {
//         // var base64Flag = 'data:image/jpeg;base64,';
//         // var imageStr = arrayBufferToBase64(imageFile);

//         // setImgSrc(base64Flag+imageStr);


//         const blob = new Blob([imageFile], { type: 'image/jpeg' }); // Update the MIME type as needed

//   // Create a URL for the Blob
//         console.log(blob)
//          setImgSrc(URL.createObjectURL(blob));


//     }, []);

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="bike__item">
        <div className="bike__img">
          <img src={createUrl('/vehicles/images/'+id)} alt="" className="w-100 bikeImages" />
        </div>

        <div className="bike__item-content mt-4">
          <h4 className="section__title text-center">{brand.brandName}</h4>
          <h6 className="rent__price text-center mt-">
          &#8377;{props.selectedPlans* brand.pricingPerKm}.00 
          </h6>

          <div className="bike__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-bike-line"></i> {passingYear}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {fuelType}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span> */}
          </div>

          {/* <button className=" w-50 bike__item-btn bike__btn-rent">
            <Link to={`/bikes/${bikeName}`}>Rent</Link>
          </button> */}

          <button className=" w-50 bike__item-btn bike__btn-details" onClick={goToVehicleDetails}>
            {/* <Link to={`/bikes/${id}`}>Details</Link> */}
                Details 
          </button>
        </div>
      </div>
    </Col>
  );
};

export default BikeItem;