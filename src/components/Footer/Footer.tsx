import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='max-w-[1440px] h-[505px] text-black pt-16 mx-auto'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-4 ml-12 md:ml-24 justify-center'>
            <div>
                <h2 className='text-2xl font-poppins font-bold mb-12'>Funiro.</h2>
                <p className='text-base font-poppins font-normal text-gray-400'>
                    400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA
                </p>
                <div className='flex gap-4 mt-12'>
                    <a href="https://www.facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <div className='ml-16 mt-10 md:ml-32 md:mt-0'>
                <h3 className='text-base font-medium font-poppins text-gray-400 mb-6 md:mb-14'>Links</h3>
                <ul className='text-black text-base font-medium font-poppins'>
                    <li className='mb-4 md:mb-12'>Home</li>
                    <li className='mb-4 md:mb-12'>Shop</li>
                    <li className='mb-4 md:mb-12'>About</li>
                    <li className='mb-12'>Contact</li>
                </ul>
            </div>
            <div className='ml-16'>
                <h3 className='text-base font-medium font-poppins text-gray-400 mb-6 md:mb-14'>Help</h3>
                <ul className='text-black text-base font-medium font-poppins'>
                    <li className='mb-4 md:mb-12'>Payment Options</li>
                    <li className='mb-4 md:mb-12'>Returns</li>
                    <li className='mb-12'>Privacy Policies</li>
                </ul>
            </div>
            <div className='ml-16 font-poppins'>
                <h3 className='text-base font-medium font-poppins text-gray-400 mb-6 md:mb-14'>Newsletter</h3>
                <form>
                    <input 
                        type="email"
                        placeholder='Enter Your Email Address'
                        className='p-2 border-b-2 border-black mb-2 text-sm font-normal mr-2' 
                    />
                    <button className='text-black text-sm font-medium p-2 border-b-2 border-black'>
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
        <div className='border-t border-gray-300 ml-12 md:ml-24 mr-8 mt-6 md:mt-0 pb-4'>
            <p className='font-normal text-base text-black font-poppins pt-4 text-center md:text-start'>
                2023 funiro. All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer