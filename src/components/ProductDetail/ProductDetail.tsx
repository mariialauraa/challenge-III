import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Icolors } from '../../types/product_types';
import { useState } from "react";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>()
    const { getSingleProduct } = useProducts()

    if (!id) {
        return <div>Product not found</div>;
    }

    const product = getSingleProduct(parseInt(id))

    if (!product) {
        return <div>Product not found</div>;
    }

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar key={index} className="text-yellow-500" />
                ))}
            </>
        )
    }

    const renderColor = (colors: Icolors[]) => {
        return colors.map((color, index) => (
            <div key={index} className="flex items-center mt-2">
                <span className="inline-block w-6 h-6 rounded-full" style={{ backgroundColor: color.hex }}></span>
            </div>
        ))
    }

    const SizeSelector: React.FC<{ sizes: string[] }> = ({ sizes }) => {
        const [selectedSize, setSelectedSize] = useState<string | null>(sizes[0]);

        const handleSize = (size: string) => {
            setSelectedSize(size)
        }

        return (
            <div>
                <div className="flex space-x-2 mt-2 gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => handleSize(size)}
                            className={`w-8 h-8 rounded font-poppins ${
                                selectedSize === size ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-black'
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="bg-[#F9F1E7] py-7 px-8 mb-8">
                <p className="flex items-center gap-4 font-poppins font-normal text-base">
                    <span className="text-gray-400">Home</span>
                    <IoIosArrowForward />
                    <span className="text-gray-400">Shop</span>
                    <IoIosArrowForward />
                    <span className="relative pl-4">
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-gray-400" />
                        {product.title}
                    </span>
                </p>
            </div>
            <div className="flex">
                <div className="bg-[#F9F1E7] w-[432px] h-[500px] rounded-[10px] flex items-center justify-center overflow-hidden">
                    <img 
                        src={product.images.mainImage} 
                        alt={product.title} 
                        className="w-96 h-96 object-contain"
                    />
                </div>
                <div className="ml-8 font-poppins">
                    <h1 className="text-4xl font-normal mb-2 mt-4">{product.title}</h1>
                    <span className="text-gray-400 font-medium text-2xl">R$ {product.salePrice}</span>
                    <div className="flex items-center mt-2">
                        {renderStars(product.rating)}
                    </div>
                    <p className="mt-2">{product.description.short}</p>
                    <h3 className="mt-5 text-base font-normal text-gray-400">Size</h3>
                    <SizeSelector sizes={product.sizes} />
                    <div className="mt-5">
                        <h3 className="text-base font-normal text-gray-400">Color</h3>
                        <div className="flex gap-4">
                            {renderColor(product.colors)}
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 font-poppins mt-8">
                        <div className="w-32 h-16 border border-gray-300 rounded-xl flex items-center justify-between px-4">
                            <button className="text-base font-normal">-</button>
                            <span className="text-base font-medium">1</span>
                            <button className="text-base font-normal">+</button>
                        </div>
                        <button className="w-52 h-16 border border-black rounded-2xl text-xl font-normal">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
