import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartItems:[]
}
export const cartSlice=createSlice({
    name:"Cart Slice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{state.cartItems.push(action.payload)}
    }
})
const cartReducer=cartSlice.reducer
export  default cartReducer
export const {addToCart}=cartSlice.actions