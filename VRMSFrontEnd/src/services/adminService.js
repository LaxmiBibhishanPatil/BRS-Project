import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function getAvailableVehicles() {
  const url = createUrl('/vehicles/available_vehicles')

  try {
    // get the current user's token from session storage
    const { token } = sessionStorage

    // create a header to send the token
    const header = {
      headers: {
        token,
      },
    }

    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getReservedVehicles() {
    const url = createUrl('/vehicles/reserved_vehicles')
  
    try {
      // get the current user's token from session storage
      const { token } = sessionStorage
  
      // create a header to send the token
      const header = {
        headers: {
          token,
        },
      }
  
      // make the api call using the token in the header
      const response = await axios.get(url)
      log(response.data)
      return response
    } catch (ex) {
      log(ex)
      return null
    }

  }

  export async function getAllVehicles() {
    const url = createUrl('/vehicles/all')
  
    try {
      // get the current user's token from session storage
      const { token } = sessionStorage
  
      // create a header to send the token
      const header = {
        headers: {
          token,
        },
      }
  
      // make the api call using the token in the header
      const response = await axios.get(url)
      log(response.data)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}

export async function getAllUsers() {
    const url = createUrl('/user/getAllUsers')
  
    try {
      // get the current user's token from session storage
      const { token } = sessionStorage
  
      // create a header to send the token
      const header = {
        headers: {
          token,
        },
      }
  
      // make the api call using the token in the header
      const response = await axios.get(url)
      log(response.data)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
}

export async function getServiceLocations() {
  const url = createUrl('/service_location')

  try {
    // get the current user's token from session storage
    const { token } = sessionStorage

    // create a header to send the token
    const header = {
      headers: {
        token,
      },
    }

    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getAllBookings() {
  const url = createUrl('/booking/allbookings')

  try {
    // get the current user's token from session storage
    const { token } = sessionStorage

    // create a header to send the token
    const header = {
      headers: {
        token,
      },
    }

    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getAllBookingsWithFeedback() {
  const url = createUrl('/booking/allbookingswithfeedback')

  try {
    // get the current user's token from session storage
    const { token } = sessionStorage

    // create a header to send the token
    const header = {
      headers: {
        token,
      },
    }

    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getFeedbacks() {
  const url = createUrl('/feedback/getAllFeedbacks')

  try {
    // get the current user's token from session storage
    const { token } = sessionStorage

    // create a header to send the token
    const header = {
      headers: {
        token,
      },
    }

    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function addServiceLocation(adrLine1, adrLine2,city,state,country,zipCode) {
  const url = createUrl('/service_location')
  const body = {
    adrLine1,
    adrLine2,
    city,state,country,zipCode
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}


export async function addVehicle(vehicleNo,fuelType,passingYear,typeId,brandId,serviceLocationId) {
  const url = createUrl('/vehicles')
  const body = {
    vehicleNo,fuelType,passingYear,typeId,brandId,serviceLocationId
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function uploadImageApi(vehicleId,imageFile) {
  const url = createUrl('/vehicles/images/'+vehicleId)



console.log(imageFile);
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, imageFile);
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

