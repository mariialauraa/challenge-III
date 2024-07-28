import ProductDetail from "../components/ProductDetail/ProductDetail"
import Description from "../components/ProductDetail/Description"
import RelatedProducts from "../components/ProductDetail/RelatedProducts"


const SingleProduct = () => {
  return (
    <div>
        <ProductDetail />
        <Description />
        <RelatedProducts />
    </div>
  )
}

export default SingleProduct