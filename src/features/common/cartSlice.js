import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartItems:[]
}
export const cartSlice=createSlice({
    name:"Cart Slice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            
            state.cartItems.push(action.payload)
        },
        incItemCount:(state,action)=>{
            state.cartItems=state.cartItems.map(item=>{
               if(item.id==action.payload){
                item.count++
               } 
               return item
            })
        },
        decItemCount:(state,action)=>{
            state.cartItems=state.cartItems.map(item=>{
               if(item.id==action.payload){
                item.count--
               } 
               return item
            })
        }
    }    
})
const cartReducer=cartSlice.reducer
export  default cartReducer
export const {addToCart, incItemCount,decItemCount}=cartSlice.actions