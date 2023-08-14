import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
const initialState = {
    toggle:false,
}

const toggleSlice = createSlice({
  name: 'toggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openToggle(state){
        state.toggle = true
    },
    closeToggle(state){
        state.toggle = false
    }
  
  },
})

export const { openToggle , closeToggle } = toggleSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default toggleSlice.reducer