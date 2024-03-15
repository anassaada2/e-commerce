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
        },
        updateStart : (state)=>{
            state.loading=true;
            state.error=null;
        },
        updateSuccess : (state , action)=>{
           state.currentUser=action.payload;
           state.loading=false;
           state.error=false ;
        },
        updateFailure : (state , action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserStart : (state)=>{
            state.loading=true;
            state.error=false;
        },
        deleteUserSuccess : (state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        },
        deleteUserFailure : (state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})
export const {signinInFailure ,signinInSuccess ,signinStart,updateFailure,updateStart,updateSuccess,deleteUserFailure,deleteUserStart,deleteUserSuccess} = userSlice.actions;
export default userSlice.reducer ;