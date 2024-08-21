import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import ProductReducer from "./Slices/ProductSlice";
import CartSlicesReducer from "./Slices/CartSlices";

export const store = configureStore({
    reducer: {
       auth : AuthSliceReducer,
       Products : ProductReducer,
       cart : CartSlicesReducer
     },
    devTools: true
});