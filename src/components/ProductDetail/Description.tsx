import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

const Description = () => {
  const { id } = useParams<{ id: string }>()
  const { getSingleProduct } = useProducts()

  const [isActive, setIsActive] = useState('description')

  if (!id) {
    return <div>Product not found</div>
  }

  const product = getSingleProduct(parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  const handleTabChange = (tab: string) => {
    setIsActive(tab)
  }

  return (
    <div className="flex flex-col items-center border-t border-gray-400 mt-10 py-2 px-8 md:px-0">
      <div className="flex space-x-8 mt-10 mb-3 font-poppins text-xl md:text-2xl">
        <h2
          className={`cursor-pointer ${isActive === 'description' ? 'text-black font-medium' : 'text-gray-400 font-normal'}`}
          onClick={() => handleTabChange('description')}
        >
          Description
        </h2>
        <h2
          className={`cursor-pointer ${isActive === 'additional' ? 'text-black font-medium' : 'text-gray-400 font-normal'}`}
          onClick={() => handleTabChange('additional')}
        >
          Additional Information
        </h2>
      </div>
      <div className="mt-4 font-poppins font-normal text-gray-400 text-base md:px-28">
        {isActive === 'description' && <p className='px-4 py-2 leading-7'>{product.description.long}</p>}
        {isActive === 'additional' && <p className='px-4 py-2 leading-7'>
            Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br/>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted phero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>}
      </div>
      <div className="flex flex-wrap md:flex-nowrap space-x-4 justify-center">
        {product.images.gallery.map((image, index) => (
            <img key={index} src={image} alt={product.title} className='mt-9 w-48 h-48 rounded-lg'/>
        ))}
      </div>
    </div>
  );
};

export default Description;