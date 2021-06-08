import {configureStore } from "@reduxjs/toolkit"
import cartReducer from "../redux/Cart/cartSlice"

export default configureStore({
    reducer:{
        cart:cartReducer
    },
});
