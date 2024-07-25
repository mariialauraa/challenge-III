import { Link } from 'react-router-dom'
import productsData from '../../data/products.json'

const Products = () => {

    const productsToShow = productsData.products.slice(6, 14)

  return (
    <div className='container mx-auto py-8 max-w-full font-poppins'>
        <h2 className='text-center font-bold text-4xl mb-8'>Our Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-8 justify-center'>
            {productsToShow.map(product => (
                <div 
                    key={product.id}
                    className='p-4 relative w-[285px] h-[446px] mx-auto'
                >
                    <img 
                        src={product.images.mainImage} 
                        alt={product.title} 
                        className='w-full h-48 object-cover'
                    />
                    {product.discountPercentage > 0 && (
                        <span className='absolute top-2 right-2 bg-red-500 text-white text-xs px-1 py-3 rounded-full'>
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
                </div>
            ))}
        </div>
        <div className='text-center'>
            <Link to="/shop">
                <button className='font-poppins font-semibold text-[#B88E2F] text-base w-60 h-12 border border-[#B88E2F]'>
                    Show More
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Products