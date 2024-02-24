import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { toast } from 'react-toastify'

import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getAllBookingsWithFeedback } from '../../services/adminService';

import '../styles.css';


function BookingsWithFeedback () {
    const [search, setSearch] = useState('');
    const [bookingsWithFeedback, setBookingsWithFeedback] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(bookingsWithFeedback, 5));
        setBookingsWithFeedback(sliceData(bookingsWithFeedback, page, 5));
        loadAllBookingsWithFeedback();
    }, []);

    const loadAllBookingsWithFeedback = async () => {
        const response = await getAllBookingsWithFeedback()
        if (response['status'] === 200) {
            setBookingsWithFeedback(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = bookingsWithFeedback.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setBookingsWithFeedback(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setBookingsWithFeedback(sliceData(bookingsWithFeedback, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Bookings With Feedback</h2>
                   
                </div>

                <table>
                    <thead>
                    <th>Book Date</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>User Email</th>
                    <th>Feedback</th>
                    <th>Rating</th>
                    </thead>
                    
                    {bookingsWithFeedback.length !== 0 ?
                        <tbody>
                            {bookingsWithFeedback.map((bookingWithFeedback, index) => (
                                <tr key={index}>
                                   <td><span>{bookingWithFeedback.bookDate}</span></td>
                                   <td><span>{bookingWithFeedback.startDate}</span></td>
                                   <td><span>{bookingWithFeedback.endDate}</span></td>
                                    <td><span>{bookingWithFeedback.amount}</span></td>
                                    <td><span>{bookingWithFeedback.status}</span></td>
                                    <td><span>{bookingWithFeedback.user.email}</span></td>
                                    <td><span>{bookingWithFeedback.bookingFeedback}</span></td>
                                    <td><span>{bookingWithFeedback.rating}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {bookingsWithFeedback.length !== 0 ?
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

export default BookingsWithFeedback;