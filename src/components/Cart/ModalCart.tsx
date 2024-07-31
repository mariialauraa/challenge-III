import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { BsBagX } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalCartProps {
    onClose: () => void;
}

const ModalCart: React.FC<ModalCartProps> = ({ onClose }) => {
    const { cart, removeCart } = useProducts()
    const navigate = useNavigate()

    const redirectCart = () => {
        navigate('/cart')
        onClose()
    }

    const redirectCheckout = () => {
        navigate('/checkout')
        onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
        const modalElement = document.querySelector('.modal-container')
        if (modalElement && !modalElement.contains(e.target as Node)) {
            onClose()
        }
    }

    const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscKey)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [])

  return (
    <div className="absolute z-[1000]">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="modal-container flex flex-col gap-6 absolute transform -translate-x-[45%] md:-translate-x-[78%] translate-y-[5%] w-72 md:w-[417px] p-5 bg-white z-[10001]"
        >
            <div className="flex flex-col gap-4 p-2 font-poppins">
                <div className="flex flex-row items-center justify-between gap-4">
                    <h2 className="font-semibold text-2xl">
                        Shopping Cart
                    </h2>
                    <BsBagX className="text-gray-400 w-6 h-5"/>
                </div>
                <div className="border-b border-gray-300 my-2"></div>

                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id} className="flex flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-28 h-28 rounded-lg">
                                    <img src={item.images.mainImage} alt={item.title} className="w-full h-full object-contain rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-normal text-base mb-2">{item.title}</span>
                                    <div className="flex flex-col md:flex-row">
                                        <span className="font-light text-base">{item.quantity} <span className="text-xs">x</span></span>
                                        <span className="md:ml-4 mt-1 text-sm font-medium text-[#B88E2F]">
                                            Rs. {(item.salePrice * item.quantity).toFixed(2)}
                                        </span>
                                    </div>                            
                                </div>
                            </div> 
                            <IoIosCloseCircle 
                                className="text-gray-400 w-5 h-5"
                                onClick={() => removeCart(item.id)}
                            />                   
                        </div>                        
                    ))
                ) : (
                    <div className="text-center text-gray-500">Seu carrinho está vazio.</div>
                )}

                {cart.length > 0 && (
                    <div>
                        <div className="flex justify-between mt-20">
                            <span className="text-base font-normal">Subtotal</span>
                            <span className="text-base font-semibold text-[#B88E2F]">
                                Rs. {cart.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2)}
                            </span>
                        </div>
                        <div className="border-b border-gray-300 my-6"></div>

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
                )}
            </div>
        </div>
    </div>
  )
}

export default ModalCart