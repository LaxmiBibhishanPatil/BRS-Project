import React, {useState, useEffect} from 'react';

import { toast } from 'react-toastify'
import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getAllUsers } from '../../services/adminService';

import '../styles.css';


function Users () {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(users, 5));
        setUsers(sliceData(users, page, 5));
        loadUsers()
    }, []);

    const loadUsers = async () => {
        const response = await getAllUsers()
        if (response['status'] === 200) {
            setUsers(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = users.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setUsers(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setUsers(sliceData(users, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Users List</h2>
                   
                </div>

                <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Mobile No </th>
                    <th>Aadhar No</th>
                    <th>License No</th>
                    </thead>

                    {users.length !== 0 ?
                        <tbody>
                            
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td><span>{user.firstName}</span></td>
                                    <td><span>{user.lastName}</span></td>
                                    <td><span>{user.email}</span></td>
                                    <td><span>{user.age}</span></td>
                                    <td><span>{user.mobileNo}</span></td>
                                    <td><span>{user.aadharNo}</span></td>
                                    <td><span>{user.licenseNo}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {users.length !== 0 ?
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

export default Users;