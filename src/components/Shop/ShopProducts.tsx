import { useState } from 'react'
import productsData from '../../../public/data/products.json'
import { Link } from 'react-router-dom'

const ShopProducts = () => {
    const [currentPage, setcurrentPage] = useState(1)
    const productsPerPage = 12

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = productsData.products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber: number) => setcurrentPage(pageNumber)

    const totalPages = Math.ceil(productsData.products.length / productsPerPage)

    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-8 justify-center mt-12'>
                {currentProducts.map(product => (
                    <div 
                        key={product.id}
                        className='p-4 relative w-[285px] h-[446px] mx-auto'
                    >
                        <Link to={`/product/${product.id}`} className='block h-full'>
                            <img 
                                src={product.images.mainImage} 
                                alt={product.title} 
                                className='w-full h-48 object-cover'
                            />
                            {product.discountPercentage > 0 && (
                                <span className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-3 rounded-full'>
                                    -{Math.round(product.discountPercentage * 100)}%
                                </span>
                            )}
                            {product.new && (
                                <span className='absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-3 rounded-full'>
                                    New
                                </span>
                            )}
                            <div className='p-4 bg-[#F4F5F7]'>
                                <h3 className='font-semibold text-lg'>
                                    {product.title}
                                </h3>
                                <p className='text-gray-500 text-xs font-medium'>
                                    {product.description.short}
                                </p>
                                <div className='flex items-center space-x-4 mt-4'>
                                    <span className='font-semibold text-lg'>
                                        R$ {product.salePrice.toFixed(2)}
                                    </span>
                                    {product.normalPrice && (
                                        <span className='font-normal text-xs text-gray-400 line-through'>
                                            R$ {product.normalPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-8'>
                <nav>
                    <ul className='flex list-none font-poppins text-sm'>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`mx-2`}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`px-4 py-2 rounded ${
                                        index + 1 === currentPage
                                            ? 'bg-[#B88E2F] text-white'
                                            : 'bg-[#F9F1E7] text-black'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        {currentPage < totalPages && (
                            <li className='mx-1'>
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    className='px-3 py-2 rounded bg-[#F9F1E7] text-black'
                                >
                                    Next
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ShopProducts