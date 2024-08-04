import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProductsValues } from '../../types/product_types'
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";

const ShopProducts = () => {
    const [products, setProducts] = useState<IProductsValues[]>([])
    const [currentPage, setcurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(12)
    const [sortOrder, setSortOrder] = useState("default")

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

    const sortedProducts = [...products]

    if (sortOrder === "highest") {
        sortedProducts.sort((a, b) => b.salePrice - a.salePrice)
    } else if (sortOrder === "lowest") {
        sortedProducts.sort((a, b) => a.salePrice - b.salePrice)
    }

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber: number) => {
        setcurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }        

    const totalPages = Math.ceil(products.length / productsPerPage)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div>
            <div className='bg-[#F9F1E7] py-7 px-8 mb-4'>
                <div className='flex items-center justify-center md:justify-between md:ml-10'>
                    <div className='hidden md:flex items-center space-x-4'>
                        <div>
                            <LiaSlidersHSolid className='w-6 h-6'/>
                        </div>
                        <span className='font-poppins text-lg'>Filter</span>
                        <div className='px-2'>
                            <HiViewGrid className='w-6 h-6'/>
                        </div>
                        <div className='px-2'>
                            <TbLayoutDistributeHorizontal className='w-6 h-6'/>
                        </div>
                        <span className="relative flex items-center px-2">
                            <span className="absolute left-0 w-0.5 h-8 bg-gray-400"/>
                        </span>
                        <span className='font-poppins'>
                            Showing {indexOfFirstProduct + 1} - {indexOfLastProduct > products.length ? products.length 
                            : indexOfLastProduct} of {products.length} results
                        </span>
                    </div>

                    <div className='flex items-center space-x-4 px-8'>
                        <div className='flex items-center space-x-2'>
                            <span className='font-poppins'>
                                Show
                            </span>
                            <select 
                                className='px-2 py-1 border bg-white rounded-md font-poppins'
                                value={productsPerPage}
                                onChange={(e) => setProductsPerPage(Number(e.target.value))}                                
                            >
                                <option value={12}>12</option>
                                <option value={16}>16</option>
                                <option value={20}>20</option>                                
                            </select>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <span className='font-poppins'>
                                Sort by
                            </span>
                            <select 
                                className='px-2 py-1 border bg-white rounded-md font-poppins'
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="highest">Highest price</option>
                                <option value="lowest">Lowest price</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    )
}

export default ShopProducts