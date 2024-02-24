import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  // name of slice (must be unique)
  name: 'auth',
  initialState: {

    status: false,
    role:"Customer"


  },
  reducers: {
    // action: action handler
    login: (state) => {
      state.status = true
    },
    // action: action handler
    logout: (state) => {
      state.status = false
    },
    roleAdmin:(state)=>{
        state.role="Admin"
    },
    roleCustomer:(state)=>{
        state.role="Customer"
    }
  },
})

export const { login, logout,roleAdmin,roleCustomer } = authSlice.actions
export default authSlice.reducer
