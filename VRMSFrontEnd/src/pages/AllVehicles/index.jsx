import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import { calculateRange, sliceData } from '../../utils/table-pagination';

import { getAllVehicles, deleteVehicle } from '../../services/admin';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import '../styles.css';
import FileUploadForm from './UploadImage';


function AllVehicles() {
    const [myAllVehicles, setAllVehicles] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        // get the list of vehicles from server
        loadVehicles()
    }, [])


    const addVehicle = async () => {
        navigate("/AddVehicle")
    }




    const loadVehicles = async () => {
        const response = await getAllVehicles()

        console.log(response.data)

        setAllVehicles(response.data)

    }





    const removeVehicle = async (id) => {
        const response = await deleteVehicle(id)

        if(response!= null) toast.success("Vehicle removed successfully")
        else toast.error("Vehicle can't be removed")

        loadVehicles()
    }



    const [search, setSearch] = useState('');
    //const [ServiceProviders, setServiceProviders] = useState(allServiceProviders);


    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        //setPagination(calculateRange(allServiceProviders, 5));
        setPagination(calculateRange(myAllVehicles, 5));
        //setServiceProviders(sliceData(allServiceProviders, page, 5));
        setAllVehicles(sliceData(myAllVehicles, page, 5));
    }, []);

    

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        // setServiceProviders(sliceData(allServiceProviders, new_page, 5));
        setAllVehicles(sliceData(myAllVehicles, new_page, 5));
    }

    return (
        <div className='dashboard-content'>

            <DashboardHeader
                btnText="Add Vehicle" onClick={addVehicle} />
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Vehicles List</h2>
                  
                </div>

                <table>
                    <thead>
                        <th>Vehicle No</th>
                        <th>Fuel Type</th>
                        <th>Passing Year</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Location</th>
                        <th>Remove</th>
                        <th>Update</th>
                        <th colSpan={2}>Upload Image</th>
                    </thead>

                    {myAllVehicles.length !== 0 ?
                        <tbody>
                            {myAllVehicles.map((vehicle, index) => (


                                <tr key={index}>
                                    <td><span>{vehicle.vehicleNo}</span></td>
                                    <td><span>{vehicle.fuelType}</span></td>


                                    <td>
                                        <span>{vehicle.passingYear}</span>
                                    </td>

                                    <td><span>{vehicle.type.type}</span></td>
                                    <td><span>{vehicle.brand.brandName}</span></td>
                                    <td><span>{vehicle.location.adrLine1}</span></td>

                                    <td> <button className='btn btn-danger' onClick={() => { removeVehicle(vehicle.id) }}>Remove</button> </td>

                                    {/* <td> <button className='btn btn-danger'>Remove</button> </td> */}
                                    <td> <button className='btn btn-primary' onClick={async () => {

                                        sessionStorage.setItem("fuelType", vehicle.fuelType)
                                        sessionStorage.setItem("location", vehicle.location.adrLine1)
                                        sessionStorage.setItem("locationId", vehicle.location.id)
                                        sessionStorage.setItem("vehicleId", vehicle.id)
                                        navigate("/UpdateVehicle")
                                    }} >Update</button> </td>
                                    {/* <td> <button className='btn btn-primary'>Update</button> </td> */}

                                 <td>   <FileUploadForm vehicleId={vehicle.id}/> </td>
                                </tr>


                            ))}
                        </tbody>
                        : null}
                </table>

                {myAllVehicles.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                {item}
                            </span>
                        ))}
                    </div>
                    :
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )

    // const sessions = async () =>{
    //     {sessionStorage.setItem("fuelType",vehicle.fuelType)}
    //       {sessionStorage.setItem("location",vehicle.location.adrLine1 )}
    //       {sessionStorage.setItem("locationId",vehicle.location.id )}
    //       {sessionStorage.setItem("vehicleId",vehicle.id)}


    //   }

}

export default AllVehicles;