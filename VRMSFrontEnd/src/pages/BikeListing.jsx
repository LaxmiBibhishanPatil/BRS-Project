import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BikeItem from "../components/UI/BikeItem";
import CommonSection from "../components/UI/CommonSection";
import { getAllVehicleBrands, getAllVehicleTypes, getAllVehiclesByServiceLocation } from "../services/user";

const BikeListing = () => {

    const [allBikes, SetAllBikes] = useState([])
    const [allFilterdBikes, SetAllFilterdBikes] = useState([])
    const [basePrice, setBasePrice] = useState(0)
    const [plans,setPlans] = useState([])
    const locationId = sessionStorage.getItem("locationId")
    const { startDate, endDate } = sessionStorage
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPlans, setSelectedPlans] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [bikeTypes, SetBikeTypes] = useState([])
    const [bikeBrands, setBikeBrands] = useState([])
    useEffect(() => {

        getAllVehicles()
        getVehicleTypes()
        getVehicleBrands()
        const days = Math.ceil(Math.abs(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))
       
        setBasePrice(240 * days)
        const planArray = []
        planArray.push(120 * days)
        planArray.push(240 * days)
        planArray.push(360 * days)
        setPlans([...plans, ...planArray])
        setSelectedPlans(120*days)
    
        
        console.log(plans);
    }, []);

    const getAllVehicles = async () => {
        const response = await getAllVehiclesByServiceLocation(locationId)

        SetAllBikes(response)
        SetAllFilterdBikes(response)
        console.log(response);
    }

    const getVehicleBrands = async () => {
        const response = await getAllVehicleBrands()

        setBikeBrands(response)
    }

    const getVehicleTypes = async () => {
        const response = await getAllVehicleTypes()

        SetBikeTypes(response)

        console.log(response[0].type)
    }





    return (
        <Helmet title="bikes">
            <CommonSection title="bike Listing" />

            <section>
                <Container>
                    <Row>
                        

                        <Col lg="4">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> bike Types
                                </span>

                                <select onChange={(e) => {
                                    setSelectedTypes(e.target.value)
                                   
                                    const filteredItems = allBikes.filter(item => item.type.id == e.target.value 
                                         && item.brand.id == selectedBrands
                                        );
                                   
                                    console.log(filteredItems);
                                    if(filteredItems!=null) SetAllFilterdBikes(filteredItems)
                                }}>

                                    {bikeTypes.map((l) => {
                                        return <option value={l.id} >{l.type}</option>
                                    })}
                                </select>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> bike Plans
                                </span>

                                <select onChange={(e) => {
                                    setSelectedPlans(e.target.value)
                                }}>

                                    {plans.map((l) => {
                                        return <option value={l} >{l}</option>
                                    })}
                                </select>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> bike Brands
                                </span>

                                <select onChange={(e) => {
                                    setSelectedBrands(e.target.value)

                                    const filteredItems = allBikes.filter(item => item.brand.id == e.target.value 
                                        && item.type.id== selectedTypes
                                        );
                                    
                                    console.log(filteredItems);
                                    SetAllFilterdBikes(filteredItems)
                                }}>

                                    {bikeBrands.map((l) => {
                                        return <option value={l.id} >{l.brandName}</option>
                                    })}
                                </select>
                            </div>
                        </Col>




                        {allFilterdBikes.map((item) => (
                            <BikeItem item={item} key={item.id} basePrice={basePrice} selectedPlans = {selectedPlans}/>
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default BikeListing;
