import { TbTrashFilled } from "react-icons/tb";

const ProductCart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8">
        <div className="w-full md:w-3/4">
            <div className="bg-[#F9F1E7]">
                <div className="grid grid-cols-1 md:grid-cols-4 p-4 font-poppins">
                    <div className="font-medium text-base text-center mb-2 md:mb-0">Product</div>
                    <div className="font-medium text-base text-center mb-2 md:mb-0">Price</div>
                    <div className="font-medium text-base text-center mb-2 md:mb-0">Quantity</div>
                    <div className="font-medium text-base text-center">Subtotal</div>
                </div>    
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-center p-4 font-poppins">
                <div className="flex items-center space-x-4">
                    <div className="w-[108px] h-[105px] bg-[#F9F1E7] rounded"></div>
                    <span className="text-gray-400 font-normal text-base">Asgaard sofa</span>
                </div>
                <div className="text-center text-gray-400 font-normal text-base p-8 md:p-0">Rs. 250,000.00</div>
                <div className="flex items-center justify-center space-x-4">
                    <div className="w-24 h-12 border border-gray-300 rounded-xl flex items-center justify-between px-4">
                        <button className="text-base font-normal">-</button>
                        <span className="text-base font-medium">1</span>
                        <button className="text-base font-normal">+</button>
                    </div>
                </div>
                <div className="text-center p-8 md:p-0">
                    <div className="flex items-center justify-center">
                        <span className="font-normal text-base mx-auto">Rs. 250,000.00</span>
                        <div className="text-[#B88E2F]">
                            <TbTrashFilled/>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-8">
            <div className="bg-[#F9F1E7] p-8 rounded">
                <h3 className="text-center font-poppins font-semibold text-3xl">Cart Totals</h3>
                <div className="flex justify-between mt-12 lg:px-4">
                    <span className="font-poppins font-medium text-base">Subtotal</span>
                    <span className="font-poppins font-normal text-base text-gray-400">Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between mt-10 lg:px-4">
                    <span className="font-poppins font-medium text-base">Total</span>
                    <span className="font-poppins font-medium text-xl text-[#B88E2F]">Rs. 250,000.00</span>
                </div>
                <div className="flex justify-center mb-10">
                    <div className="w-56 h-14 border border-black rounded-2xl flex items-center justify-center px-4 mt-10">
                        <button className="font-poppins text-xl font-normal">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart