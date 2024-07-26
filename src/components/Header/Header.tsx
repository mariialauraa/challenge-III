import { FaRegUser } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from '../../assets/logo_furniro.svg'

const Header = () => {

  return (
    <div className="bg-white w-full">
        <div className="max-w-[90rem] mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center p-4">
            <div className="flex items-center mb-4 md:mb-0 cursor-pointer">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className="flex flex-wrap md:flex-nowrap gap-4 font-poppins font-medium">
                <a href="/" className="text-black mr-14">Home</a>
                <a href="/shop" className="text-black mr-14">Shop</a>
                <a href="/" className="text-black mr-14">About</a>
                <a href="/contact" className="text-black">Contact</a>
            </nav>
            <div className="flex items-center gap-12 md:gap-6 cursor-pointer py-2">
                <FaRegUser className="w-6 h-5"/>
                <AiOutlineShoppingCart className="w-7 h-7"/>
            </div>
        </div>
    </div>
  )
}

export default Header