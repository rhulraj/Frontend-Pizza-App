import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstanse from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState ={
    productData: []
}

export const createProducts = createAsyncThunk('admin/addproduct/', async(data)=>{
    try {
       const products = axiosInstanse.post('/products', data);
       toast.promise(products, {
         loading: 'loading....',
         error: 'Something went cannot load products',
         success: 'Product created successfully',
       });
       const apiResponse = await products;
       console.log(apiResponse)
       return apiResponse
    }catch(error){
       console.log(error)
       toast.error('something went wrong')
    }
})

export const getAllProducts = createAsyncThunk('products/getAll', async()=>{
       try {
          const products = axiosInstanse.get('/products');
          toast.promise(products, {
            loading: 'loading all the products',
            error: 'Something went cannot load products',
            success: 'Products loaded successfully',
          });
          const apiResponse = await products;
          console.log(apiResponse)
          return apiResponse
       }catch(error){
          console.log(error)
          toast.error('something went wrong')
       }
});

export const getProductDetails = createAsyncThunk('products/getDetails', async(id)=>{
    try {
       const product = axiosInstanse.get(`/products/${id}`);
       toast.promise(product, {
         loading: 'loading  the products',
         error: 'Something went cannot load product',
         success: 'Product loaded successfully',
       });
       const apiResponse = await product;
       console.log(apiResponse)
       return apiResponse
    }catch(error){
       console.log(error)
       toast.error('something went wrong')
    }
});


const productSlice = createSlice({
    name : 'Products',
    initialState,
    reducers: {},
    extraReducers : (builder) =>{
        builder
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.productData = action?.payload?.data?.data;
        }
        // .addCase(createProducts.fulfilled)
     )
    }
})

export default productSlice.reducer