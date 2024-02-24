import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { toast } from 'react-toastify'

import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getAllBookings } from '../../services/adminService';

import '../styles.css';


function Bookings () {
    const [search, setSearch] = useState('');
    const [bookings, setBookings] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(bookings, 5));
        setBookings(sliceData(bookings, page, 5));
        loadAllBookings();
    }, []);

    const loadAllBookings = async () => {
        const response = await getAllBookings()
        if (response['status'] === 200) {
            setBookings(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = bookings.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setBookings(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setBookings(sliceData(bookings, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Bookings</h2>
                   
                </div>

                <table>
                    <thead>
                    <th>Book Date</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>User Email</th>
                    </thead>

                    {bookings.length !== 0 ?
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                   <td><span>{booking.bookDate}</span></td>
                                   <td><span>{booking.startDate}</span></td>
                                   <td><span>{booking.endDate}</span></td>
                                    <td><span>{booking.amount}</span></td>
                                    <td><span>{booking.status}</span></td>
                                    <td><span>{booking.user.email}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {bookings.length !== 0 ?
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

export default Bookings;