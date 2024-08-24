import {  useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import orderSuccess from '../../assets/Images/ordered-success.png'

function OrderSuccess(){

    const navigate = useNavigate()
    return (
        <>
        <Layout>
            <div className="flex flex-col justify-center items-center py-28">
              <img src={orderSuccess} alt="orderSuccess" 
              width={400}
              height={400}/>
              <p className="text-lg font-semibold">
                Your order has been placed successfully
              </p>
              
              <button 
              onClick={() => navigate('/')}
              className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
              >
                Go Back Home
              </button>
            </div>
        </Layout>
        </>
    )
}

export default OrderSuccess;