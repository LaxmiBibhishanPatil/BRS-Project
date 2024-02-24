import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { toast } from 'react-toastify'

import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getFeedbacks } from '../../services/adminService';

import '../styles.css';


function WebsiteFeedbacks () {
    const [search, setSearch] = useState('');
    const [feedbacks, setFeedbacks] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(feedbacks, 5));
        setFeedbacks(sliceData(feedbacks, page, 5));
        loadAllFeedbacks();
    }, []);

    const loadAllFeedbacks = async () => {
        const response = await getFeedbacks()
        if (response['status'] === 200) {
            setFeedbacks(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = feedbacks.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setFeedbacks(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setFeedbacks(sliceData(feedbacks, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Website Feedbacks</h2>
                    
                </div>

                <table>
                    <thead>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Feedback</th>
                    </thead>
                    {feedbacks.length !== 0 ?
                        <tbody>
                            {feedbacks.map((feedback, index) => (
                                <tr key={index}>
                                   <td><span>{feedback.customerName}</span></td>
                                   <td><span>{feedback.email}</span></td>
                                   <td><span>{feedback.feedbackMsg}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {feedbacks.length !== 0 ?
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

export default WebsiteFeedbacks;