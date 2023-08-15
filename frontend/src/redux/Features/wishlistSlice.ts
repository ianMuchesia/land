import { typeProperties } from "@/@types/@types"
import { createSlice } from "@reduxjs/toolkit"




type wishProperty={
    itemsList:typeProperties[],
    total:number,
    
}
const initialWishState:wishProperty = {
    itemsList: [],
    total:0,
    
}


const wishSlice = createSlice({
    name:"wish",
    initialState:initialWishState,
    reducers:{
        addItem(state, action){
            const newItem:typeProperties = action.payload

            const itemExists = state.itemsList.find(item=>item._id === newItem._id)


            if(itemExists){
                return;
            }
            state.itemsList.push(newItem)
            state.total = state.itemsList.length
        },
        removeItem(state,action){
            const selectedItem:typeProperties = action.payload

            const newList = state.itemsList.filter(item=>item._id === selectedItem._id)

            state.itemsList = newList
            state.total = state.itemsList.length
        }
    }
    

})


export const { addItem , removeItem} = wishSlice.actions


export default wishSlice.reducer