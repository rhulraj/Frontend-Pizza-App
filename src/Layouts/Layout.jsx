import PizzaLogo  from '../assets/Images/pizzaLogo.png'
import Footer from '../Components/Footer'

function Layout({children}){
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
            </nav>

            {children}
            
            <Footer />
        </div>
    )
}
export default Layout