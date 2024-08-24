import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstanse from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState ={
    orderData: null
}

export const placeOrder = createAsyncThunk('/order/placeOrder', async (data) =>{
    try {        
        const response =   axiosInstanse.post(`/order`,data);
        console.log(response)
        toast.promise(response,{
            success: 'Order created successfully',
            loading: 'Creating order',
            error: "Something went wrong cannot add product to cart"
        });
        const apiResponse = await response
        return apiResponse
     } catch(error) {
        console.log(error)
     }
})

const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
       builder.addCase(placeOrder.fulfilled, (state, action) =>{
        state.orderData = action?.payload?.data
       })
    }
})

export default OrderSlice.reducer