import { createSlice } from "@reduxjs/toolkit";
type notification ={
    type:'error' | 'info' | 'success' | 'warning';
    message:string;
    open:boolean;
}

const initialState:notification={
    message:"",
    type:"info",
    open:false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    
    reducers:{
        showNotification(state, action){
            state.message = action.payload.message;
            state.open = true;
            state.type = action.payload.type;
        },
        closeNotification(state){
            state.open = false
        },
    }
       
})



export const { showNotification, closeNotification} = uiSlice.actions

export default uiSlice.reducer

