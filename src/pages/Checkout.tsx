import HeroCheckout from "../components/Checkout/HeroCheckout";
import FormCheckout from "../components/Checkout/FormCheckout";
import Banner from "../components/Global/Banner";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

const Checkout = () => {
    const { cart } = useProducts()
    const [paymentMethod, setPaymentMethod] = useState("")

    const cartSubtotal = cart.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2)

  return (
    <div>
        <HeroCheckout />
        <div className="my-12 font-poppins">
            <div className="flex flex-col md:flex-row justify-center items-start mt-20">
                <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="font-semibold text-4xl mb-10 mx-auto w-96 px-4 md:px-0">Billing details</h1>
                    <FormCheckout />
                </div>
                
                <section className="flex flex-col mx-auto w-full md:w-1/2 px-4 md:mr-24">
                    <div className="flex flex-col md:mt-16">
                        <div className="flex justify-between">
                            <h2 className="text-xl md:text-2xl font-medium mb-3.5">Product</h2>
                            <h2 className="text-xl md:text-2xl font-medium mb-3.5 text-right">Subtotal</h2>
                        </div>
                        
                        <div className="mb-5">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between mb-3.5">
                                    <div className="text-gray-400 font-normal text-sm md:text-base">
                                        <p>
                                            {item.title}
                                            <span className="text-black font-medium text-xs pl-3">x</span>
                                            <span className="text-black font-medium text-xs px-2.5">{item.quantity}</span>
                                        </p>                                        
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm md:text-base font-light">
                                            Rs. {(item.salePrice * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-normal text-base">Subtotal</p>
                            <p className="font-light text-base text-right">Rs. {cartSubtotal}</p>
                        </div>
                        <div className="flex justify-between mt-6">
                            <p className="font-normal text-base">Total</p>
                            <p className="font-bold text-2xl text-[#B88E2F] text-right">Rs. {cartSubtotal}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-300 mt-10"></div>
                    
                    <div className="mt-10 font-poppins">
                        <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center">
                                    <input 
                                    type="radio" 
                                    id="directBankTransfer" 
                                    value="Direct Bank Transfer" 
                                    name="paymentMethod" 
                                    className="mr-2"
                                    onClick={() => setPaymentMethod("Direct Bank Transfer")}
                                    />
                                    <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
                                </div>
                                {paymentMethod === "Direct Bank Transfer" && (
                                    <p className="text-sm text-gray-400 mt-2">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                )}
                                <div className="flex items-center">
                                    <input 
                                    type="radio" 
                                    id="cashOnDelivery" 
                                    value="Cash On Delivery" 
                                    name="paymentMethod" 
                                    className="mr-2"
                                    onClick={() => setPaymentMethod("Cash On Delivery")}
                                    />
                                    <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-poppins text-base font-light">
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.  
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            className="w-80 h-16 border border-black rounded-2xl flex items-center justify-center px-4 mt-10 text-base font-normal hover:bg-black hover:text-white transition-all"
                        >
                            Place order
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <Banner />
    </div>
  )
}

export default Checkout;
