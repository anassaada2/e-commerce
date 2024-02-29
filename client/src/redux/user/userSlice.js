import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser : null ,
  loading : false ,
  error : null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signinStart : (state)=>{
            state.loading =true; 
            state.error = null ;
        },
        signinInSuccess : (state , action)=>{
            state.currentUser =action.payload;
            state.error = null ;
            state.loading = false;
        },
        signinInFailure : (state , action)=>{
            state.currentUser = null ;
            state.loading = false ; 
            state.error = action.payload ;
        }
    }
})
export const {signinInFailure ,signinInSuccess ,signinStart} = userSlice.actions;
export default userSlice.reducer ;