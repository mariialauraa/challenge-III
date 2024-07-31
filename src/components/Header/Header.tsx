import { FaRegUser } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import Logo from '../../assets/logo_furniro.svg'
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import ModalCart from "../Cart/ModalCart";

const Header = () => {
    const { logout } = useAuth()

    const[openModalCart, setOpenModalCart] = useState(false)

  return (
    <div className="bg-white w-full">
        <div className="max-w-[90rem] mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center p-4">
            <div className="flex items-center mb-4 md:mb-0 cursor-pointer">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className="flex flex-wrap md:flex-nowrap gap-4 font-poppins font-medium mx-8">
                <Link to="/" className="text-black mr-14">Home</Link>
                <Link to="/shop" className="text-black mr-14">Shop</Link>
                <Link to="/" className="text-black mr-14">About</Link>
                <Link to="/contact" className="text-black">Contact</Link>
            </nav>
            <div className="flex items-center gap-16 md:gap-6 cursor-pointer mt-6 md:mt-0">
                <FaRegUser className="w-6 h-5"/>
                <div>
                    <AiOutlineShoppingCart 
                        onClick={() => setOpenModalCart((prev) => !prev)} 
                        aria-haspopup="true"
                        aria-expanded={openModalCart ? "true" : "false"}
                        className="w-7 h-7"
                    />
                    {openModalCart && <ModalCart />}
                </div>
                <IoLogOutOutline onClick={logout} className="w-7 h-7"/>
            </div>
        </div>
    </div>
  )
}

export default Header