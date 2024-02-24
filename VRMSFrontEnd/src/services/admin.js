import axios from "axios"

import { createUrl, log } from '../utils/utils'


export async function getAllUsers() {
    try {
      const url=createUrl('/user/getAllUsers')
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }


//Vehicle related API's

  export async function getAllVehicles() {
    try {
      const url=createUrl('/vehicles/all')
  
      const response = await axios.get(url)
      log(response)
      log(response)
      return response
      
    } catch (ex) {
        log(ex)
      return null
    }
  }


  export async function getReservedVehicles() {
    try {
      const url=createUrl('/vehicles/reserved_vehicles')
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }


  export async function getAvailableVehicles() {
    try {
      const url=createUrl('/vehicles/available_vehicles')
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }



export async function addVehicle(vehicleNo, fuelType, passingYear, typeId, brandId, serviceLocationId) {
    
    const url=createUrl('/vehicles')
  
    const body = {
        vehicleNo, fuelType, passingYear, typeId, brandId, serviceLocationId,
    
    }
  
    try {
      const response = await axios.post(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}


export async function updateVehicle(id, fuelType, serviceLocationId) {
    
    const url=createUrl('/vehicles')
  
    const body = {
        id, fuelType, serviceLocationId,
    
    }
  
    try {
      const response = await axios.put(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}



export async function deleteVehicle(id) {
  try {
    const url=createUrl('/vehicles/'+id)

    const response = await axios.delete(url)
    log(response)
    return response
  } catch (ex) {
      log(ex)
    return null
  }
}


  export async function getAllBookings(year) {
    try {
      const url=createUrl('/booking/allbookings')
  
      const response = await axios.post(url,year)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }


  export async function getAllBookingsWithFeedback() {
    try {
      const url=createUrl('/booking/allbookingswithfeedback')
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }



  export async function getYearlyRevenue(year) {
    try {
      const url=createUrl('/booking/yearly_revenue/'+year)
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }


  //Service locations API's

  export async function getAllServiceLocations() {
    try {
      const url=createUrl('/service_location')
  
      const response = await axios.get(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }



export async function addServiceLocation(adrLine1, adrLine2, city, state, country, zipCode)
     {
       
    const url=createUrl('/service_location')
  
    const body = {
      adrLine1, adrLine2, city, state, country, zipCode,
    
    }
  
    try {
      const response = await axios.post(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}



export async function deleteServiceLocation(id) {
    try {
      const url=createUrl('/service_location/'+id)
  
      const response = await axios.delete(url)
      log(response)
      return response
    } catch (ex) {
        log(ex)
      return null
    }
  }


export async function ChangePassword(email,password) {
    
    const url=createUrl('/admin/updatePassword')
  
    const body = {
      email,
      password,
    
    };
  
    try {
      const response = await axios.post(url, body)
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}

