import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SideBarItem from './sidebar-item';

import './styles.css';

import LogoutIcon from '../../assets/icons/logout.svg';
import { useDispatch } from 'react-redux';
import { logout, roleCustomer } from '../../features/authSlice';

function SideBar ({ menu }) {
    const location = useLocation();

    const [active, setActive] = useState(1);
    const navigate = useNavigate()
    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    const dispatch = useDispatch()
    const logoutUser= ()=>{
        console.log("logout")
    
        sessionStorage.clear()
        dispatch(logout())
        dispatch(roleCustomer())
        navigate("/")
    
      }


    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    {/* <img
                        src={logo}
                        alt="logo" /> */}
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label' onClick={logoutUser} >Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;