import { Link } from 'react-router-dom'
import Dining from '../../assets/dining.png'
import Living from '../../assets/living.png'
import Bedroom from '../../assets/bedroom.png'

const Categories = () => {
  return (
    <div className='my-12 font-poppins text-center px-4'>
        <h2 className='font-bold text-black text-3xl mb-2'>Browse The Range</h2>
        <p className='text-gray-600 text-xl font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul className='flex justify-center pt-12 space-x-5'>
            <li className='flex flex-col items-center'>
                <Link to="/shop">
                    <img src={Dining} alt="Dining" className='rounded-lg mb-7 w-48 md:w-full'/>
                </Link>
                <span className='text-center font-semibold text-base md:text-2xl'>Dining</span>
            </li>
            <li className='flex flex-col items-center'>
                <Link to="/shop">
                    <img src={Living} alt="Living" className='rounded-lg mb-7 w-48 md:w-full'/>
                </Link>
                <span className='text-center font-semibold text-base md:text-2xl'>Living</span>
            </li>
            <li className='flex flex-col items-center'>
                <Link to="/shop">
                    <img src={Bedroom} alt="Bedroom" className='rounded-lg mb-7 w-48 md:w-full'/>
                </Link>
                <span className='text-center font-semibold text-base md:text-2xl'>Bedroom</span>
            </li>
        </ul>
    </div>
  )
}

export default Categories