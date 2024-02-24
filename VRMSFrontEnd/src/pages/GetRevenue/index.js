import React, {useState, useEffect} from 'react';
import { getYearlyRevenue } from '../../services/admin';
import { current } from '@reduxjs/toolkit';

function GetRevenue() {
    // const myDate= new Date()
    // console.log(typeof(myDate.getFullYear))
    const [years, setYears] = useState(["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"])
    const [revenue, setRevenue] = useState('')
    const [yr,setYr] = useState("2015")

    useEffect(()=>{

        getRevenue()

    },[yr])

    const getRevenue = async () => {
        const response = await getYearlyRevenue(yr)

       // console.log(response.data)

        setRevenue(response.data)

    }

    return (

        <body>
            <form style={{ width: "30%", height:"60%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "50px"   }}>
        <div class="form-group" style={{marginTop:"20px"}}>

            <label htmlFor='yearlyRevenue' style={{color:"darkblue"}}>  <h1>Yearly Revenue</h1> </label>
            
            <div >
              <h2 >Choose Year</h2> 
            </div >
           

            <div class="custom-select" >
            <select onChange={(e) => {
                setYr(e.target.value)
                // getRevenue()
            }} style={{width:"200px"}}>

                {years.map((y) => {
                    return <option value={y} style={{fontSize:"20px"}}>{y}</option>
                })}
            </select>
            </div>

            <br></br>
            <div>
              <h3 style={{}}> ₹ {revenue}.00</h3>
            </div>

        </div>
        </form>
        </body>

    )
}

export default GetRevenue;