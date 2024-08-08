    import { createSlice } from "@reduxjs/toolkit";
    const initialState={
        isLoggedIn:window.localStorage.getItem('token')?true:false,
        role:window.localStorage.getItem('role')||null,
        username:window.localStorage.getItem('username')
    }
    export const loginSlice= createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            console.log(action)
            state.isLoggedIn=true;
            state.role=action.payload.role;
            state.username=action.payload.username
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.role=null;
            state.username='';
            window.localStorage.clear()
            
        }
    }
    })
    export const {setUser,logout}=loginSlice.actions
    const loginReducer=loginSlice.reducer
    export default loginReducer   