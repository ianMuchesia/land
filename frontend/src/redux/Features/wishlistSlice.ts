import { WishlistProperty, WishlistResponse, typeProperties } from "@/@types/@types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"



const initialWishState={
    itemsList:[] as WishlistProperty[],
    total:0
}

//async thunk functions
 
export const fetchWishlist = createAsyncThunk<WishlistResponse>('wishlists/fetchWishlist',async()=>{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist`, {withCredentials:true})

    return data
})



export const addToWishlist = createAsyncThunk('wishlists/addToWishlist',async(property:typeProperties)=>{
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist`,{property:property._id}, {withCredentials:true})

    return data
})


export const removeFromWishlist = createAsyncThunk('wishlists/removeFromWishlist',async(propertyId:string)=>{
    const {data} = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/wishlist/${propertyId}`, {withCredentials:true})

    return { propertyId, success: data.success };
})



const wishSlice = createSlice({
    name:"wish",
    initialState:initialWishState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWishlist.fulfilled,(state,action)=>{
            state.itemsList = action.payload.wishlist.properties;
            state.total = state.itemsList.length;
        })
        builder.addCase(addToWishlist.fulfilled,(state,action)=>{
            if (action.payload.success) {
                // Prevent duplicates by checking if the item already exists
                if (!state.itemsList.some((item) => item.property._id === action.payload.property)) {
                  state.itemsList.push(action.payload);
                  state.total = state.itemsList.length; // Update the total items count
                  toast.success("Added to wishlist")
                }
                
              }
             
            })
    
        builder.addCase(removeFromWishlist.fulfilled,(state,action)=>{
            if (action.payload.success) {
                state.itemsList = state.itemsList.filter((item) => item.property._id !== action.payload.propertyId);
                state.total = state.itemsList.length; // Update the total items count
                toast.success("Removed from wishlist")
              }else{
                toast.error("Failed to remove from wishlist")

              }
        })
    }
    

})



export const {} = wishSlice.actions


export default wishSlice.reducer