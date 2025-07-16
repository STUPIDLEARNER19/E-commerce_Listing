import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cartReducer: cartSlice.reducer, //this reducer is accessing the state var present inside cartSlice and converting them into obejcts and storing it in cartReducer
    }
});
export default store;