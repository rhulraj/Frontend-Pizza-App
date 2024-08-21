import { useState } from "react";
import AddProductPresentation from "./AddProductPresentation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../../Redux/Slices/ProductSlice";


function AddProduct() {
    
    const[ isAdmin, setIsAdmin ] = useState(false)
    const role = useSelector((state) => state.auth.role)
    
    if(role === "ADMIN"){
       setIsAdmin(true)
    }
    const dispatch =useDispatch()

    const [productState, setProduct] =useState({
        productName: "",
        description: "",
        productImage: "",
        price: '',
        category :"",
        quantity:"",
    })
    function handleUserInput(e){
        const {name, value} = e.target
      setProduct({
          ...productState,
          [name]: value
      })
        
       
    }

    async function handleUserSubmit(e){
        e.preventDefault()
        console.log(productState)

        if(!productState.productName || !productState.description || !productState.price ||  !productState.quantity){
            toast.error("Missing values from the form")
            return;
        }
        console.log(productState.productName.length);
        console.log(productState.description.length)
        if(productState.productName.length < 5 || productState.description.length < 5 ){
            toast.error("Product name and description should be 5 characters");
            return
        }

        const apiResponse = await dispatch(createProducts(productState))
        console.log(apiResponse);
    }
    
    return(
        <>
        <AddProductPresentation handleUserInput ={handleUserInput} handleUserSubmit ={handleUserSubmit} isAdmin={isAdmin}/>
        </>
    )
}

export default AddProduct