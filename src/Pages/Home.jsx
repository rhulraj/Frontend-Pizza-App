import IconArrowRight from "../Components/Icons/ArrowRight";
import Layout from '../Layouts/Layout'

import PizzaImage from "../assets/Images/pizza1.png";
import cookingImage from "../assets/Images/Cook1.png"
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFoodIcon from "../assets/Images/orderFood1.png"
import FoodEnjoyIcon from "../assets/Images/foodEnjoy.png"
import FoodPickIcon from "../assets/Images/foodPickup.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";
function Home(){

    const dispatch = useDispatch();

    const {productData} = useSelector((state)=> state.Products)
    console.log(productData)
   

    useEffect(() =>{
        //This is called when components mounts
        dispatch(getAllProducts());
    },[])
    return (
        <Layout>
        <div>
            {/*Hero section */}
            <section
                  className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
                  >
                    <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                         <div className="flex justify-center test-4xl md:justify-normal">
                            <h1 className="pc-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                                Enjoy the Slice {' '}
                            </h1>
                            <h1>
                                😋
                            </h1>

                         </div>
                         <p className="pb-4 text-[#6B7280]">
                            The Pizza App lets you order your favorite pizza from the comfort of your home.
                            Enjoy the best pizza in town with just a few clicks.
                         </p>
                        <button
                            className=" flex items-center px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
                            Order Now 
                            <span className="inline-block ml-3  trasition-transform ease-in-out group-hover:translate-x-2">
                                  <IconArrowRight  />
                            </span>
                        </button>
                    </div>
                    <div>
                        <img src={PizzaImage} 
                        alt="Pizza"
                        width={550}
                        height={550} />
                    </div>

            </section>


            {/* Services Section */}

            <section 
                className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col item-center justify-center rounded-lg lg:w-1/2">
                        <img src={cookingImage} 
                        alt="cooking"
                        width={500}
                        className="rounded-lg ml-8" />

                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                       <div>
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                    Cooked by the best <br /> chefs in the world
                                </h2>
                                <p className="text-base leading-releaxed text-[#6B7280]">
                                    There are many benifitx regarding to that but the main ones are
                                </p>
                            </div>
                       </div>
                       <div className="w-full p-1">
                           <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchCheck className ="text-[#F38339] w-10 h-10 mr-4" />
                              <span className="font-bold title-font">Perfect Taste</span>
                           </div>

                       </div>
                       <div className="w-full p-1">
                           <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchCheck className ="text-[#F38339] w-10 h-10 mr-4" />
                              <span className="font-bold title-font">Prepared quickly</span>
                           </div>

                       </div>
                       <div className="w-full p-1">
                           <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchCheck className ="text-[#F38339] w-10 h-10 mr-4" />
                              <span className="font-bold title-font">Food hygiene guaranteed</span>
                           </div>

                       </div>

                       <div className="px-5 py-4 mx-auto">

                            <div className="flex justify-center py-4">
                                
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full">
                                   
                                </div>
                            </div>
                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                               <div className="flex flex-col items-center text-center p-4 md:w-1/3"> 
                                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                     <img src={OrderFoodIcon} alt="orderfood" />
                                  </div>
                                  <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                        Order Food 
                                    </h2>
                                    <p className="text-base leading-relaxed">
                                       As easy as 1, 2, 3, Just select your favourite pizza and place your order. 
                                    </p>
                                  </div>

                               </div>
                               <div className="flex flex-col items-center text-center p-4 md:w-1/3"> 
                                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                     <img src={FoodPickIcon} alt="orderfood" />
                                  </div>
                                  <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                        Pickup Food
                                    </h2>
                                    <p className="text-base leading-relaxed">
                                      Pick up your order from the newrest store or get it delivered to your doorstep. 
                                    </p>
                                  </div>

                               </div>
                               <div className="flex flex-col items-center text-center p-4 md:w-1/3"> 
                                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                     <img src={FoodEnjoyIcon} alt="orderfood" />
                                  </div>
                                  <div className="flex-grow">
                                    <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                        Enjoy Food 
                                    </h2>
                                    <p className="text-base leading-relaxed">
                                       As soon as you get your order, enjoy the delicious pizza with your loved ones.
                                    </p>
                                  </div>

                               </div>

                            </div>

                       </div>

                    </div>

                </div>


            </section>
            
            { productData && productData.map((product) => <div key={product.id}>{product.productName}</div>)}
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {productData.map((item, key)=> {
                        return (
                            item.inStock && (
                            <div className="p-4 md:w-1/3" key={item.id}>
                                <Link to={`/product/${item._id}`}>
                                <div className="overflow-hidden border rounded-lg border-opacity-60">
                                    <img src={item.productImage} className="object-cover object-center w-full lg:h-48 md:h-36" alt="Pizza Image" />
                                    <div className="p-6 border">
                                        <h2 className="mb-3 text-xs font-medium tracking-widest
                                        text-gray-400 title-font ">
                                            {item.category}
                                        </h2>
                                        <h1 className="mb-3 text-lg font-mediumtext-gray-900 title-font">
                                            {item.productName}
                                        </h1>
                                        <p className="mb-4 text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                        <p className="text-lg font-medium text-gray-900 title-font">
                                            ${item.price}
                                        </p>
                                    </div>
                                    </div></Link>
                            </div>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default Home