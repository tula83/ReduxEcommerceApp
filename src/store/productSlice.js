import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const STATUSES=Object.freeze({
     IDLE:"idle",
     ERROR:"error",
     LOADING:"loading"
});

const productSlice=createSlice({
     name:"product",
     initialState:{
         data:[],
         status:STATUSES.IDLE
     },
    
     extraReducers:(builder)=>{

        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status=STATUSES.LOADING
        })
        
        .addCase(fetchProducts.fulfilled,(state,action)=>{
              state.data=action.payload;
              state.status=STATUSES.IDLE;
        })

        .addCase(fetchProducts.rejected,(state,action)=>{
              state.status=STATUSES.ERROR
        })

     },
});

export default productSlice.reducer;

//thunks

 export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
      const resp=await axios.get(`https://fakestoreapi.com/products`)
      const data=resp.data;
      return data;
 })