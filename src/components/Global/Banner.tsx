import Trophy from '../../assets/trophy.png'
import Protection from '../../assets/guarantee.png'
import Shipping from '../../assets/shipping.png'
import Support from '../../assets/customer-support.png'

const Banner = () => {

  return (
        <div className="mt-10 h-full bg-[#FAF3EA] py-10">
            <div className='container mx-auto flex flex-wrap justify-start md:justify-around items-center'>
                <div className='flex flex-row items-center px-2 mb-6 font-poppins'>
                    <img src={Trophy} alt="Trophy" className='w-12 h-14 mr-4'/>
                    <div>
                        <h3 className='font-semibold text-2xl'>High Quality</h3>
                        <p className='text-xl font-medium text-[#898989]'>crafted from top materials</p>
                    </div>
                </div>
                <div className='flex flex-row items-center  px-4 mb-6 font-poppins'>
                    <img src={Protection} alt="Warning" className='w-12 h-14 mr-4'/>
                    <div>
                        <h3 className='font-semibold text-2xl'>Warranty Protection</h3>
                        <p className='text-xl font-medium text-[#898989]'>crafted from top materials</p>
                    </div>
                </div>
                <div className='flex flex-row items-center  px-4 mb-6 font-poppins'>
                    <img src={Shipping} alt="Order" className='w-12 h-14 mr-4'/>
                    <div>
                        <h3 className='font-semibold text-2xl'>Free Shipping</h3>
                        <p className='text-xl font-medium text-[#898989]'>Order over 150 $</p>
                    </div>
                </div>
                <div className='flex flex-row items-center px-4 mb-6 font-poppins'>
                    <img src={Support} alt="Support" className='w-12 h-14 mr-4'/>
                    <div>
                        <h3 className='font-semibold text-2xl'>24 / 7 Support</h3>
                        <p className='text-xl font-medium text-[#898989]'>Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner