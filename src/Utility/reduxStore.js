import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


// main store
const reduxStore=configureStore({

    reducer:{
        cart:cartReducer
    }

})


export default reduxStore