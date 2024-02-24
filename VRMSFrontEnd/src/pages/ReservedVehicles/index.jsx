import React, {useState, useEffect} from 'react';

import { toast } from 'react-toastify'
import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getReservedVehicles } from '../../services/adminService';

import '../styles.css';


function ReservedVehicles () {
    const [search, setSearch] = useState('');
    const [reservedVehicles, setReservedVehicles] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(reservedVehicles, 5));
        setReservedVehicles(sliceData(reservedVehicles, page, 5));
        loadReservedVehicle()
    }, []);

    const loadReservedVehicle = async () => {
        const response = await getReservedVehicles()
        if (response['status'] === 200) {
            setReservedVehicles(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = reservedVehicles.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setReservedVehicles(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setReservedVehicles(sliceData(reservedVehicles, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Reserved Vehicles List</h2>
                    
                </div>

                <table>
                <thead>
                    <th>Vehicle No</th>
                    <th>Fuel Type</th>
                    <th>Passing Year</th>
                    <th>Type</th>
                    <th>Brand Name</th>
                    <th>Location</th>
                    </thead>

                    {reservedVehicles.length !== 0 ?
                        <tbody>
                            {reservedVehicles.map((reservedVehicle, index) => (
                                <tr key={index}>
                                    <td><span>{reservedVehicle.vehicleNo}</span></td>
                                    <td><span>{reservedVehicle.fuelType}</span></td>
                                    <td><span>{reservedVehicle.passingYear}</span></td>
                                    <td><span>{reservedVehicle.type.type}</span></td>
                                    <td><span>{reservedVehicle.brand.brandName}</span></td>
                                    <td><span>{reservedVehicle.location.adrLine1}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {reservedVehicles.length !== 0 ?
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
}

export default ReservedVehicles;