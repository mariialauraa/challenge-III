import { useNavigate } from "react-router-dom";
import { BsBagX } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

const ModalCart = () => {
    const navigate = useNavigate()

    const redirectCart = () => {
        navigate('/cart')
    }

    const redirectCheckout = () => {
        navigate('/checkout')
    }

  return (
    <div>
        <div className="flex flex-col gap-6 absolute transform -translate-x-[45%] md:-translate-x-[78%] translate-y-[5%] w-72 md:w-[417px] p-5 bg-white z-[1000]"
        >
            <div className="flex flex-col gap-4 p-2 font-poppins">
                <div className="flex flex-row items-center justify-between gap-4">
                    <h2 className="font-semibold text-2xl">
                        Shopping Cart
                    </h2>
                    <BsBagX className="text-gray-400 w-6 h-5"/>
                </div>
                <div className="border-b border-gray-300 my-2"></div>

                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-28 h-28 bg-[#FAF3EA] rounded-lg"></div>
                        <div className="flex flex-col">
                            <span className="font-normal text-base mb-2">Asgaard sofa</span>
                            <div className="flex flex-col md:flex-row">
                                <span className="font-light text-base">1 <span className="text-xs">x</span></span>
                                <span className="md:ml-4 mt-1 text-sm font-medium text-[#B88E2F]">Rs. 250,000.00</span>
                            </div>                            
                        </div>
                    </div> 
                    <IoIosCloseCircle className="text-gray-400 w-5 h-5"/>                   
                </div>

                <div className="flex justify-between mt-64">
                    <span className="text-base font-normal">Subtotal</span>
                    <span className="text-base font-semibold text-[#B88E2F]">Rs. 520,000.00</span>
                </div>
                <div className="border-b border-gray-300 my-2"></div>

                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <button 
                        onClick={redirectCart}
                        className="flex-1 py-2 px-6 border border-gray-400 rounded-full text-xs font-normal"
                    >
                        Cart
                    </button>
                    <button 
                        onClick={redirectCheckout}
                        className="flex-1 py-2 px-6 border border-gray-400 rounded-full text-xs font-normal"
                    >
                        Checkout
                    </button>
                    <button className="flex-1 py-2 px-6 border border-gray-400 rounded-full text-xs font-normal">
                        Comparison
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalCart