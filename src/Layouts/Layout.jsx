import { useDispatch, useSelector } from 'react-redux'
import PizzaLogo  from '../assets/Images/pizzaLogo.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'

function Layout({children}){

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const dispatch = useDispatch();

    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout())

    }
    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shawdow-md">

                <div className="flex items-center justify-center">
                    <p>Pizza App</p>
                   <img src={PizzaLogo} width={50} height={50} alt="Pizza logo" />
                </div>
                <div className='hidden md:block'>
                   <ul className='flex gap-4'>
                      
                         <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Menu{' '}</p>
                         </li>

                         <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Services{' '}</p>
                         </li>

                         <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>About{' '}</p>
                         </li>

                   </ul>
               </div>
               <div>
                <ul>
                    <li>
                        {isLoggedIn ? (<Link onClick={handleLogout}>Logout</Link>): (
                            <Link to={'/auth/login'}> Login</Link>
                        )}
                    </li>
                </ul>
               </div>
            </nav>

            {children}
            
            <Footer />
        </div>
    )
}
export default Layout