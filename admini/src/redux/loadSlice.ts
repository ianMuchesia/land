import { createSlice } from "@reduxjs/toolkit"


const initialLoadState = {
    formLoader: false,
    modalLoader: false,

}


const loadSlice = createSlice({
    name: "load",
    initialState: initialLoadState,
    reducers:{
        setFormLoader(state){
            state.formLoader = true;
        },
        setModalLoader(state){
           state.modalLoader = true;     
        },
        setCloseLoader(){
            return initialLoadState
        }
    }
})
   

export const {setFormLoader, setCloseLoader , setModalLoader} = loadSlice.actions


export default loadSlice.reducer