import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";
import { createUrl } from '../utils/utils';
const BikeDetails = () => {
  const { id } = useParams();

  const [vehicle, SetVehicle] = useState({id:0,vehicleNo:'',fuelType:'',passingYear:'',status:'', brand:{id:0,brandName:'',pricingPerKm:0},
                                            type:{id:0,type:''}});
    const bookingAmount = sessionStorage.getItem("bookingAmount")

  useEffect(() => {

      axios.get(createUrl('/vehicles/'+id))
          .then(response => {
              // Handle successful response
              console.log('Response data:', response.data);
              SetVehicle(response.data);
              console.log(response.data)
          })
          .catch(error => {
              // Handle error
              console.error('An error occurred:', error);
          });

  }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [vehicle]);

  return (
    <Helmet title={vehicle.brand.brandName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={createUrl('/vehicles/images/'+vehicle.id)} alt="" className="w-100"/>
              
            </Col>
            
            <Col lg="6">
              <div className="bike__info">
                <h2 className="section__title">{vehicle.brand.brandName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    &#8377;{bookingAmount}.00
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    5
                  </span>
                </div>

                <p className="section__description">
                  {/* {singleBikeItem.description} */}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {vehicle.passingYear}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {singleBikeItem.automatic} */}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {singleBikeItem.speed} */}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {/* {singleBikeItem.gps} */}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {singleBikeItem.seatType} */}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {vehicle.type.type}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm bookingAmount={bookingAmount} />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BikeDetails;
