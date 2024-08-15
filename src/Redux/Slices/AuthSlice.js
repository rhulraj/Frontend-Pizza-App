import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstanse from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
};
 export const createAccount = createAsyncThunk('auth/createAccount', async (data) =>{
      console.log("incoming data to the thunk", data);
      try{
        const response =   axiosInstanse.post('/users',data)
        console.log(response)
        toast.promise(response,{
            success: (resolvedPromise)=>{
                return resolvedPromise?.data?.message
            },
            loading: 'Hold back tight, we are registering your id...',
            error: "ohh No! Something went wrong . please try again"
        });
        const apiResponse = await response
        return apiResponse
     } catch(error) {
        console.log(error)
     }
 })
const AuthSlice = createSlice({
    name :'auth',
    initialState,
    reducers:{},
})

export default AuthSlice.reducer;