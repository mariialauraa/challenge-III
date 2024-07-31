import { useProducts } from "../../hooks/useProducts";
import { TbTrashFilled } from "react-icons/tb";

const ProductCart = () => {
    const { cart, addCart, removeCart } = useProducts()

    const handleIncrementQuantity = (id: number) => {
        addCart(id, 1)
    }

    const handleDecrementQuantity = (id: number, quantity: number) => {
        if (quantity > 1) {
            addCart(id, -1)
        }
    }

    const cartTotal = cart.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2)

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

            {cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center p-4 font-poppins">
                        <div className="flex items-center space-x-4">
                            <div className="w-[108px] h-[105px] rounded">
                                <img src={item.images.mainImage} alt={item.title} className="w-full h-full object-contain rounded" />
                            </div>
                            <span className="text-gray-400 font-normal text-base">{item.title}</span>
                        </div>
                        <div className="text-center text-gray-400 font-normal text-base p-8 md:p-0">Rs. {item.salePrice.toFixed(2)}</div>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-24 h-12 border border-gray-300 rounded-xl flex items-center justify-between px-4">
                                <button 
                                    className={`text-base font-normal ${item.quantity === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`}
                                    onClick={() => handleDecrementQuantity(item.id, item.quantity)}
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>
                                <span className="text-base font-medium">{item.quantity}</span>
                                <button 
                                    className="text-base font-normal"
                                    onClick={() => handleIncrementQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="text-center p-8 md:p-0">
                            <div className="flex items-center justify-center">
                                <span className="font-normal text-base mx-auto">Rs. {(item.salePrice * item.quantity).toFixed(2)}</span>
                                <div className="text-[#B88E2F]">
                                    <TbTrashFilled
                                        onClick={() => removeCart(item.id)}
                                        className="cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>            
                ))
            ) : (
                <div className="text-center font-poppins text-gray-500 pt-8">Seu carrinho está vazio.</div>
            )}
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-8">
            <div className="bg-[#F9F1E7] p-8 rounded">
                <h3 className="text-center font-poppins font-semibold text-3xl">Cart Totals</h3>
                <div className="flex justify-between mt-12 lg:px-4">
                    <span className="font-poppins font-medium text-base">Subtotal</span>
                    <span className="font-poppins font-normal text-base text-gray-400">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between mt-10 lg:px-4">
                    <span className="font-poppins font-medium text-base">Total</span>
                    <span className="font-poppins font-medium text-xl text-[#B88E2F]">Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-center mb-10">
                    <button className="w-56 h-14 border border-black rounded-2xl flex items-center justify-center px-4 mt-10 font-poppins text-xl font-normal hover:bg-black hover:text-white transition-all"
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart