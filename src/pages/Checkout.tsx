import HeroCheckout from "../components/Checkout/HeroCheckout";
import FormCheckout from "../components/Checkout/FormCheckout";
import Banner from "../components/Global/Banner";
import { useState } from "react";

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("")

  return (
    <div>
        <HeroCheckout />
        <div className="my-12 font-poppins">
            <div className="flex flex-col md:flex-row justify-center items-start mt-20 space-y-10 md:space-y-0 md:space-x-10">
                <div className="flex flex-col w-full md:w-1/2">
                    <h1 className="font-semibold text-4xl mb-10 mx-auto w-96">Billing details</h1>
                    <FormCheckout />
                </div>
                <section className="flex flex-col max-w-[608px] w-full md:w-1/2">
                    <div className="flex gap-10 justify-between">
                        <div className="font-poppins">
                            <h2 className="text-2xl font-medium mb-3.5">Product</h2>
                            <p className="text-gray-400 font-normal text-base">
                                Asgaard sofa
                                <span className="text-black font-medium text-xs mb-5 pl-3">x</span>
                                <span className="text-black font-medium text-xs mb-5 pl-2.5">1</span>
                            </p>
                            <p className="mt-5">Subtotal</p>
                            <p className="mt-5">Total</p>
                        </div>
                        <div className="font-poppins">
                            <h2 className="text-2xl font-medium mb-3.5">Subtotal</h2>
                            <p className="text-base font-light mb-5">Rs. 250,000.00</p>
                            <p className="text-base font-light mb-5">Rs. 250,000.00</p>
                            <p className="text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</p>
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
                        <div className="w-80 h-16 border border-black rounded-2xl flex items-center justify-center px-4 mt-10">
                            <button className="text-base font-normal">Place order</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Banner />
    </div>
  )
}

export default Checkout;
