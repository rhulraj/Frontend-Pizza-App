import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstanse from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
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

 export const login = createAsyncThunk('auth/login', async (data) =>{
    console.log("incoming data to the thunk", data);
    try{
      const response =   axiosInstanse.post('/auth/login',data)
      console.log(response)
      toast.promise(response,{
          success: (resolvedPromise)=>{
              return resolvedPromise?.data?.message
          },
          loading: 'Hold back tight, we are registering your id...',
          error: "ohh No! Something went wrong . please try again"
      });
      const apiResponse = await response
      console.log(apiResponse)
      return apiResponse
   } catch(error) {
      console.log(error)
   }
})

export const logout = createAsyncThunk('auth/logout', async (data) =>{
    console.log("incoming data to the thunk", data);
    try{
      const response =   axiosInstanse.post('/auth/logout',data)
      console.log(response)
      toast.promise(response,{
          success: (resolvedPromise)=>{
              return resolvedPromise?.data?.message
          },
          loading: 'Logging out....',
          error: "ohh No! Something went wrong . please try again"
      });
      const apiResponse = await response
      console.log(apiResponse)
      return apiResponse
   } catch(error) {
      console.log(error)
   }
})
 
const AuthSlice = createSlice({
    name :'auth',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            //reducer which will execcute when the login thunk is fulfilled
            state.isLoggedIn =true;
            state.role = action.payload.data.userRole,
            state.data = action?.payload?.data?.data.userData,

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.data?.data.userRole);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data.userData));
        })
        .addCase(logout.fulfilled, (state)=>{
            //reducer which will execute when the logout thunk is fulilled
            localStorage.setItem('isLoggedIn', false);
            localStorage.setItem('role', "");
            localStorage.setItem('data', JSON.stringify({}));
            state.isLoggedIn = false;
            state.role = '' ;
            state.data = {};
        })
    }
})

export default AuthSlice.reducer;