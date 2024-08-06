import { useState } from "react";
import toast from "react-hot-toast";
import SignPresentation from "./SignupPresentation";

function Signup(){

const [signUpState, setSignUpState] = useState({
    firstName :'',
    email: '',
    mobileNumber: '',
    password: '',
});

 function handleUserInput(e) {
   const {name, value} = e.target;
    setSignUpState({
        ...signUpState,
        [name]: value
    })
 }

 function handleFormSubmit(e) {
    e.preventDefault(); //prevent the form from reloading the page
    console.log(signUpState)

    //Add validation for the form input
    if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName){
        toast.error("Missing values from the form")
        return;
    }
    if(signUpState.firstName.length < 5){
        toast.error("First name should be atleast 5 characters long and maximum 20 characters long")
        return;
    }
    if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
        toast.error("Invalid email address")
        return;
    }
    //check mobile number length to be betwwen 10 and 12
    if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12) {
        toast.error("Mobile number should be between 10-12 characters")
        return;
    }
 }

 return(
    <SignPresentation 
    handleFormSubmit ={handleFormSubmit}
    handleUserInput ={handleUserInput}
    />
 )

   
}
 export default Signup