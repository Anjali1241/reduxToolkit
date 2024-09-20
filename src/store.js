import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./Slices/CounterSlice";
import FetchApiReducer from "./Slices/FetchApiSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer ,
        fetchApi:FetchApiReducer
    }
})
export default store;