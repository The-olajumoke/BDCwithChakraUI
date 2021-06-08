import React from "react";
import {createSlice, AsyncThunk} from "@reduxjs/toolkit"
const initialState =[];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItemToCart(state,{payload}){
            console.log(payload)
            state+=payload  
          
        }
    }

})
export const {
    addItemToCart
}=cartSlice.actions;
export default cartSlice.reducer;