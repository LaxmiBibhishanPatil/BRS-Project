import React, {useState, useEffect} from 'react';

import { toast } from 'react-toastify'
import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getAvailableVehicles } from '../../services/adminService';

import '../styles.css';


function AvailableVehicles () {
    const [search, setSearch] = useState('');
    const [availableVehicles, setAvailableVehicles] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(availableVehicles, 5));
        setAvailableVehicles(sliceData(availableVehicles, page, 5));
        loadAvailableVehicle()
    }, []);

    const loadAvailableVehicle = async () => {
        const response = await getAvailableVehicles()
        if (response['status'] === 200) {
            setAvailableVehicles(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = availableVehicles.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setAvailableVehicles(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setAvailableVehicles(sliceData(availableVehicles, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Available Vehicles List</h2>
                    
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

                    {availableVehicles.length !== 0 ?
                        <tbody>
                            {availableVehicles.map((availableVehicle, index) => (
                                <tr key={index}>
                                    <td><span>{availableVehicle.vehicleNo}</span></td>
                                    <td><span>{availableVehicle.fuelType}</span></td>
                                    <td><span>{availableVehicle.passingYear}</span></td>
                                    <td><span>{availableVehicle.type.type}</span></td>
                                    <td><span>{availableVehicle.brand.brandName}</span></td>
                                    <td><span>{availableVehicle.location.adrLine1}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {availableVehicles.length !== 0 ?
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

export default AvailableVehicles;