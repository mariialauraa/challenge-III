import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RelatedProducts = () => {
    const { id } = useParams<{ id: string }>()
    const { getSingleProduct, products } = useProducts()

    const [visibleProduct, setVisibleProduct] = useState(4);

    if (!id) {
        return <div>Product not found</div>;
    }

    const product = getSingleProduct(parseInt(id))

    if (!product || !products ) {
        return <div>Product not found</div>;
    }

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id)

    const handleShowMore = () => {
        setVisibleProduct(prevCount => prevCount + 4)
    }

  return (
    <div className="flex flex-col items-center">
        <h2 className="my-14 font-poppins text-3xl md:text-4xl font-medium">Related Products</h2>
        <div className="font-poppins">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-8 justify-center">                
                {relatedProducts.slice(0, visibleProduct).map(relatedProducts => (
                    <div 
                        key={relatedProducts.id}
                        className="relative w-[285px] mx-auto"
                    >
                        <img src={relatedProducts.images.mainImage} alt={relatedProducts.title} className="w-full h-48 object-cover"/>
                        <div className='p-4 bg-[#F4F5F7] mb-4'>
                            <h3 className='font-semibold text-lg'>
                                {relatedProducts.title}
                            </h3>
                            <p className='text-gray-500 text-xs font-medium'>
                                {relatedProducts.description.short}
                            </p>
                            <div className='flex items-center space-x-4 mt-4'>
                                <span className='font-semibold text-lg'>
                                        R$ {relatedProducts.salePrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProduct < relatedProducts.length && (
                <div className="flex justify-center">
                    <button
                        onClick={handleShowMore}
                        className='font-poppins font-semibold text-[#B88E2F] text-base w-60 h-12 border border-[#B88E2F] mt-11'
                    >
                        Show More
                    </button>
                </div>
 
            )}
        </div>
    </div>
  )
}

export default RelatedProducts