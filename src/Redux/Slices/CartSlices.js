import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstanse from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState ={
    cartData: ''
}
export const addProductToCart = createAsyncThunk('/cart/addProducts', async (productId) =>{
    try {        
        const response =   axiosInstanse.post(`/carts/add/${productId}`);
        console.log(response)
        toast.promise(response,{
            success: 'Product added successfully',
            loading: 'Adding product to cart',
            error: "Something went wrong cannot add product to cart"
        });
        const apiResponse = await response
        return apiResponse
     } catch(error) {
        console.log(error)
     }
})

export const removeProductToCart = createAsyncThunk('/cart/removeProducts', async (productId) =>{
    try {        
        const response =   axiosInstanse.post(`/carts/remove/${productId}`);
        console.log(response)
        toast.promise(response,{
            success: 'Product removed successfully',
            loading: 'Removing product from cart',
            error: "Something went wrong cannot remove product from cart"
        });
        const apiResponse = await response
        return apiResponse
     } catch(error) {
        console.log(error)
     }
})

export const getCartDetails = createAsyncThunk('/cart/getDetails', async (productId) =>{
    try {        
        const response =   axiosInstanse.get(`/carts`);
        console.log(response)
        toast.promise(response,{
            success: 'Cart fetched successfully',
            loading: 'Fetching cart details',
            error: "Something went wrong cannot fetch cart"
        });
        const apiResponse = await response
        return apiResponse
     } catch(error) {
        console.log(error)
     }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(getCartDetails.fulfilled, (state, action) => {
            state.cartData = action?.payload?.data?.data;
        })
    }
})

export default cartSlice.reducer;