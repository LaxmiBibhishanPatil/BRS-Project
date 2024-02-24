import React, {useState, useEffect} from 'react';
import { getAllServiceLocations, updateVehicle } from '../../services/admin';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function UpdateVehicle(){

   
    const navigate= useNavigate()
    const fuelType=sessionStorage.getItem("fuelType")
    const location=sessionStorage.getItem("location")
    const locationId=sessionStorage.getItem("locationId")
    const vehicleId=sessionStorage.getItem("vehicleId")

    const [fuel, setFuel] = useState(fuelType)
    const [locations, setLocations] = useState([])
    const [locId, setLocationId] = useState(location.id)

    useEffect(()=>{

        getLocations()

    },[])

    const getLocations = async()=>{

        const response = await getAllServiceLocations()
        console.log(response.data);
        if(response.data !== null){
        setLocations(response.data)
        setLocationId(response.data[0].id)
    }
        
    }

    const sendUpdatedVehicle= async(e)=>{
        e.preventDefault();
        if (fuel.length == '') {
            toast.error('Please enter fuel type')
        } else{
        
        const response= await updateVehicle(vehicleId,fuel,locId)

        if(response.status == 200) {toast.success("Vehicle updated successfully")
        navigate("/AllVehicles")}
        else toast.error("Vehicle updation failed..") 

        }
        
        
    }

    
    return (
        <>
        <div style={{marginLeft:"300px", marginTop:"20px"}}>
            <h3>Update Vehicle</h3>
            </div>


            <form style={{ width: "30%", left: "450px", position: "absolute", boxShadow: "10px 10px 10px 5px grey", padding: "20px", marginTop: "10px" }}>
           

                <div class="form-group">
                <label for="exampleInputEmail1">Fuel Type</label>
                    <input
                        type="text"
                        class="form-control"
                        id="fuelType"
                        aria-describedby="emailHelp"
                        placeholder="Enter Fuel Type"
                        value={fuel}
                        onChange={(e) => {
                            setFuel(e.target.value)
                          }}
                    />
                </div>

        
                <br />
               <div class="form-group">
               
                        <label htmlFor=''>Area</label>
                        <select onChange={(e) => {
                                        setLocationId(e.target.value)
                                    }}>
                        
                        {locations.map((l)=>{
                            return <option value={l.id} >{l.adrLine1}</option> 
                        })}
                        </select>
                    
               </div>
         
            
                <br />
                <button type="submit" className="btn btn-info" onClick={sendUpdatedVehicle} >Update Vehicle</button>
            
                </form>
                </>
                );

              }
              export default UpdateVehicle;