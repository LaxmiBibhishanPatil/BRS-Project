import React from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';




function DashboardHeader ({ btnText, onClick }) {

    // const history = useHistory();
  
    // const coursesPage = () => {
    //     history.push("/addServiceProvider");

    // }

    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

       
        </div>
    )
}

export default DashboardHeader;