    import { createSlice } from "@reduxjs/toolkit";
    const initialState={
        isLoggedIn:window.localStorage.getItem('token')?true:false,
        role:window.localStorage.getItem('role') || null
    }
    export const loginSlice= createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.isLoggedIn=true;
            state.role=action.payload.role
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.role=null
            window.localStorage.clear()
        }
    }
    })
    export const {setUser,logout}=loginSlice.actions
    const loginReducer=loginSlice.reducer
    export default loginReducer   