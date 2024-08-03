import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProductsValues } from '../../types/product_types'

const ShopProducts = () => {
    const [products, setProducts] = useState<IProductsValues[]>([])
    const [currentPage, setcurrentPage] = useState(1)
    const productsPerPage = 12

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data/products.json')
                const data = await response.json()
                setProducts(data.products)
            } catch (error) {
                console.error('Erro ao buscar produtos', error)
            }
        }

        fetchProducts()
    }, [])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber: number) => {
        setcurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }        

    const totalPages = Math.ceil(products.length / productsPerPage)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-8 justify-center mt-12'>
                {currentProducts.map(product => (
                    <div 
                        key={product.id}
                        className='p-4 relative w-[285px] mx-auto'
                    >
                        <Link 
                            to={`/product/${product.id}`} 
                            className='block h-full'
                            onClick={scrollToTop}
                        >
                            <img 
                                src={product.images.mainImage} 
                                alt={product.title} 
                                className='w-full h-48 object-cover'
                            />
                            {product.discountPercentage > 0 && (
                                <span className='absolute top-2 right-2 bg-red-500 text-white text-xs px-1 py-3 rounded-full font-poppins'>
                                    -{Math.round(product.discountPercentage * 100)}%
                                </span>
                            )}
                            {product.new && (
                                <span className='absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-3 rounded-full font-poppins'>
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
                                    className={`px-3 md:px-4 py-2 rounded ${
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