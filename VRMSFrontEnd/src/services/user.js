import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUser(
  firstName,
  lastName,
  email,
  password,
  age,
  mobileNo,
  aadharNo,
  licenseNo
) {
  const url = createUrl('/user/register')
  const body = {
    firstName,
    lastName,
    email,
    password,
    age,
    mobileNo,
    aadharNo,
    licenseNo
}

  //wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  const url = createUrl('/user/login')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}



export async function getAllServiceLocation() {
    const url = createUrl('/service_location')
    
  
    //wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function getAllVehiclesByServiceLocation(locationId) {
    const url = createUrl('/vehicles/by_location/'+locationId)
    
  
    //wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function getAllVehicleBrands() {
    const url = createUrl('/vehicles/vehicle_brands')
    
  
    //wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function getAllVehicleTypes() {
    const url = createUrl('/vehicles/vehicle_types')
    
  
    //wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function addPayment(cardNo,cardHolderName,cvv,expiryDate,paymentAmount,bookingId){

    const url = createUrl('/payment')

    const body = {
        cardNo,
        cardHolderName,
        cvv,
        expiryDate,
        paymentAmount,
        bookingId
    }

    try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }

  }




  export async function getAllMyBookings(userId) {
    const url = createUrl('/booking/'+userId)
    
  
    //wait till axios is making the api call and getting response from server
    try {
      const response = await axios.get(url)
      
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function adminLoginUser(email, password) {
    const url = createUrl('/admin/signIn')
    const body = {
      email,
      password,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }

  export async function userValidationApi(email) {
    const url = createUrl('/user/forgotPassword')
    const body = {
      email,
     
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function forgotPasswordApi(email, password) {
    const url = createUrl('/user/updatePassword')
    const body = {
      email,
      password,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.put(url, body)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }